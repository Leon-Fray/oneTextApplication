// Context data for the chatbot
const questionsJson = {
  "interview_questions": [
    {
      "question": "What was your last/current role, and why do you want to change now?",
      "answer": "My last role was a Software Engineer at Hexagon, where I've worked on building scalable back-end services for their OnCall Dispatch Smart Advisor product. I implemented RESTful APIs, optimized MongoDB indexing, and helped design reusable modules to speed up development. I'm looking to change now because I want to work in a faster-paced, startup environment where I can contribute across the stack and help shape the product and engineering culture—something that aligns closely with OneText's approach."
    },
    {
      "question": "What's your ideal next role? If you had carte-blanche, what would the position, responsibilities, engineering culture etc. look like?",
      "answer": "My ideal role would allow me to work in a product-focused team, owning meaningful features end-to-end. I'd love to work in a culture that emphasizes fast iteration, rapid MVPs, and learning by doing. A lean process with quick feedback loops, really appeals to me. I'd also appreciate the opportunity to mentor or eventually lead other engineers as the company grows."
    },
    {
      "question": "Can you show me some code you wrote or an app or platform or library that you're proud of building, and talk me through how it works?",
      "answer": "Yes. I built a full stack healthcare appointment app using the MERN stack. It includes role-based authentication, MVC structure, and an admin panel. I can walk through backend structure, routing logic, and how JWT authentication is handled. GitHub: https://github.com/Leon-Fray/AppointmentBookingProject"
    },
    {
      "question": "When Jonathan first pitched me on building a new product with SMS I thought it was a bit silly. Why does it appeal to you?",
      "answer": "SMS is deceptively powerful. It's immediate, and doesn't require a smartphone or app install. That makes it perfect for reaching users quickly, whether for transactions, reminders, or automation. From a developer's perspective, it's a fun challenge to build UX and automation around such a constrained but universal medium. Plus, the conversion and engagement rates for SMS are often much higher than email or app notifications."
    },
    {
      "question": "What was the most interesting or challenging integration you've done with another platform, or API?",
      "answer": "At Hexagon, I integrated a role-based access control system that interacted with third-party identity services. At Northvolt, automating QA tests that aligned API responses with real-time hardware outputs was also challenging—ensuring the accuracy of defect detection at scale."
    },
    {
      "question": "Do you lean more towards building UX, front-end, apis, working with databases, or do you like to be 'full stack' and go where you're most needed?",
      "answer": "I enjoy front-end work when it's about building thoughtful, usable interfaces, but I'm probably most comfortable building robust, secure APIs and handling backend logic. I've worked extensively with Node.js, MongoDB, and Express.js, but I enjoy touching every layer when needed."
    },
    {
      "question": "Why a startup? Why not join a big corp?",
      "answer": "I've done corporate—great structure, but sometimes too much red tape. I want to work somewhere where I can move fast, see the direct impact of what I build, and help shape the direction of the product. Startups give you that kind of ownership and learning curve, and that excites me."
    },
    {
      "question": "What do you hate about <insert technology> you've used in the past? If you had full creative control, what would you change about it?",
      "answer": "MongoDB is great for flexibility, but that schema-less nature can backfire without discipline—especially as a team scales. I've seen issues where loosely enforced structures made it harder to query and maintain data consistency. If I had creative control, I'd add optional schema enforcement by default, and stronger tooling for introspecting schema drift."
    },
    {
      "question": "What's your preferred approach to testing, static checks, etc? And do you like TDD?",
      "answer": "I lean toward pragmatic testing—unit tests for core logic, integration tests for API flows, and Postman or automated scripts for end-to-end. I use TDD in cases where the logic is complex and benefits from guiding the implementation, but I don't strictly follow it in all cases. Linting and static checks (like ESLint or TypeScript) are part of my daily workflow."
    },
    {
      "question": "Let's pair-code something in the language/framework of your choice...",
      "answer": "Yes! I use VS Code and can screen share with everything set up. I'm happy to build a front-end component, a helper function, or sketch out a basic API—whatever fits the use case."
    },
    {
      "question": "Do you see yourself as more of an individual contributor, or do you aspire to be more of an engineering lead as we grow and hire?",
      "answer": "I'm confident as an Individual contriibutor now, but I'm working toward becoming a lead. I'd love to grow into a leadership role as OneText scales."
    },
    {
      "question": "Do you like to have engineering requirements completely set in stone before you start work, or are you comfortable starting building based on a mostly-formed idea that will evolve over time?",
      "answer": "I'm very comfortable working with a rough idea and evolving it while building. That said, I do like to clarify the interface and end goals upfront so I don't build something that conflicts with future needs. The MVP-first mindset fits me perfectly."
    },
    {
      "question": "Tell me about a time you said no to someone in a position of power over you.",
      "answer": "At Hexagon, a senior PM wanted to skip certain QA tests to meet a deadline. I explained the risk of letting defective units pass into production and offered a compromise: reduce test sample size temporarily, but keep automated regression tests active to catch anomalies. That preserved both delivery and safety."
    },
    {
      "question": "Tell me about something you did in the past that ended up being way too complicated, and how you helped simplify it.",
      "answer": "In an early project, I built a custom auth middleware with layered permission checks, session validation, etc. It worked but was bloated. Later I refactored using Passport.js and JWT, which simplified the codebase drastically and made it easier for others to contribute."
    },
    {
      "question": "What's YOUR favorite interview question, to pick a good engineer?",
      "answer": "If you had to rewrite one part of your favorite app from scratch, what would it be and why? It reveals how deeply they've thought about architecture, user experience, and trade-offs."
    },
    {
      "question": "What's something cool you've done with AI recently?",
      "answer": "I recently built a chrome extension that uses open AI's API to analyze websites and allow users to discuss articles with it in french via voice or text."
    }
  ],
  "questions": [
    {
      "question": "What is your experience with browser extensions?",
      "answer": "I have experience developing browser extensions since 2021, focusing on creating user-friendly interfaces and implementing complex functionality. I'm particularly interested in how browser extensions can enhance user productivity and experience."
    },
    {
      "question": "Why do you want to work at OneText?",
      "answer": "I'm drawn to OneText's focus on a small, high-impact team and your build-fast, ship-fast culture. I love the idea of working on an awesome product with impressive people while continuously growing and learning."
    },
    {
      "question": "What makes you qualified for this role?",
      "answer": "I bring experience and clearly initiative. including project management, backend development, software review, and sales. I'm passionate about this space and committed to continuous learning."
    }
  ]
};

