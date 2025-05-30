const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Check if API key is loaded
if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY is not set in .env file');
    process.exit(1);
}

console.log('API Key loaded:', process.env.OPENAI_API_KEY.substring(0, 5) + '...');

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Context endpoint
app.get('/api/context', async (req, res) => {
    try {
        const contextPath = path.join(__dirname, 'newContext.json');
        const contextData = await fs.readFile(contextPath, 'utf8');
        res.json(JSON.parse(contextData));
    } catch (error) {
        console.error('Error loading context:', error);
        res.status(500).json({ 
            error: 'Failed to load context data',
            details: error.message
        });
    }
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        console.log('Received chat request:', req.body);
        const { message, context } = req.body;
        
        if (!message) {
            throw new Error('No message provided in request');
        }

        console.log('Sending request to OpenAI...');
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `${context.system_prompt}\n\nHere is the context data you MUST use:\n${JSON.stringify(context.data, null, 2)}`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.1,
            max_tokens: 150
        });

        console.log('Received response from OpenAI');
        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            response: error.response?.data
        });
        res.status(500).json({ 
            error: 'Failed to get response from OpenAI',
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});