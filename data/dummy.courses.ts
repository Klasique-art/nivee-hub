import { Course } from '@/types/courses.types';

// ============================================================================
// DUMMY COURSE DATA WITH UNSPLASH IMAGES
// ============================================================================

export const courses: Course[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        title: "Full-Stack Web Development with Python & React",
        slug: "full-stack-web-development-python-react",
        description: "Master the complete web development stack with Python Django backend and React frontend. This comprehensive course covers everything from database design to deploying production applications. You'll build real-world projects including an e-commerce platform, social media app, and API services.",
        short_description: "Learn to build modern web applications with Python Django and React",
        instructors: ["550e8400-e29b-41d4-a716-446655440101", "550e8400-e29b-41d4-a716-446655440102"],
        instructor_names: ["Dr. Kwame Mensah", "Sarah Johnson"],
        cover_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "2500.00",
        currency: "GHS",
        early_bird_price: "2000.00",
        early_bird_deadline: "2024-02-15T23:59:59Z",
        current_price: "2000.00",
        start_date: "2024-03-01T08:00:00Z",
        end_date: "2024-06-30T18:00:00Z",
        registration_start: "2024-01-15T00:00:00Z",
        registration_end: "2024-02-28T23:59:59Z",
        max_students: 50,
        min_students: 10,
        enrolled_count: 32,
        seats_available: 18,
        duration_weeks: 16,
        hours_per_week: 15,
        difficulty_level: "intermediate",
        prerequisites: "- Basic understanding of HTML, CSS, and JavaScript\n- Familiarity with programming concepts\n- Computer with at least 8GB RAM\n- Willingness to commit 15 hours per week",
        what_you_will_learn: "- Build RESTful APIs with Django REST Framework\n- Create dynamic UIs with React and hooks\n- Implement authentication and authorization\n- Work with PostgreSQL databases\n- Deploy applications to production\n- Write clean, maintainable code\n- Use Git for version control\n- Implement real-time features with WebSockets",
        requirements: "- Laptop/Desktop with 8GB+ RAM\n- Stable internet connection\n- GitHub account\n- Text editor (VS Code recommended)",
        tags: ["Python", "Django", "React", "PostgreSQL", "Web Development", "Full-Stack"],
        category: "Web Development",
        status: "active",
        is_published: true,
        is_featured: true,
        syllabus: null,
        faq: [
            { question: "What if I miss a live session?", answer: "All live sessions are recorded and available for replay within 24 hours." },
            { question: "Do I need prior Python experience?", answer: "Basic programming knowledge is required, but we'll cover Python fundamentals in the first module." },
            { question: "Will I receive a certificate?", answer: "Yes, upon successful completion you'll receive a verified certificate of completion." }
        ],
        additional_info: {
            project_count: 5,
            live_sessions: 32,
            coding_challenges: 50,
            has_mentorship: true
        },
        created_at: "2024-01-10T10:00:00Z",
        updated_at: "2024-01-20T15:30:00Z",
        published_at: "2024-01-15T09:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        title: "Mobile App Development with React Native",
        slug: "mobile-app-development-react-native",
        description: "Build cross-platform mobile applications for iOS and Android using React Native. Learn to create performant, native-feeling apps with a single codebase. This course covers everything from basic components to advanced topics like native modules and app deployment.",
        short_description: "Create iOS and Android apps with React Native",
        instructors: ["550e8400-e29b-41d4-a716-446655440103"],
        instructor_names: ["Jennifer Osei"],
        cover_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "2000.00",
        currency: "GHS",
        early_bird_price: null,
        early_bird_deadline: null,
        current_price: "2000.00",
        start_date: "2024-04-01T08:00:00Z",
        end_date: "2024-06-30T18:00:00Z",
        registration_start: "2024-02-01T00:00:00Z",
        registration_end: "2024-03-25T23:59:59Z",
        max_students: 30,
        min_students: 8,
        enrolled_count: 15,
        seats_available: 15,
        duration_weeks: 12,
        hours_per_week: 12,
        difficulty_level: "intermediate",
        prerequisites: "- Solid JavaScript fundamentals\n- React experience recommended\n- Understanding of mobile app concepts",
        what_you_will_learn: "- Build cross-platform mobile apps\n- Work with React Native components\n- Implement navigation and routing\n- Integrate with REST APIs\n- Handle device features (camera, GPS, etc.)\n- Publish apps to App Store and Play Store\n- Implement push notifications\n- Use native modules when needed",
        requirements: "- Mac (for iOS development) or Windows/Linux (for Android)\n- Xcode (Mac) or Android Studio\n- Physical device for testing (recommended)\n- React knowledge",
        tags: ["React Native", "Mobile Development", "iOS", "Android", "JavaScript"],
        category: "Mobile Development",
        status: "upcoming",
        is_published: true,
        is_featured: true,
        syllabus: null,
        faq: [
            { question: "Can I develop on Windows?", answer: "Yes, but you'll only be able to build Android apps. iOS development requires a Mac." },
            { question: "Do I need a Mac?", answer: "Only if you want to build iOS apps. Android development works on any platform." }
        ],
        additional_info: {
            project_count: 4,
            live_sessions: 24,
            coding_challenges: 30
        },
        created_at: "2024-01-12T11:00:00Z",
        updated_at: "2024-01-18T14:20:00Z",
        published_at: "2024-01-15T10:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        title: "Data Science & Machine Learning with Python",
        slug: "data-science-machine-learning-python",
        description: "Dive into the world of data science and machine learning. Learn to analyze data, build predictive models, and extract insights using Python's powerful data science ecosystem. This course covers pandas, NumPy, scikit-learn, and TensorFlow.",
        short_description: "Master data science and ML with Python",
        instructors: ["550e8400-e29b-41d4-a716-446655440104", "550e8400-e29b-41d4-a716-446655440105"],
        instructor_names: ["Prof. Kofi Adu", "Dr. Amina Ibrahim"],
        cover_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "3500.00",
        currency: "GHS",
        early_bird_price: "3000.00",
        early_bird_deadline: "2024-03-01T23:59:59Z",
        current_price: "3000.00",
        start_date: "2024-04-15T08:00:00Z",
        end_date: "2024-08-15T18:00:00Z",
        registration_start: "2024-02-01T00:00:00Z",
        registration_end: "2024-04-10T23:59:59Z",
        max_students: 40,
        min_students: 12,
        enrolled_count: 28,
        seats_available: 12,
        duration_weeks: 18,
        hours_per_week: 18,
        difficulty_level: "advanced",
        prerequisites: "- Strong Python programming skills\n- Understanding of mathematics (linear algebra, calculus, statistics)\n- Basic machine learning concepts helpful\n- Experience with Jupyter notebooks",
        what_you_will_learn: "- Data manipulation with pandas and NumPy\n- Data visualization with matplotlib and seaborn\n- Statistical analysis and hypothesis testing\n- Build ML models with scikit-learn\n- Deep learning with TensorFlow/Keras\n- Natural Language Processing\n- Computer Vision basics\n- Deploy ML models to production",
        requirements: "- Computer with 16GB+ RAM recommended\n- Python 3.8+ installed\n- Jupyter Notebook/Lab\n- Basic understanding of Python",
        tags: ["Python", "Data Science", "Machine Learning", "AI", "Deep Learning", "TensorFlow"],
        category: "Data Science",
        status: "upcoming",
        is_published: true,
        is_featured: true,
        syllabus: null,
        faq: [
            { question: "Do I need a math degree?", answer: "No, but strong math fundamentals help. We'll review key concepts during the course." },
            { question: "Can I get a job after this course?", answer: "With dedication and completion of projects, you'll have a strong portfolio for entry-level positions." },
            { question: "Is GPU required?", answer: "Not required. We'll use Google Colab for deep learning exercises which provides free GPU access." }
        ],
        additional_info: {
            project_count: 6,
            live_sessions: 36,
            coding_challenges: 40,
            datasets: 15,
            has_capstone: true
        },
        created_at: "2024-01-08T09:00:00Z",
        updated_at: "2024-01-22T16:45:00Z",
        published_at: "2024-01-12T10:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440004",
        title: "DevOps & Cloud Engineering with AWS",
        slug: "devops-cloud-engineering-aws",
        description: "Learn DevOps practices and cloud infrastructure management with Amazon Web Services. Master CI/CD pipelines, containerization, infrastructure as code, and cloud architecture. This comprehensive course prepares you for AWS certifications and real-world DevOps roles.",
        short_description: "Master DevOps practices and AWS cloud infrastructure",
        instructors: ["550e8400-e29b-41d4-a716-446655440106"],
        instructor_names: ["Michael Chen"],
        cover_image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "3000.00",
        currency: "GHS",
        early_bird_price: "2500.00",
        early_bird_deadline: "2024-02-20T23:59:59Z",
        current_price: "2500.00",
        start_date: "2024-03-15T08:00:00Z",
        end_date: "2024-06-15T18:00:00Z",
        registration_start: "2024-01-20T00:00:00Z",
        registration_end: "2024-03-10T23:59:59Z",
        max_students: 35,
        min_students: 10,
        enrolled_count: 22,
        seats_available: 13,
        duration_weeks: 14,
        hours_per_week: 16,
        difficulty_level: "intermediate",
        prerequisites: "- Linux command line proficiency\n- Basic understanding of networking\n- Experience with at least one programming language\n- Familiarity with web application deployment",
        what_you_will_learn: "- AWS core services (EC2, S3, RDS, Lambda, etc.)\n- Infrastructure as Code with Terraform\n- CI/CD pipelines with Jenkins and GitHub Actions\n- Docker and Kubernetes for containerization\n- Monitoring and logging with CloudWatch and ELK\n- Security best practices in the cloud\n- Cost optimization strategies\n- Automated testing and deployment",
        requirements: "- AWS Free Tier account\n- Computer with stable internet\n- Terminal/command line access\n- Git installed",
        tags: ["DevOps", "AWS", "Cloud Computing", "Docker", "Kubernetes", "CI/CD", "Terraform"],
        category: "DevOps & Cloud",
        status: "active",
        is_published: true,
        is_featured: false,
        syllabus: null,
        faq: [
            { question: "Will this help me get AWS certified?", answer: "Yes, the course covers topics for AWS Solutions Architect Associate certification." },
            { question: "What are the AWS costs?", answer: "AWS Free Tier covers most course activities. Estimated cost is under $20 for the entire course." }
        ],
        additional_info: {
            project_count: 5,
            live_sessions: 28,
            hands_on_labs: 45,
            aws_services_covered: 20
        },
        created_at: "2024-01-05T14:00:00Z",
        updated_at: "2024-01-21T11:20:00Z",
        published_at: "2024-01-10T09:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440005",
        title: "UI/UX Design Fundamentals",
        slug: "ui-ux-design-fundamentals",
        description: "Master the art and science of creating beautiful, user-friendly digital experiences. Learn user research, wireframing, prototyping, and visual design with industry-standard tools like Figma. This course combines theory and practice, teaching you design thinking methodology and practical skills to create designs that users love.",
        short_description: "Learn to design beautiful and usable digital experiences",
        instructors: ["550e8400-e29b-41d4-a716-446655440107"],
        instructor_names: ["Ama Darko"],
        cover_image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "1800.00",
        currency: "GHS",
        early_bird_price: null,
        early_bird_deadline: null,
        current_price: "1800.00",
        start_date: "2024-05-01T08:00:00Z",
        end_date: "2024-07-15T18:00:00Z",
        registration_start: "2024-03-01T00:00:00Z",
        registration_end: "2024-04-25T23:59:59Z",
        max_students: 25,
        min_students: 8,
        enrolled_count: 8,
        seats_available: 17,
        duration_weeks: 10,
        hours_per_week: 10,
        difficulty_level: "beginner",
        prerequisites: "- Basic computer skills\n- Interest in design and user experience\n- No design experience required",
        what_you_will_learn: "- Design thinking methodology\n- User research and personas\n- Information architecture\n- Wireframing and prototyping\n- Visual design principles\n- Typography and color theory\n- Figma mastery\n- Usability testing\n- Design systems and components\n- Portfolio development",
        requirements: "- Computer (Mac or PC)\n- Figma account (free)\n- Internet connection\n- Curiosity and creativity",
        tags: ["UI Design", "UX Design", "Figma", "Design Thinking", "User Research", "Prototyping"],
        category: "Design",
        status: "upcoming",
        is_published: true,
        is_featured: false,
        syllabus: null,
        faq: [
            { question: "Do I need drawing skills?", answer: "No artistic talent required! UI/UX design is more about problem-solving than drawing." },
            { question: "What software will I learn?", answer: "Primarily Figma, which is industry-standard and free to use." },
            { question: "Can I become a designer after this?", answer: "Yes, with practice. You'll have a solid foundation and portfolio to start freelancing or applying for junior positions." }
        ],
        additional_info: {
            project_count: 4,
            live_sessions: 20,
            design_critiques: 10,
            portfolio_pieces: 5
        },
        created_at: "2024-01-14T10:30:00Z",
        updated_at: "2024-01-19T09:15:00Z",
        published_at: "2024-01-16T08:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440006",
        title: "Introduction to Programming with Python",
        slug: "introduction-programming-python",
        description: "Start your programming journey with Python, the most beginner-friendly and powerful language. Learn programming fundamentals, problem-solving strategies, and practical Python applications. Perfect for absolute beginners with no coding experience.",
        short_description: "Your first step into the world of programming",
        instructors: ["550e8400-e29b-41d4-a716-446655440108"],
        instructor_names: ["Joseph Owusu"],
        cover_image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "1200.00",
        currency: "GHS",
        early_bird_price: "1000.00",
        early_bird_deadline: "2024-03-10T23:59:59Z",
        current_price: "1000.00",
        start_date: "2024-04-01T08:00:00Z",
        end_date: "2024-05-30T18:00:00Z",
        registration_start: "2024-02-15T00:00:00Z",
        registration_end: "2024-03-28T23:59:59Z",
        max_students: 60,
        min_students: 15,
        enrolled_count: 42,
        seats_available: 18,
        duration_weeks: 8,
        hours_per_week: 10,
        difficulty_level: "beginner",
        prerequisites: "- Basic computer literacy\n- Ability to use a web browser\n- Willingness to learn\n- No programming experience required",
        what_you_will_learn: "- Programming fundamentals and logic\n- Python syntax and data types\n- Control flow (loops, conditionals)\n- Functions and modules\n- Working with files\n- Basic data structures\n- Object-oriented programming basics\n- Problem-solving strategies\n- Debugging techniques\n- Building simple projects",
        requirements: "- Any computer (Windows, Mac, or Linux)\n- Internet connection\n- Python 3.8+ (we'll help you install)\n- VS Code or any text editor",
        tags: ["Python", "Programming", "Beginner", "Coding", "Software Development"],
        category: "Programming Fundamentals",
        status: "upcoming",
        is_published: true,
        is_featured: true,
        syllabus: null,
        faq: [
            { question: "Is this really for complete beginners?", answer: "Yes! We assume zero programming knowledge and start from the very basics." },
            { question: "How long until I can build real projects?", answer: "You'll build your first simple programs in week 2, and more complex projects by week 6." },
            { question: "What can I do after this course?", answer: "You can pursue web development, data science, automation, or any Python-related field." }
        ],
        additional_info: {
            project_count: 8,
            live_sessions: 16,
            coding_exercises: 100,
            peer_reviews: true
        },
        created_at: "2024-01-11T13:00:00Z",
        updated_at: "2024-01-23T10:40:00Z",
        published_at: "2024-01-15T08:30:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440007",
        title: "Cybersecurity Essentials",
        slug: "cybersecurity-essentials",
        description: "Learn to protect systems, networks, and data from cyber threats. This course covers security fundamentals, ethical hacking basics, network security, and security best practices. Gain hands-on experience with security tools and learn to think like an attacker to better defend systems.",
        short_description: "Learn to protect systems and data from cyber threats",
        instructors: ["550e8400-e29b-41d4-a716-446655440109"],
        instructor_names: ["Dr. Emmanuel Asante"],
        cover_image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "2800.00",
        currency: "GHS",
        early_bird_price: "2300.00",
        early_bird_deadline: "2024-04-01T23:59:59Z",
        current_price: "2300.00",
        start_date: "2024-05-15T08:00:00Z",
        end_date: "2024-08-15T18:00:00Z",
        registration_start: "2024-03-15T00:00:00Z",
        registration_end: "2024-05-10T23:59:59Z",
        max_students: 30,
        min_students: 10,
        enrolled_count: 12,
        seats_available: 18,
        duration_weeks: 13,
        hours_per_week: 14,
        difficulty_level: "intermediate",
        prerequisites: "- Basic networking knowledge\n- Linux command line familiarity\n- Understanding of operating systems\n- Programming basics (any language)",
        what_you_will_learn: "- Information security fundamentals\n- Network security and protocols\n- Cryptography basics\n- Ethical hacking techniques\n- Web application security\n- Malware analysis basics\n- Security tools (Wireshark, Nmap, Metasploit)\n- Incident response\n- Security policies and compliance\n- Risk assessment",
        requirements: "- Computer with 16GB RAM\n- VirtualBox or VMware\n- Kali Linux (we'll set up together)\n- Strong internet connection",
        tags: ["Cybersecurity", "Ethical Hacking", "Network Security", "InfoSec", "Penetration Testing"],
        category: "Cybersecurity",
        status: "upcoming",
        is_published: true,
        is_featured: false,
        syllabus: null,
        faq: [
            { question: "Is ethical hacking legal?", answer: "Yes, when done with proper authorization. We emphasize legal and ethical practices throughout." },
            { question: "Will this prepare me for certifications?", answer: "Yes, this course aligns with CompTIA Security+ and CEH certification paths." },
            { question: "Do I need to be a hacker?", answer: "No! We teach you to think like one to better protect systems, all within legal boundaries." }
        ],
        additional_info: {
            project_count: 4,
            live_sessions: 26,
            hands_on_labs: 35,
            capture_the_flag: true
        },
        created_at: "2024-01-09T15:45:00Z",
        updated_at: "2024-01-20T13:10:00Z",
        published_at: "2024-01-13T09:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440008",
        title: "Blockchain Development with Solidity",
        slug: "blockchain-development-solidity",
        description: "Enter the world of blockchain and decentralized applications. Learn to build smart contracts with Solidity and deploy on Ethereum. Understand blockchain fundamentals, cryptocurrency, and Web3 development. Build real DApps, create your own tokens, and understand the technology revolutionizing finance.",
        short_description: "Build smart contracts and decentralized applications",
        instructors: ["550e8400-e29b-41d4-a716-446655440110"],
        instructor_names: ["Kwesi Botchway"],
        cover_image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        promo_video_url: null,
        price: "3200.00",
        currency: "GHS",
        early_bird_price: null,
        early_bird_deadline: null,
        current_price: "3200.00",
        start_date: "2024-06-01T08:00:00Z",
        end_date: "2024-08-31T18:00:00Z",
        registration_start: "2024-04-01T00:00:00Z",
        registration_end: "2024-05-25T23:59:59Z",
        max_students: 25,
        min_students: 8,
        enrolled_count: 6,
        seats_available: 19,
        duration_weeks: 13,
        hours_per_week: 15,
        difficulty_level: "advanced",
        prerequisites: "- Strong JavaScript knowledge\n- Understanding of backend development\n- Basic cryptography concepts\n- Experience with web development",
        what_you_will_learn: "- Blockchain fundamentals\n- Ethereum architecture\n- Solidity programming\n- Smart contract development\n- DApp development with Web3.js\n- Truffle and Hardhat frameworks\n- Testing and deployment\n- Security best practices\n- Token standards (ERC-20, ERC-721)\n- DeFi concepts",
        requirements: "- Computer with 8GB+ RAM\n- MetaMask wallet\n- Node.js installed\n- Test ETH (provided)\n- Code editor",
        tags: ["Blockchain", "Solidity", "Ethereum", "Web3", "Smart Contracts", "DeFi", "Cryptocurrency"],
        category: "Blockchain",
        status: "upcoming",
        is_published: true,
        is_featured: false,
        syllabus: null,
        faq: [
            { question: "Do I need cryptocurrency?", answer: "No real crypto needed! We use testnets with free test tokens." },
            { question: "Is blockchain a good career path?", answer: "Yes! Blockchain developers are in high demand with competitive salaries." },
            { question: "Will I learn about NFTs?", answer: "Yes, we cover NFT standards and you'll build your own NFT project." }
        ],
        additional_info: {
            project_count: 5,
            live_sessions: 26,
            smart_contracts_built: 15,
            has_hackathon: true
        },
        created_at: "2024-01-13T12:20:00Z",
        updated_at: "2024-01-22T14:50:00Z",
        published_at: "2024-01-17T10:00:00Z",
        created_by: "550e8400-e29b-41d4-a716-446655440201"
    }
];

// Helper functions for working with courses
export const getActiveCourses = (): Course[] => {
    return courses.filter(course => course.status === 'active' && course.is_published);
};

export const getFeaturedCourses = (): Course[] => {
    return courses.filter(course => course.is_featured && course.is_published);
};

export const getCourseBySlug = (slug: string): Course | undefined => {
    return courses.find(course => course.slug === slug);
};

export const getCoursesByCategory = (category: string): Course[] => {
    return courses.filter(course => course.category === category && course.is_published);
};

export const getCoursesByDifficulty = (difficulty: string): Course[] => {
    return courses.filter(course => course.difficulty_level === difficulty && course.is_published);
};

export const getAvailableSeats = (courseId: string): number => {
    const course = courses.find(c => c.id === courseId);
    return course ? course.seats_available : 0;
};

export const canEnroll = (course: Course): boolean => {
    const now = new Date();
    const registrationStart = new Date(course.registration_start);
    const registrationEnd = new Date(course.registration_end);

    return (
        course.is_published &&
        (course.status === 'active' || course.status === 'upcoming') &&
        now >= registrationStart &&
        now <= registrationEnd &&
        course.seats_available > 0
    );
};