const bonusQuestionsJson = {
  "interview_questions_chrome_extension_engineer": [
    {
      "question": "Have you ever worked with browser APIs, or built browser-based tools or extensions?",
      "answer": "Yes I have actually built a few chrome extensions mainly to help me learn, one of my favourtie ones being a chrome extension that uses open ai's api to read english articles and have a conversation with me about them in french. And of course I amde this extension to help me learn french."
    },
    {
      "question": "How would you approach building a lightweight Chrome extension MVP in under 2 weeks?",
      "answer": "First, I'd define the core use case and user interaction — ideally the 'one thing' the extension must do well. I'd then: (1) outline a simple UI, (2) use manifest v3 with background and content scripts, (3) add logging and error boundaries, (4) package and test it locally, and (5) implement basic permissions and analytics if time allows. I'd track metrics early to validate usefulness and kill it fast if it doesn't stick — which aligns well with OneText's MVP cycle."
    },
    {
      "question": "What's one optimization you'd make for performance in a Chrome extension?",
      "answer": "I'd avoid unnecessary background script execution by using event-driven APIs like chrome.runtime.onMessage and chrome.tabs.onUpdated. I'd also minimize content script injections and cache data using chrome.storage.local to avoid redundant network calls."
    },
    {
      "question": "What do you think makes a good user experience in a browser extension?",
      "answer": "A good extension should be non-intrusive, respond instantly, have a clear purpose, respect user privacy, and request minimal permissions. It should feel like a seamless power tool in the user's workflow—fast, simple, and reliable."
    },
    {
      "question": "Tell me about a time you built something under constraints or unclear requirements.",
      "answer": "In my capstone project, I built a secure RESTful API system with JWT auth, but the business logic kept evolving. Instead of waiting on finalized requirements, I proposed modular routes that we could easily extend. That let us ship an MVP early and adapt features as needed—an approach that fits fast-moving startup environments well."
    },
    {
      "question": "How do you think about permissions in Chrome extensions?",
      "answer": "I see permissions as a contract with the user. I always aim to request the minimum required permissions up front and defer optional ones using chrome.permissions.request() as needed. That reduces friction and builds user trust."
    },
    {
      "question": "How would you test and debug a Chrome extension?",
      "answer": "I'd use the Chrome Extensions panel in DevTools to inspect background/content scripts, log key events, and write unit tests for logic-heavy parts using tools like Jest. I'd also test flows manually with sample data and consider building feedback reporting into early builds."
    },
    {
      "question": "How do your personal working preferences align with remote async work in a fast-moving team?",
      "answer": "Perfectly. I value long, uninterrupted focus blocks and minimal meetings—exactly what async, remote environments offer. I communicate clearly, take ownership of results, and thrive in systems that prioritize outcome over process."
    },
    {
      "question": "What's a UX/technical problem you think Chrome extensions are uniquely suited to solve?",
      "answer": "Chrome extensions are great for streamlining repetitive browser tasks like form autofill, scraping structured data from websites, or summarizing text with AI. These use cases are hard to deliver well in standalone web apps but ideal for lightweight, context-aware extensions."
    },
    {
      "question": "How would you bring value beyond just the role of a Chrome extension engineer?",
      "answer": "I bring systems thinking, product awareness, and a drive to improve team processes. I proactively spot opportunities for improvement, help others grow, and offer backend expertise for syncing and securing extension data. I'm not just here to write code—I'm here to make the product and team better."
    }
  ],
  "questions": [
    {
      "question": "What's your approach to problem-solving?",
      "answer": "I believe in breaking down complex problems into smaller, manageable pieces. I start by understanding the requirements thoroughly, then design a solution, implement it iteratively, and test as I go. I'm not afraid to pivot if something isn't working as expected."
    },
    {
      "question": "How do you handle technical challenges?",
      "answer": "I tackle technical challenges by first researching existing solutions, then prototyping the most promising approach. I'm comfortable asking for help when needed and believe in documenting solutions for future reference."
    },
    {
      "question": "What's your favorite project you've worked on?",
      "answer": "One of my favorite projects was developing a browser extension that integrated AI capabilities for real-time content analysis. It combined my interests in AI, user experience, and browser extension development."
    }
  ]
};

