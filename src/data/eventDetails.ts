export type EventDetail = {
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  unsplashKeyword: string;
  description: string[];
  whatToExpect: string[];
  eligibility: string;
  tips: string[];
};

export const EVENT_DETAILS: Record<string, EventDetail> = {
  "tech-fair": {
    slug: "tech-fair",
    title: "Tech Fair",
    emoji: "🔬",
    tagline: "Showcase your innovation to the world.",
    unsplashKeyword: "technology,students,science,fair",
    description: [
      "Tech Fair is the flagship showcase event of SAITED 2026, where students present self-built technology projects to a panel of experts, industry professionals, and thousands of peers.",
      "From robotics to web apps, from IoT to AI — the Tech Fair is a stage for every kind of technological creativity. Projects are evaluated on innovation, impact, design, and presentation quality.",
      "Past editions have seen everything from working solar-powered devices to student-built apps solving real community problems. This year, the bar is higher than ever.",
    ],
    whatToExpect: [
      "Display your project in a dedicated booth with access to power and display setup",
      "Get feedback from a panel of judges including tech professionals and academics",
      "Network with students from 36+ schools building similarly innovative projects",
      "Win awards in categories like Best Innovation, Best Design, and Best Impact",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Build a working prototype — judges evaluate real demos, not just ideas on paper",
      "Prepare a clear 2-minute pitch explaining the problem, your solution, and its impact",
      "Make your booth visually engaging with posters, diagrams, or live demos",
      "Anticipate tough questions: what inspired you, what didn't work, and what's next?",
    ],
  },
  "aeromodelling": {
    slug: "aeromodelling",
    title: "Aeromodelling",
    emoji: "✈️",
    tagline: "Build it. Launch it. Fly it.",
    unsplashKeyword: "aeromodelling,model,aircraft,hobby",
    description: [
      "Aeromodelling at SAITED 2026 is where physics meets craftsmanship. Students design and assemble their own model aircraft from provided materials and then compete in flight accuracy and endurance challenges.",
      "The event teaches core concepts of aerodynamics, lift, thrust, and drag — all while having a blast building and flying. It's equal parts science lab and air show.",
      "Participants work individually or in pairs to construct their models on the day of the event and then put them through their paces in a controlled outdoor flight area.",
    ],
    whatToExpect: [
      "Hands-on model building session with provided balsa wood, foam, and adhesives",
      "Flight accuracy challenge: navigate your aircraft through designated targets",
      "Endurance round: which model stays airborne the longest?",
      "Q&A session with aeromodelling experts and aviation enthusiasts",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Study basic aerodynamics: wing shape, weight distribution, and center of gravity",
      "Practice folding and shaping lightweight materials before the event day",
      "Focus on symmetry — asymmetric wings will cause your model to veer off course",
      "Don't panic if your first launch fails; observe, adjust, and relaunch calmly",
    ],
  },
  "codex-gaming-lab": {
    slug: "codex-gaming-lab",
    title: "CODEx Gaming Lab",
    emoji: "💻",
    tagline: "Code fast. Think faster.",
    unsplashKeyword: "coding,programming,computer,lab",
    description: [
      "CODEx Gaming Lab combines competitive programming with interactive game-based challenges. Students solve algorithmic puzzles in a race against time and against each other.",
      "Divided into junior (Class 1–7) and senior (Class 8–12) brackets, the challenges range from beginner logic problems to complex data-structure puzzles. Multiple programming languages are supported.",
      "The Gaming Lab segment features curated STEM-based digital challenges where analytical thinking and quick reflexes both matter — designed for the student who codes in their sleep.",
    ],
    whatToExpect: [
      "Time-bound coding challenges in a proctored lab setting with 50+ workstations",
      "Multi-round elimination format — solve more problems to advance further",
      "Gaming segment with STEM-themed digital challenges between coding rounds",
      "Live leaderboard visible to all spectators, keeping the tension sky-high",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Practice on platforms like HackerRank, Codeforces, or LeetCode ahead of time",
      "Review fundamentals: arrays, loops, conditionals, and basic recursion",
      "Learn to read problem statements quickly — time management is everything here",
      "Stay calm under leaderboard pressure; focus on your own screen, not others",
    ],
  },
  "start-up-park": {
    slug: "start-up-park",
    title: "Start-Up Park",
    emoji: "🚀",
    tagline: "Pitch your idea. Change the world.",
    unsplashKeyword: "startup,entrepreneurship,pitch,business",
    description: [
      "Start-Up Park is SAITED's entrepreneurship showdown, where young innovators pitch their business ideas to a panel of real investors, entrepreneurs, and school alumni now working in the startup ecosystem.",
      "The event simulates a real investor pitch — you have five minutes to present your idea, your market research, and your growth plan. The panel then grills you with pointed questions for three minutes.",
      "Past participants have gone on to actually launch their ideas. This is the event that turns daydreamers into doers.",
    ],
    whatToExpect: [
      "Structured 5-minute pitch followed by 3 minutes of judge Q&A per team",
      "Categories for social impact, tech innovation, and consumer products",
      "Mentoring booth with startup founders available throughout the day",
      "Awards for Best Pitch, Most Innovative Idea, and Best Market Research",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Define the problem clearly before proposing your solution — judges care about real pain points",
      "Know your numbers: rough market size, cost estimates, and potential user base",
      "Make your 5-minute slot memorable with a story, a demo, or a bold, specific claim",
      "Prepare for follow-up questions about competition, monetisation, and scaling potential",
    ],
  },
  "med-talk": {
    slug: "med-talk",
    title: "Med Talk",
    emoji: "🏥",
    tagline: "Where curiosity meets the science of life.",
    unsplashKeyword: "medicine,doctor,health,science",
    description: [
      "Med Talk is SAITED's medical and life sciences event, combining quiz competitions, case-study discussions, and expert talks from practising doctors and medical researchers.",
      "Students explore topics from human anatomy and physiology to cutting-edge medical technology — including AI in diagnostics, robotic surgery, and drug discovery. It's designed to inspire the next generation of doctors and biomedical scientists.",
      "The event features both competitive rounds and open-format talks where students can ask real questions to real doctors in an intimate, engaging setting.",
    ],
    whatToExpect: [
      "Medical quiz with rounds covering anatomy, pharmacology, and current health affairs",
      "Case study challenge: diagnose a fictional patient using symptoms and test results",
      "Live talk by a practising doctor or medical researcher from Odisha",
      "Interactive human body model station for hands-on anatomical learning",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Read up on basic human body systems: cardiovascular, respiratory, nervous, and digestive",
      "Follow health news — topics from current global health events often feature in quizzes",
      "For the case study, practice structured clinical reasoning: symptoms → differentials → diagnosis",
      "Don't just memorise names; understand the 'why' behind each disease or treatment approach",
    ],
  },
  "energize": {
    slug: "energize",
    title: "ENERGIZE",
    emoji: "⚡",
    tagline: "Power up your scientific curiosity.",
    unsplashKeyword: "energy,electricity,science,experiment",
    description: [
      "ENERGIZE is SAITED's energy science event — a combination of practical experiments, a working-model showcase, and a rapid-fire quiz covering the science of energy, electricity, and sustainability.",
      "Students engage with real circuit-building challenges, renewable energy demonstrations, and thought-provoking questions about India's energy future. The event pushes both practical skills and conceptual understanding.",
      "From building a solar-powered fan to answering questions about nuclear fusion, ENERGIZE covers the full energy spectrum in one electrifying afternoon.",
    ],
    whatToExpect: [
      "Hands-on circuit-building challenge using provided components and tools",
      "Working model showcase: students build or bring energy-related models on the day",
      "Quiz covering physics of energy, renewable technology, and national energy policy",
      "Demo station where students interact with actual solar panels and wind turbines",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Review Ohm's law, series vs. parallel circuits, and basic electricity concepts",
      "Understand renewable energy types: solar, wind, hydro, geothermal — pros and cons",
      "If bringing a model, ensure it works — a simple working model scores higher than an incomplete complex one",
      "Read about India's national energy policy and recent milestones in green energy",
    ],
  },
  "crime-forensics": {
    slug: "crime-forensics",
    title: "Crime Forensics",
    emoji: "🔍",
    tagline: "Every clue tells a story. Find them all.",
    unsplashKeyword: "forensics,investigation,science,lab",
    description: [
      "Crime Forensics is SAITED's most thrillingly unique event — students step into the shoes of forensic investigators and solve a mock crime scenario using real forensic science techniques.",
      "Teams examine evidence, conduct tests (fingerprinting, chromatography, handwriting analysis), and piece together a crime narrative before presenting their conclusions to a panel of judges.",
      "This event blends biology, chemistry, psychology, and deductive reasoning into one unmissable investigation adventure that no other fest in India replicates.",
    ],
    whatToExpect: [
      "A detailed mock crime scene with physical evidence, clues, and witness statements",
      "Lab stations for fingerprint dusting, chromatography analysis, and material testing",
      "Timed investigation phase followed by a formal presentation of findings to judges",
      "Scoring based on accuracy of conclusion, scientific reasoning, and presentation quality",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Learn basic forensic techniques: fingerprint types, Locard's exchange principle, and evidence documentation",
      "Practice observation — forensic science starts with seeing what others routinely miss",
      "Work systematically: document every piece of evidence before drawing any conclusions",
      "Don't overlook witness statements — they often hold the key the physical evidence alone cannot unlock",
    ],
  },
  "math-maze": {
    slug: "math-maze",
    title: "Math Maze",
    emoji: "🧮",
    tagline: "Numbers don't lie. Speed matters.",
    unsplashKeyword: "mathematics,math,competition,students",
    description: [
      "Math Maze is SAITED's high-octane mathematics competition, designed to test both accuracy and speed across a range of topics from arithmetic to algebra, geometry, and logical reasoning.",
      "Structured as a multi-round elimination tournament, students race to solve increasingly complex problems while the clock runs down. It's mental gymnastics at its finest.",
      "Open to all classes with age-appropriate difficulty levels, Math Maze has produced some of the sharpest mathematical minds from schools across Odisha and beyond.",
    ],
    whatToExpect: [
      "Written elimination rounds with 20-question papers across multiple difficulty levels",
      "Speed round: first correct answer wins — think fast, check fast, submit faster",
      "Logic puzzle round: non-standard problems that reward creative mathematical thinking",
      "Final oral round for top finishers with a live audience cheering them on",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Master mental arithmetic — speed calculation is non-negotiable in this event",
      "Practice timed problem sets: 20 questions in 15 minutes should feel comfortable",
      "Review BODMAS, fractions, percentages, basic algebra, and geometry formulas",
      "For the logic round, step back — the answer is usually simpler than it initially looks",
    ],
  },
  "minute-matters": {
    slug: "minute-matters",
    title: "Minute Matters",
    emoji: "🎤",
    tagline: "One minute. One mic. One shot.",
    unsplashKeyword: "public,speaking,debate,stage",
    description: [
      "Minute Matters is SAITED's fast-paced public speaking competition where students have exactly 60 seconds to speak on a randomly assigned topic. The challenge: be clear, compelling, and complete — in one minute flat.",
      "Topics span current affairs, science, philosophy, and pop culture. Students receive 30 seconds to prepare immediately before stepping to the mic. It's a true test of spontaneous communication.",
      "For students interested in debate, public speaking, or leadership — this event builds the skills that matter most in every boardroom, lecture hall, and community forum.",
    ],
    whatToExpect: [
      "Individual 60-second speeches on randomly assigned topics, judged live by a panel",
      "Topics drawn from a pool covering STEM, social issues, and general knowledge",
      "30 seconds preparation time given immediately before you step to the microphone",
      "Scored on content, clarity, confidence, and precise timing (over 70 seconds = disqualified)",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Read broadly: newspapers, science magazines, and opinion columns are all great prep",
      "Structure every response: opening hook → key point → memorable close",
      "Practice with a timer every single day — 60 seconds is shorter than you think",
      "Speak to the judges, not the ceiling or floor — eye contact commands instant attention",
    ],
  },
  "science-serenade": {
    slug: "science-serenade",
    title: "Science Serenade",
    emoji: "🎵",
    tagline: "Where science sings and art speaks.",
    unsplashKeyword: "science,art,music,creativity",
    description: [
      "Science Serenade is SAITED's most creative event — a celebration of the artistic side of science. Students present original artwork, music, poetry, or multimedia pieces that communicate a scientific concept.",
      "Whether it's a painting of the double helix, a song explaining climate change, or a spoken word poem about black holes — if it blends STEM with artistic expression, it belongs on the Science Serenade stage.",
      "Judged on scientific accuracy, artistic quality, and audience impact, this event rewards the rare student who refuses to choose between the lab and the stage.",
    ],
    whatToExpect: [
      "Open-stage performance format: music, spoken word, dance, visual art, or mixed media",
      "Science must be clearly communicated through the chosen artistic medium",
      "Time limit of 5 minutes per performance or 1 A1 board per visual art entry",
      "Audience voting component contributing 30% of the final overall score",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Choose a scientific concept you're genuinely passionate about — the audience always feels authenticity",
      "Ensure the science is accurate — judges include scientists, not just artists",
      "Rehearse your timing: 5 minutes feels very different on a real stage vs. in your room",
      "Visual art entries should include a short written explanation of the science being portrayed",
    ],
  },
  "science-spell-bee": {
    slug: "science-spell-bee",
    title: "Science Spell Bee",
    emoji: "🐝",
    tagline: "Spell it. Define it. Win it.",
    unsplashKeyword: "spelling,bee,competition,knowledge",
    description: [
      "Science Spell Bee takes the classic spelling competition format and infuses it with STEM. Students must not only spell scientific terms correctly but also provide their definition — and in advanced rounds, use them in a correct sentence.",
      "Words are drawn from biology, chemistry, physics, astronomy, and technology across difficulty tiers matched to each student's class level. The event tests vocabulary, scientific literacy, and composure under pressure.",
      "For students who love science and have a way with words, this is the perfect event to shine on a big stage.",
    ],
    whatToExpect: [
      "Tiered rounds with increasing word complexity: from 'nucleus' to 'bioluminescence'",
      "Definition round: spell the word and correctly define it for bonus points",
      "Finals: sentence-usage round where context and accuracy both carry weight",
      "Live pronouncer and judge panel; all decisions are final and immediate",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "Study NCERT science glossaries from Classes 6–10 for a rock-solid foundation",
      "Learn etymology: knowing Latin and Greek roots helps decode entirely unfamiliar words",
      "Practice saying each word aloud before spelling it — it slows you down and prevents careless errors",
      "When in doubt, ask for the word's origin language — it can be the clue you need to spell correctly",
    ],
  },
  "eureka": {
    slug: "eureka",
    title: "Eureka",
    emoji: "🌟",
    tagline: "Your wildest idea. Presented to the world.",
    unsplashKeyword: "innovation,invention,idea,lightbulb",
    description: [
      "Eureka is SAITED's open innovation challenge — the event with the fewest rules and the highest ceiling. Students bring any original idea, invention, or innovation they believe could change something: a classroom, a community, or the entire world.",
      "Unlike Tech Fair (which focuses on built prototypes), Eureka welcomes ideas at all stages — from sketched concepts to working models. The emphasis is on quality of thinking, originality, and potential for real-world impact.",
      "Past Eureka entries have included a self-watering plant system, a local-language sign-language translator, and an AI-powered dyslexia reading aid — all conceived and pitched by school students.",
    ],
    whatToExpect: [
      "Open-floor presentation format with poster or model display across five categories",
      "Three-minute pitch to a panel of judges: tech, social, bio, environment, and open",
      "Judges ask unscripted follow-up questions — be ready to defend your idea from every angle",
      "Awards for Most Original, Most Impactful, Best Presentation, and the Grand Eureka Prize",
    ],
    eligibility: "Open to students from Class 1 to Class 12 from any school across India.",
    tips: [
      "You don't need a finished product — you need a clear, well-reasoned, defensible idea",
      "Identify a real problem first, then explain why your solution is better than what already exists",
      "Bring a visual: even a hand-drawn diagram makes an abstract idea dramatically more compelling",
      "Think about scale: what happens when 1000 people use your solution? What breaks? What gets better?",
    ],
  },
};
