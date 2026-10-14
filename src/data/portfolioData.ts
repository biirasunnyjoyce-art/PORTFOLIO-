/**
 * @file portfolioData.ts
 * @description Central single-source-of-truth data store for Biira Joyce's portfolio.
 * To update your portfolio (skills, courses, new projects, social links),
 * simply edit the values in this file!
 */

export interface CourseUnit {
  code?: string;
  name: string;
  description: string;
  focus: string[];
}

export interface SkillItem {
  name: string;
  status: 'Currently Learning' | 'Academic Foundation' | 'Currently Studying' | 'Developing Skills' | 'Learning and Exploring' | 'Area of Interest' | 'Professional Interest' | 'Developing Perspective' | 'School Project Experience' | 'Academic and Project Experience';
  description: string;
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  role: string;
  achievement: string;
  timeline: string;
  institution: string;
  summary: string;
  challenge: string;
  concept: string;
  myRole: string;
  outcome: string;
  learnings: string[];
  keyTakeaways: { label: string; value: string }[];
  mechanisms: {
    solar: {
      title: string;
      source: string;
      conversionType: string;
      principle: string;
      description: string;
    };
    thermocouple: {
      title: string;
      source: string;
      conversionType: string;
      principle: string;
      description: string;
    };
  };
}

export interface PlannedProject {
  id: string;
  title: string;
  statusTag: 'Planned Project' | 'Learning Project' | 'Coming Soon';
  researchQuestion: string;
  learningActivities: string[];
  potentialSkills: string[];
  targetDataset?: string;
  educationalDisclaimer?: string;
  plannedTools: string[];
  futureRepoUrl?: string; // empty placeholder
  futureNotebookUrl?: string; // empty placeholder
}

export interface JourneyStage {
  stageNumber: number;
  title: string;
  subtitle: string;
  status: 'Current' | 'Future Learning Goals' | 'Long-Term Goals';
  description: string;
  focusPoints: string[];
}

