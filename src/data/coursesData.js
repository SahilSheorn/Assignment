// coursesData.js
const coursesData = [
  {
    id: 1,
    course: '1st',
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'A) - Overview of React Native, setting up your development environment.',
        content2: 'B) - Additional content for week 1',
        content3: 'C) - Even more content for week 1',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'A) - Creating a simple mobile app using React Native components.',
        content2: 'B) - Additional content for week 2',
        content3: 'C) - Even more content for week 2',
      },
      {
        week: 3,
        topic: 'Navigation in React Native',
        content: 'A) - Setting up navigation in your app, creating navigation stacks and tabs.',
        content2: 'B) - Additional content for week 3',
        content3: 'C) - Even more content for week 3',
      },
      {
        week: 4,
        topic: 'State Management',
        content: 'A) - Introduction to state and props in React Native',
        content2: 'B) - Managing state using React Hooks',
        content3: 'C) - Using Redux for state management in React Native',
      },
      {
        week: 5,
        topic: 'Working with APIs',
        content: 'A) - Fetching data from APIs in React Native',
        content2: 'B) - Handling API responses',
        content3: 'C) - Integrating data into your React Native app',
      },
      {
        week: 6,
        topic: 'Building UIs with Expo',
        content: 'A) - Introduction to Expo for React Native development',
        content2: 'B) - Expo components and APIs',
        content3: 'C) - Building and testing your app using Expo',
      },
      {
        week: 7,
        topic: 'Advanced Topics',
        content: 'A) - Animations in React Native',
        content2: 'B) - Handling user input and gestures',
        content3: 'C) - Debugging and performance optimization',
      },
      {
        week: 8,
        topic: 'Navigation in React Native',
        content: 'A) - Setting up navigation in your app, creating navigation stacks and tabs.',
        content2: 'B) - Additional content for week 3',
        content3: 'C) - Even more content for week 3',
      },
      // ... more weeks ...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
      // ... more students ...
    ],
  },
  {
    id: 2,
    course: '2nd',
    name: 'Advanced React Development',
    instructor: 'Jane Smith',
    description: 'Take your React skills to the next level with advanced development techniques.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Solid understanding of React', 'Experience with state management'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'A) - Overview of React Native, setting up your development environment.',
        content2: 'B) - Additional content for week 1',
        content3: 'C) - Even more content for week 1',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'A) - Creating a simple mobile app using React Native components.',
        content2: 'B) - Additional content for week 2',
        content3: 'C) - Even more content for week 2',
      },
      {
        week: 3,
        topic: 'Navigation in React Native',
        content: 'A) - Setting up navigation in your app, creating navigation stacks and tabs.',
        content2: 'B) - Additional content for week 3',
        content3: 'C) - Even more content for week 3',
      },
      {
        week: 4,
        topic: 'State Management',
        content: 'A) - Introduction to state and props in React Native',
        content2: 'B) - Managing state using React Hooks',
        content3: 'C) - Using Redux for state management in React Native',
      },
      {
        week: 5,
        topic: 'Working with APIs',
        content: 'A) - Fetching data from APIs in React Native',
        content2: 'B) - Handling API responses',
        content3: 'C) - Integrating data into your React Native app',
      },
      {
        week: 6,
        topic: 'Building UIs with Expo',
        content: 'A) - Introduction to Expo for React Native development',
        content2: 'B) - Expo components and APIs',
        content3: 'C) - Building and testing your app using Expo',
      },
      {
        week: 7,
        topic: 'Advanced Topics',
        content: 'A) - Animations in React Native',
        content2: 'B) - Handling user input and gestures',
        content3: 'C) - Debugging and performance optimization',
      },
      {
        week: 8,
        topic: 'Navigation in React Native',
        content: 'A) - Setting up navigation in your app, creating navigation stacks and tabs.',
        content2: 'B) - Additional content for week 3',
        content3: 'C) - Even more content for week 3',
      },
      // ... more weeks ...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
      // ... more students ...
    ],
  },
  {
    id: 3,
    course: '3rd',
    name: 'Full Stack Web Development',
    instructor: 'Alex Johnson',
    description: 'Become a full-stack developer by learning both frontend and backend technologies.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '12 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of HTML, CSS, and JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Web Development',
        content: 'A) - Overview of web development, understanding the frontend and backend.',
        content2: 'B) - Setting up your development environment',
        content3: 'C) - Introduction to HTML and CSS',
      },
      {
        week: 2,
        topic: 'Frontend Development with React',
        content: 'A) - Building user interfaces with React components',
        content2: 'B) - State management in React',
        content3: 'C) - Styling in React applications',
      },
      {
        week: 3,
        topic: 'Backend Development with Node.js',
        content: 'A) - Introduction to server-side development',
        content2: 'B) - Building RESTful APIs with Node.js',
        content3: 'C) - Express.js framework for backend applications',
      },
      {
        week: 4,
        topic: 'Databases and Data Modeling',
        content: 'A) - Overview of databases and database design',
        content2: 'B) - Working with MongoDB for NoSQL data storage',
        content3: 'C) - Integrating databases into web applications',
      },
      {
        week: 5,
        topic: 'Authentication and Authorization',
        content: 'A) - Implementing user authentication',
        content2: 'B) - Authorization and role-based access control',
        content3: 'C) - Securing web applications',
      },
      {
        week: 6,
        topic: 'Frontend Frameworks (Angular/Vue)',
        content: 'A) - Introduction to Angular and Vue.js',
        content2: 'B) - Comparisons with React for frontend development',
        content3: 'C) - Building with alternative frontend frameworks',
      },
      {
        week: 7,
        topic: 'RESTful API Best Practices',
        content: 'A) - Designing and documenting RESTful APIs',
        content2: 'B) - Handling errors and versioning in APIs',
        content3: 'C) - Testing and debugging APIs',
      },
      {
        week: 8,
        topic: 'Real-time Web Applications',
        content: 'A) - Introduction to WebSocket technology',
        content2: 'B) - Building real-time features with Socket.io',
        content3: 'C) - Implementing chat applications',
      },
      {
        week: 9,
        topic: 'Containerization and Docker',
        content: 'A) - Overview of containerization and Docker',
        content2: 'B) - Creating and managing containers',
        content3: 'C) - Deploying applications with Docker',
      },
      {
        week: 10,
        topic: 'Serverless Architecture',
        content: 'A) - Understanding serverless computing',
        content2: 'B) - Building serverless applications with AWS Lambda',
        content3: 'C) - Pros and cons of serverless architecture',
      },
      {
        week: 11,
        topic: 'Testing and Debugging Strategies',
        content: 'A) - Writing unit tests for web applications',
        content2: 'B) - Debugging techniques for frontend and backend',
        content3: 'C) - Continuous integration and deployment',
      },
      {
        week: 12,
        topic: 'Final Project and Portfolio Showcase',
        content: 'A) - Working on a full-stack web development project',
        content2: 'B) - Creating a portfolio to showcase your projects',
        content3: 'C) - Presenting and discussing your final project',
      },
    ],
    students: [
      {
        id: 301,
        name: 'Jack Smith',
        email: 'jack@example.com',
      },
      {
        id: 302,
        name: 'Lily Johnson',
        email: 'lily@example.com',
      },
      // ... more students ...
    ],
  },
  {
    id: 4,
    course: '4th',
    name: 'Data Science Fundamentals',
    instructor: 'Emily Brown',
    description: 'Explore the fundamentals of data science, including data analysis and machine learning.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '7 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of programming and statistics'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'A) - Overview of data science, understanding data types and structures.',
        content2: 'B) - Introduction to Python for data science',
        content3: 'C) - Data cleaning and preprocessing',
      },
      {
        week: 2,
        topic: 'Exploratory Data Analysis (EDA)',
        content: 'A) - Statistical analysis and visualization',
        content2: 'B) - Handling missing data',
        content3: 'C) - Feature engineering',
      },
      {
        week: 3,
        topic: 'Statistical Modeling',
        content: 'A) - Introduction to statistical modeling techniques',
        content2: 'B) - Linear regression and logistic regression',
        content3: 'C) - Model evaluation and validation',
      },
      {
        week: 4,
        topic: 'Machine Learning Basics',
        content: 'A) - Overview of machine learning algorithms',
        content2: 'B) - Supervised and unsupervised learning',
        content3: 'C) - Model training and evaluation',
      },
      {
        week: 5,
        topic: 'Advanced Machine Learning',
        content: 'A) - Ensemble methods (Random Forest, Gradient Boosting)',
        content2: 'B) - Neural networks and deep learning',
        content3: 'C) - Hyperparameter tuning',
      },
      {
        week: 6,
        topic: 'Big Data and Cloud Computing',
        content: 'A) - Handling large datasets',
        content2: 'B) - Introduction to cloud computing for data science',
        content3: 'C) - Using cloud platforms for data analysis',
      },
      {
        week: 7,
        topic: 'Data Science in Practice',
        content: 'A) - Real-world applications of data science',
        content2: 'B) - Case studies and industry examples',
        content3: 'C) - Ethical considerations in data science',
      },
      // ... more weeks ...
    ],
    students: [
      {
        id: 401,
        name: 'Eva Johnson',
        email: 'eva@example.com',
      },
      {
        id: 402,
        name: 'Frank Martin',
        email: 'frank@example.com',
      },
      // ... more students for the Data Science Fundamentals course ...
    ],
  },
  {
    id: 5,
    course: '5th',
    name: 'Mobile App Design',
    instructor: 'Michael White',
    description: 'Learn the principles of mobile app design and create user-friendly interfaces.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Thursdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of design principles'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Mobile App Design',
        content: 'A) - Principles of good design, understanding user experience.',
        content2: 'B) - Tools and software for mobile app design',
        content3: 'C) - Creating wireframes and prototypes',
      },
      {
        week: 2,
        topic: 'UI/UX Design in Practice',
        content: 'A) - Designing user interfaces for mobile apps',
        content2: 'B) - User experience testing and feedback',
        content3: 'C) - Iterative design process',
      },
      {
        week: 3,
        topic: 'Color Theory and Typography',
        content: 'A) - Importance of color in mobile app design',
        content2: 'B) - Typography principles and best practices',
        content3: 'C) - Creating visually appealing UIs',
      },
      {
        week: 4,
        topic: 'Interactive Prototyping',
        content: 'A) - Introduction to interactive prototyping tools',
        content2: 'B) - Creating interactive mockups for user testing',
        content3: 'C) - Refining interactions and animations',
      },
      {
        week: 5,
        topic: 'Usability and Accessibility',
        content: 'A) - Designing for usability and accessibility',
        content2: 'B) - Conducting usability testing',
        content3: 'C) - Implementing accessibility features',
      },
      {
        week: 6,
        topic: 'Designing for Multiple Platforms',
        content: 'A) - Adapting designs for iOS and Android',
        content2: 'B) - Responsive design principles',
        content3: 'C) - Challenges and solutions',
      },
      {
        week: 7,
        topic: 'App Icon and Logo Design',
        content: 'A) - Creating memorable app icons and logos',
        content2: 'B) - Branding considerations for mobile apps',
        content3: 'C) - Guidelines for effective branding',
      },
      {
        week: 8,
        topic: 'Final Project and Portfolio',
        content: 'A) - Working on a real-world mobile app design project',
        content2: 'B) - Creating a design portfolio',
        content3: 'C) - Presenting and showcasing your work',
      },
    ],
    students: [
      {
        id: 501,
        name: 'Grace Taylor',
        email: 'grace@example.com',
      },
      {
        id: 502,
        name: 'Harry Lee',
        email: 'harry@example.com',
      },
      // ... more students for the Mobile App Design course ...
    ],
  },
  // ... add more courses as needed ...
];

export default coursesData;