const userManualJson = {
  "user_manual": {
    "name": "Leon Fray",
    "overview": "This manual outlines how Leon likes to work, covering his strengths, weaknesses, work preferences, collaboration advice, management style, interests, and personal philosophies.",
    "strengths": [
      "Fast learner",
      "Creative and open to diverse perspectives",
      "Systematic thinker with an emphasis on learning from failure",
      "Enjoys teaching and coaching others",
      "Thrives in zero-to-one, chaotic environments",
      "Proactively identifies and solves problems",
      "High personal and professional standards",
      "Visionary thinker with long-term focus",
      "Extreme ownership of responsibilities"
    ],
    "weaknesses": [
      "Reluctant to ask for help",
      "Gets bored after solving a problem",
      "Fear of disappointing others may lead to overcommitment",
      "Perfectionism may slow progress",
      "Can be overly abstract and not ground ideas in action"
    ],
    "work_style": {
      "communication": "I prefer clear, direct communication and regular check-ins. I'm comfortable with both async and real-time collaboration.",
      "process": "I work best with a mix of structure and flexibility. I like to have clear goals but appreciate the freedom to find the best path to achieve them.",
      "collaboration": "I enjoy pair programming and code reviews. I believe in sharing knowledge and helping team members grow.",
      "tools": "I'm proficient with modern development tools and always open to learning new ones that can improve our workflow."
    },
    "advice_for_collaborators": [
      "Call me out—persuasiveness doesn't equal correctness.",
      "Be direct and honest; don't sugarcoat.",
      "Ask 'why'—always understand the reasoning behind my efforts.",
      "Maintain high standards and give honest, tough feedback.",
      "Give clear, ambitious goals and metrics that show impact."
    ],
    "management_style": {
      "ownership": "Takes full responsibility for everything the team does.",
      "praise_and_criticism": "Praise in public, criticize in private.",
      "autonomy": "Provides strategic direction and trusts the team to execute without micromanagement.",
      "processes": "Creates systems that reduce meetings and improve output quality.",
      "goal_driven": "Focuses the team on clear, falsifiable goals rather than pleasing the manager."
    },
    "interests": {
      "sports": ["NBA - Boston Celtics", "Tennis", "Table Tennis", "Pickleball"],
      "hobbies": ["Kayaking", "Reading", "Good conversations"],
      "book_recommendations": [
        {
          "title": "Show Your Work",
          "takeaway": "Creativity thrives through sharing your process generously."
        },
        {
          "title": "Deep Work",
          "takeaway": "Deep focus yields your best work, not multitasking."
        },
        {
          "title": "Don't Believe Everything You Think",
          "takeaway": "Challenge your negative thoughts—they are not facts."
        },
        {
          "title": "Mastery",
          "takeaway": "True mastery comes from deliberate practice and mentorship."
        }
      ]
    },
    "favorite_quotes": [
      "People don't buy products, they buy feelings.",
      "That which hinders your task, is your task.",
      "If you can't go over, go through."
    ],
    "preferences": {
      "meetings": "I prefer shorter, focused meetings with clear agendas. I'm a fan of async communication for non-urgent matters.",
      "feedback": "I welcome constructive feedback and believe it's crucial for growth. I'm also comfortable giving feedback in a respectful way.",
      "learning": "I'm constantly learning and enjoy sharing knowledge with the team. I believe in learning by doing and through collaboration."
    }
  }
}; 