export interface MarketRoadmapStep {
  step: number;
  title: string;
  description: string;
  keyPrinciple: string;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  levelOrPeriod: string;
  location: string;
  coursework?: string[];
  notes?: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    monogram: string;
    roleHeadline: string;
    subHeadline: string;
    supportingStatement: string;
    secondaryStatement: string;
    philosophy: string;
    university: string;
    program: string;
    currentYear: string;
    highSchool: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    photoUrl: string;
  };
  pillars: {
    id: string;
    title: string;
    headline: string;
    description: string;
  }[];
  aboutBio: {
    paragraphs: string[];
    quickFacts: { label: string; value: string }[];
  };
  courseUnits: CourseUnit[];
  skillCategories: SkillCategory[];
  featuredProject: FeaturedProject;
  plannedProjects: PlannedProject[];
  journeyStages: JourneyStage[];
  businessAndMarkets: {
    overview: string;
    themes: {
      id: string;
      title: string;
      badge: string;
      description: string;
      aspirations: string[];
    }[];
    tradingSubsection: {
      title: string;
      statement: string;
      disclaimer: string;
      roadmap: MarketRoadmapStep[];
    };
  };
  education: EducationEntry[];
  professionalGoals: {
    id: string;
    title: string;
    description: string;
    category: 'Technical' | 'Business' | 'Academic' | 'Career';
  }[];
  contactChannels: {
    email: string;
    linkedinPlaceholder: string;
    githubPlaceholder: string;
    location: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: 'BIIRA JOYCE',
    monogram: 'BJ',
    roleHeadline: 'Aspiring Data Analyst. Business Thinker. Future Problem Solver.',
    subHeadline: 'Aspiring Data Analyst | Data Science Student | Business Enthusiast',
    supportingStatement:
      'I am a Data Science and Analytics student at Uganda Christian University, exploring how data, statistics, and business thinking can uncover insights and support smarter decisions.',
    secondaryStatement:
      'Currently learning Python, developing my analytical foundations, and building towards a future where data meets business strategy.',
    philosophy: 'Curious by nature. Analytical by training. Business-minded by interest.',
    university: 'Uganda Christian University (UCU)',
    program: 'Bachelor of Science in Data Science and Analytics',
    currentYear: 'First Year Student',
    highSchool: "Mount St. Mary's College Namagunga",
    location: 'Mukono / Kampala, Uganda',
    email: 'biirasunnyjoyce@gmail.com',
    linkedin: 'https://linkedin.com/in/biira-joyce', // Editable placeholder
    github: 'https://github.com/biira-joyce', // Editable placeholder
    photoUrl: '/biira-joyce.png',
  },

  pillars: [
    {
      id: 'data',
      title: 'Data & Statistics',
      headline: 'Finding Patterns & Meaning in Numbers',
      description:
        'Learning to analyse information, uncover patterns, grasp probability and statistical fundamentals, and communicate analytical findings with clarity and precision.',
    },
    {
      id: 'business',
      title: 'Business & Strategy',
      headline: 'Connecting Insights to Real-World Value',
      description:
        'Exploring how analytical thinking supports strategy, entrepreneurship, organizational performance, and disciplined business decision-making.',
    },
    {
      id: 'growth',
      title: 'Continuous Growth',
      headline: 'Hands-on Learning & Expanding Horizons',
      description:
        'Developing programming skills in Python, designing practical projects, studying financial market dynamics, and preparing for future internship opportunities.',
    },
  ],

  aboutBio: {
    paragraphs: [
      'I am Biira Joyce, a first-year Data Science and Analytics student at Uganda Christian University with a strong interest in business and the role data plays in understanding the world around us.',
      'As I build my foundation in Python, computing, probability, and statistics, I am becoming increasingly interested in how analytical thinking can help people identify opportunities, understand patterns, and make better decisions.',
      'My interest in leadership and problem-solving also extends beyond the classroom. I served as project manager for a school science fair project exploring the conversion of solid waste into electricity, which earned second place in the competition.',
      'I am at the beginning of my journey, and I see that as an opportunity to stay curious, learn consistently, experiment with ideas, and develop practical skills. My long-term ambition is to connect data, business, and analytical thinking to solve meaningful problems.',
    ],
    quickFacts: [
      { label: 'Degree Programme', value: 'BSc Data Science & Analytics' },
      { label: 'Current Level', value: 'First Year Undergraduate' },
      { label: 'University', value: 'Uganda Christian University' },
      { label: 'Secondary Education', value: "Mount St. Mary's Namagunga (O & A-Level)" },
      { label: 'Primary Language', value: 'Python (Learning)' },
      { label: 'Core Intersections', value: 'Data Science · Business Intelligence · Finance' },
    ],
  },

  courseUnits: [
    {
      name: 'Structured Programming in Python',
      description:
        'Learning procedural programming fundamentals, control structures, functions, and structured data handling using Python.',
      focus: ['Variables & Data Types', 'Control Flow & Loops', 'Functions & Modularity', 'Data Structures (Lists, Dictionaries)'],
    },
    {
      name: 'Fundamentals of Computing',
      description:
        'Understanding computer architecture, operating principles, computational models, and logical system processes.',
      focus: ['Computer Architecture', 'Binary Systems & Logic', 'Operating System Basics', 'Information Processing'],
    },
    {
      name: 'Essential Hardware and Software',
      description:
        'Exploring internal and peripheral hardware architectures, software system layers, networking fundamentals, and system troubleshooting.',
      focus: ['Hardware Components', 'System vs Application Software', 'Networking Basics', 'System Diagnostics'],
    },
    {
      name: 'Probability and Statistics',
      description:
        'Building the core mathematical backbone for analytics: probability distributions, descriptive statistics, and foundational statistical reasoning.',
      focus: ['Descriptive Statistics', 'Probability Theory', 'Random Variables', 'Distribution Models'],
    },
  ],

  skillCategories: [
    {
      id: 'programming',
      category: '1. Programming & Computing',
      subtitle: 'Technical tooling and computational foundations',
      skills: [
        {
          name: 'Python Programming',
          status: 'Currently Learning',
          description:
            'Focusing on procedural and structured programming logic, algorithmic problem-solving, functions, and working with data structures.',
          highlight: 'Primary technical focus in Year 1',
        },
        {
          name: 'Fundamentals of Computing',
          status: 'Academic Foundation',
          description:
            'Theoretical principles of computational systems, memory organization, process management, and algorithm logic.',
          highlight: 'UCU Core Curriculum',
        },
        {
          name: 'Essential Hardware and Software',
          status: 'Academic Foundation',
          description:
            'System architectures, peripherals, operating system environments, software dependencies, and computing infrastructure.',
          highlight: 'UCU Core Curriculum',
        },
      ],
    },
    {
      id: 'data',
      category: '2. Data & Analytical Foundations',
      subtitle: 'Quantitative reasoning, probability, and exploratory analysis',
      skills: [
        {
          name: 'Probability and Statistics',
          status: 'Currently Studying',
          description:
            'Mastering measures of central tendency, dispersion, probability rules, and statistical principles essential for data analytics.',
          highlight: 'Foundation for data modeling',
        },
        {
          name: 'Data Analysis',
          status: 'Developing Skills',
          description:
            'Learning to frame analytical questions, inspect datasets, identify anomalies, and derive initial observations.',
          highlight: 'Applied coursework & exercises',
        },
        {
          name: 'Data Interpretation',
          status: 'Developing Skills',
          description:
            'Translating numbers into meaningful narratives, evaluating data limitations, and avoiding cognitive bias in conclusions.',
          highlight: 'Critical thinking focus',
        },
        {
          name: 'Data Visualization',
          status: 'Learning and Exploring',
          description:
            'Exploring how clear visual charts (bar charts, scatter plots, trend lines) convey insights effectively to non-technical stakeholders.',
          highlight: 'Visual storytelling interest',
        },
      ],
    },
    {
      id: 'business',
      category: '3. Business & Entrepreneurship',
      subtitle: 'Commercial awareness, strategic reasoning, and value creation',
      skills: [
        {
          name: 'Business Analysis',
          status: 'Area of Interest',
          description:
            'Studying how business models function, how metrics reflect health, and how data identifies commercial opportunities.',
          highlight: 'Commercial interest',
        },
        {
          name: 'Entrepreneurship',
          status: 'Area of Interest',
          description:
            'Examining venture creation, customer value propositions, resource allocation, and sustainable enterprise.',
          highlight: 'Passionate about innovation',
        },
        {
          name: 'Data-Informed Decision-Making',
          status: 'Professional Interest',
          description:
            'Investigating how organizations substitute gut instinct with empirical evidence to de-risk investments and strategic pivots.',
          highlight: 'Central career philosophy',
        },
        {
          name: 'Business Problem-Solving',
          status: 'Developing Perspective',
          description:
            'Applying structured problem breakdown (hypothesis trees, root-cause inquiry) to real-world business challenges.',
          highlight: 'Cross-functional approach',
        },
      ],
    },
    {
      id: 'leadership',
      category: '4. Leadership & Professional Skills',
      subtitle: 'Execution, coordination, and team collaboration',
      skills: [
        {
          name: 'Project Management',
          status: 'School Project Experience',
          description:
            'Demonstrated as Project Manager for our school science fair innovation project (solid waste to electricity), earning 2nd place.',
          highlight: 'Award-winning initiative',
        },
        {
          name: 'Team Coordination',
          status: 'School Project Experience',
          description:
            'Organizing task delegation, aligning different team members around milestones, and maintaining team momentum.',
          highlight: 'Hands-on leadership',
        },
        {
          name: 'Collaboration',
          status: 'School Project Experience',
          description:
            'Working cooperatively with peers, synthesizing differing viewpoints, and fostering an inclusive team culture.',
          highlight: 'Strong team player',
        },
        {
          name: 'Problem-Solving',
          status: 'Academic and Project Experience',
          description:
            'Approaching complex or ambiguous questions by dissecting them into logical, solvable components.',
          highlight: 'Analytical mindset',
        },
      ],
    },
  ],

  featuredProject: {
    id: 'waste-to-electricity',
    title: 'Turning Solid Waste into Electricity',
    category: 'Clean Energy · Solar & Thermocouple · Project Management',
    role: 'Project Manager',
    achievement: 'Second Place — School Science Fair Award',
    timeline: 'Secondary School Showcase',
    institution: "Mount St. Mary's College Namagunga",
    summary:
      'A school science fair innovation designing a hybrid clean energy generation model: capturing solar light to generate electricity and employing a thermocouple to convert heat produced by solid waste directly into electrical energy.',
    challenge:
      'Solid waste accumulation poses critical environmental challenges, while many communities struggle with reliable, accessible power. Our challenge was finding a practical way to transform waste-generated thermal energy into electricity and augment it with ambient solar power.',
    concept:
      'Our team designed an innovative dual-conversion hybrid system. We integrated solar panels to transform light into electrical current and utilized a thermocouple to convert the thermal heat from decomposing or processed solid waste directly into electricity via thermoelectric differential. This dual-source approach maximized energy capture without moving mechanical parts.',
    myRole:
      'As Project Manager, I coordinated the multidisciplinary student team, aligned the solar capture and thermocouple testing workflows, managed timelines and materials, and led the presentation explaining our dual light-and-heat conversion system to the science fair judges.',
    outcome:
      'The project achieved Second Place in the school-wide science fair, commended by judges for its dual light-and-heat conversion architecture, environmental relevance, and practical engineering feasibility.',
    learnings: [
      'Gained hands-on understanding of energy conversion: Photovoltaic effect (light to electricity) and the Thermocouple Seebeck effect (heat to electricity).',
      'Developed core project management capabilities: delegating technical tasks, managing research deadlines, and coordinating team experiments.',
      'Discovered the efficiency advantages of hybrid energy systems that capture multiple waste streams (ambient light + waste heat).',
      'Deepened a passion for sustainability, quantitative experimentation, and evidence-based problem-solving.',
    ],
    keyTakeaways: [
      { label: 'Role Held', value: 'Project Manager' },
      { label: 'Competition Rank', value: '2nd Place Award' },
      { label: 'Solar Conversion', value: 'Light → Electricity (PV)' },
      { label: 'Thermal Conversion', value: 'Heat → Electricity (Thermocouple)' },
    ],
    mechanisms: {
      solar: {
        title: 'Solar Photovoltaic Channel',
        source: 'Sunlight & Ambient Light',
        conversionType: 'Light → Electricity',
        principle: 'Photovoltaic Effect',
        description:
          'Utilized solar cells to absorb ambient photons/light radiation and generate direct electrical current, providing steady daytime baseline power.',
      },
      thermocouple: {
        title: 'Thermocouple Thermoelectric Channel',
        source: 'Solid Waste Thermal Heat',
        conversionType: 'Heat → Electricity',
        principle: 'Seebeck Thermoelectric Effect',
        description:
          'Employed a thermocouple device to exploit the temperature gradient from solid waste heat, directly converting thermal energy into electrical voltage without moving parts.',
      },
    },
  },

  plannedProjects: [
    {
      id: 'project-sales-analysis',
      title: 'Business Sales Analysis',
      statusTag: 'Planned Project',
      researchQuestion: 'What can sales data reveal about underlying business performance and customer buying patterns?',
      learningActivities: [
        'Collect and explore a curated retail or e-commerce sample sales dataset.',
        'Aggregate and summarize gross sales, volume, and average order value by product category and time period.',
        'Identify cyclical demand trends, seasonal spikes, and underperforming product lines.',
        'Present empirical findings through clean Python-generated charts and concise business commentary.',
      ],
      potentialSkills: ['Python', 'Descriptive Statistics', 'Data Analysis', 'Data Visualization', 'Business Reasoning'],
      targetDataset: 'Public Retail Sales & Transaction Logs',
      plannedTools: ['Python', 'Pandas (Planned)', 'Matplotlib (Planned)', 'Jupyter'],
    },
    {
      id: 'project-student-performance',
      title: 'Student Performance Data Exploration',
      statusTag: 'Learning Project',
      researchQuestion: 'What patterns and correlations can be discovered in an educational achievement dataset?',
      learningActivities: [
        'Examine an open academic performance dataset with student demographic and study metrics.',
        'Compute descriptive statistics including mean, median, variance, and standard deviations.',
        'Explore relationships between study habits, attendance, and assessment outcomes.',
        'Visualise distributions and clearly document observational findings along with analytical limitations.',
      ],
      potentialSkills: ['Python', 'Probability & Statistics', 'Data Interpretation', 'Distribution Analysis', 'Visual Storytelling'],
      targetDataset: 'Student Academic Records Sample Dataset',
      plannedTools: ['Python', 'Statistical Summaries', 'Data Plotting', 'Documentation'],
    },
    {
      id: 'project-market-data',
      title: 'Introduction to Financial Market Data',
      statusTag: 'Planned Project',
      researchQuestion: 'How can historical financial market data be analysed to understand price behaviour and risk?',
      learningActivities: [
        'Import historical daily price series from verified public financial datasets.',
        'Calculate percentage returns, rolling averages, and basic volatility metrics.',
        'Graph historical price movements and distribution of daily returns.',
        'Explore concepts of risk-reward ratios and historical drawdowns at an introductory educational level.',
      ],
      potentialSkills: ['Python', 'Statistical Dispersion', 'Time Series Visualization', 'Risk Assessment Concepts'],
      targetDataset: 'Public Stock Index & Historical Equity Prices',
      educationalDisclaimer:
        'Educational analysis only. Historical price movements do not guarantee future performance. This project explores data analysis and does not constitute financial or investment advice.',
      plannedTools: ['Python', 'Time-Series Basics', 'Chart Plotting', 'Statistical Formulas'],
    },
    {
      id: 'project-insights-dashboard',
      title: 'Business Insights Dashboard',
      statusTag: 'Coming Soon',
      researchQuestion: 'How can complex data be synthesized so that a business decision-maker can understand it in seconds?',
      learningActivities: [
        'Select an open operational business dataset representing key business drivers.',
        'Define core KPIs that reflect operational health (revenue run rate, customer retention, unit margins).',
        'Design a clean, distraction-free visual layout highlighting essential trends.',
        'Write executive-ready summaries explaining what the numbers mean and proposing next strategic inquiries.',
      ],
      potentialSkills: ['Business Intelligence', 'Data Synthesis', 'Visual Hierarchy', 'Executive Communication'],
      targetDataset: 'Small Business Operations & Performance Metrics',
      plannedTools: ['Python / Visualization Frameworks', 'Metric Aggregation', 'Reporting Principles'],
    },
  ],

  journeyStages: [
    {
      stageNumber: 1,
      title: 'Where I Am Now',
      subtitle: 'Building the Academic & Technical Foundation',
      status: 'Current',
      description:
        'Currently in my first year of the BSc in Data Science and Analytics programme at Uganda Christian University, establishing rigorous foundations across computing, programming, and quantitative reasoning.',
      focusPoints: [
        'Mastering structured programming logic in Python.',
        'Studying computing architecture and hardware/software systems.',
        'Developing statistical thinking and probability foundations.',
        'Exploring how data connects directly to business performance.',
      ],
    },
    {
      stageNumber: 2,
      title: 'Building Practical Skills',
      subtitle: 'From Classroom Theory to Hands-on Projects',
      status: 'Future Learning Goals',
      description:
        'My immediate next priority is transforming foundational knowledge into verifiable, documented work through small coding exercises, sample datasets, and structured repositories.',
      focusPoints: [
        'Practise Python through deliberate daily exercises and problem sets.',
        'Conduct exploratory data analysis on real public datasets.',
        'Deepen statistical reasoning and hypothesis testing fundamentals.',
        'Learn to communicate analytical findings through clean charts.',
        'Publish genuine, well-documented project repositories on GitHub.',
        'Formulate business questions and test them using empirical data.',
      ],
    },
    {
      stageNumber: 3,
      title: 'Applying My Knowledge',
      subtitle: 'Professional Impact & Business Integration',
      status: 'Long-Term Goals',
      description:
        'My long-term aspiration is to operate at the intersection of data science, business strategy, and decision intelligence, contributing to high-impact organizations and entrepreneurial ventures.',
      focusPoints: [
        'Curate a solid portfolio of completed, peer-reviewed analytical projects.',
        'Secure practical internship and apprenticeship opportunities in analytics.',
        'Master business intelligence workflows and executive reporting.',
        'Apply disciplined data analysis to financial market research.',
        'Help organizations make smarter, evidence-backed strategic decisions.',
      ],
    },
  ],

  businessAndMarkets: {
    overview:
      'Data achieves its highest value when it informs human decisions. I am fascinated by how quantitative insights, statistical rigor, and business thinking converge to uncover market opportunities, de-risk investments, and improve operational outcomes.',
    themes: [
      {
        id: 'bi',
        title: 'Business Intelligence',
        badge: 'Enterprise Performance',
        description:
          'Understanding how organizations monitor performance, track key performance indicators, diagnose inefficiencies, and make proactive, data-informed choices.',
        aspirations: [
          'KPI modeling & performance tracking',
          'Root-cause analysis in operational bottlenecks',
          'Bridging the gap between raw tables and executive strategy',
        ],
      },
      {
        id: 'entrepreneurship',
        title: 'Entrepreneurship & Innovation',
        badge: 'Venture Creation',
        description:
          'Exploring how analytical thinking helps entrepreneurs identify market gaps, evaluate unit economics, validate hypotheses, and build resilient ventures.',
        aspirations: [
          'Opportunity identification and market sizing',
          'Testing business hypotheses with empirical feedback',
          'Sustainable, resource-efficient business models',
        ],
      },
      {
        id: 'markets',
        title: 'Financial Markets & Trading',
        badge: 'Quantitative Curiosity',
        description:
          'Learning about equity markets, price discovery, volatility, and the mathematical and psychological discipline required for systematic decision-making.',
        aspirations: [
          'Historical market data analysis & return distributions',
          'Risk management, position sizing, and drawdown control',
          'Disciplined, emotion-free decision frameworks',
        ],
      },
    ],
    tradingSubsection: {
      title: 'Learning the Markets, One Step at a Time',
      statement:
        'I am actively learning about stock trading and market dynamics. My goal is to build a thorough understanding of financial market behaviour, disciplined risk management, and emotional regulation before deploying capital independently.',
      disclaimer:
        'Educational learning journey only. I am a student exploring market mechanics and data; I do not provide financial advice, trading signals, or investment services. Markets carry substantial risk, and capital preservation is paramount.',
      roadmap: [
        {
          step: 1,
          title: 'Market Structure & Terminology',
          description:
            'Grasping the core architecture of equities, exchanges, order types, liquidity, and basic macroeconomic drivers.',
          keyPrinciple: 'Know how the market operates before touching a chart.',
        },
        {
          step: 2,
          title: 'Risk Management & Capital Preservation',
          description:
            'Studying position sizing, stop-loss mechanics, risk-to-reward ratios, and mathematical drawdown recovery.',
          keyPrinciple: 'Defense first: Survival precedes profitability.',
        },
        {
          step: 3,
          title: 'Historical Data & Analytical Practice',
          description:
            'Examining historical market trends, backtesting concepts on paper, and observing how price responds to volume and news.',
          keyPrinciple: 'Evidence-based observation over gut feel.',
        },
        {
          step: 4,
          title: 'Structured, Consistent Process',
          description:
            'Building a repeatable routine: trade journals, rule checklists, post-trade reviews, and emotional self-awareness.',
          keyPrinciple: 'Consistency in execution drives long-term results.',
        },
        {
          step: 5,
          title: 'Objective Self-Evaluation & Evolution',
          description:
            'Auditing paper-trading performance over significant sample sizes before considering live, independent participation.',
          keyPrinciple: 'Only scale capital when rules and statistics confirm an edge.',
        },
      ],
    },
  },

  education: [
    {
      institution: 'Uganda Christian University (UCU)',
      qualification: 'Bachelor of Science in Data Science and Analytics',
      levelOrPeriod: 'Undergraduate Degree · First Year (Current)',
      location: 'Mukono, Uganda',
      coursework: [
        'Structured Programming in Python',
        'Fundamentals of Computing',
        'Essential Hardware and Software',
        'Probability and Statistics',
      ],
      notes:
        'Developing the foundational pillars across software programming, statistical mathematics, and computer systems.',
    },
    {
      institution: "Mount St. Mary's College Namagunga",
      qualification: "Completed O-Level and A-Level Education",
      levelOrPeriod: 'Secondary School Education',
      location: 'Lugazi / Namagunga, Uganda',
      notes:
        'Rigorous academic training and active leadership participation. Served as Project Manager for the Science Fair Innovation Project (2nd Place Award).',
    },
  ],

  professionalGoals: [
    {
      id: 'g1',
      title: 'Python & Analytics Fluency',
      description: 'Achieve practical fluency in Python for data manipulation, cleaning, and statistical calculations.',
      category: 'Technical',
    },
    {
      id: 'g2',
      title: 'Documented Public Projects',
      description: 'Publish and maintain well-documented, genuine analytical projects with clean code and clear explanations on GitHub.',
      category: 'Technical',
    },
    {
      id: 'g3',
      title: 'Data Visualization & Storytelling',
      description: 'Master the art of presenting complex numerical trends into intuitive, high-clarity visual dashboards for business stakeholders.',
      category: 'Business',
    },
    {
      id: 'g4',
      title: 'Business Decision-Making Dynamics',
      description: 'Deepen understanding of how commercial organizations evaluate trade-offs, model risk, and leverage data in strategy.',
      category: 'Business',
    },
    {
      id: 'g5',
      title: 'Business Intelligence Exploration',
      description: 'Explore enterprise BI frameworks, reporting pipelines, and real-world analytics workflows.',
      category: 'Career',
    },
    {
      id: 'g6',
      title: 'Financial Market Understanding',
      description: 'Cultivate a disciplined, evidence-based grasp of market dynamics, risk management, and quantitative finance concepts.',
      category: 'Academic',
    },
    {
      id: 'g7',
      title: 'Internship & Real-World Apprenticeship',
      description: 'Secure internship and collaborative learning opportunities to apply emerging skills to authentic industry challenges.',
      category: 'Career',
    },
  ],

  contactChannels: {
    email: 'biirasunnyjoyce@gmail.com',
    linkedinPlaceholder: 'https://linkedin.com/in/biira-joyce',
    githubPlaceholder: 'https://github.com/biira-joyce',
    location: 'Mukono / Kampala, Uganda',
  },
};
