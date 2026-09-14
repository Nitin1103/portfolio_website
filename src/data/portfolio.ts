import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Nitin Sharma",
    headline: "Software Engineer",
    positioning:
      "Building reliable software, cloud systems, and AI-powered experiences.",
    supportingBio:
      "I enjoy turning complex problems into simple, useful software — from backend systems and cloud infrastructure to AI-powered applications.",
    location: "India",
    status: {
      text: "Open to opportunities",
      available: true,
    },
    socials: {
      github: "https://github.com/Nitin1103",
      linkedin: "https://www.linkedin.com/in/nitin-sharma-992972219/",
      email: "nitinisatwork@gmail.com",
      resume: "#",
    },
  },

  principles: [
    {
      id: "useful",
      title: "Build things that are useful",
      description:
        "Software delivers value when it solves real human and organizational problems reliably, not when it showcases unnecessary complexity.",
    },
    {
      id: "systems",
      title: "Understand the system, not just the framework",
      description:
        "Frameworks change rapidly, but foundational computer science, distributed protocols, caching topologies, and network limits stay consistent.",
    },
    {
      id: "learning",
      title: "Keep learning and iterating",
      description:
        "Technology accelerates quickly. Consistent hands-on exploration, architectural critique, and measurement lead to durable engineering instincts.",
    },
  ],

  featuredProject: {
    id: "agentic-rag-engine",
    title: "Autonomous RAG & Agent Pipeline",
    tagline:
      "Multi-agent retrieval architecture with hybrid semantic routing, citation validation, and asynchronous execution.",
    problem:
      "Standard vector search RAG systems struggle with hallucinated citations, lack of deterministic query routing, and slow multi-hop document synthesis across large heterogeneous datasets.",
    solution:
      "Engineered an agentic retrieval framework leveraging hierarchical query decomposition, hybrid dense-sparse reranking, and verification reflection loops to ensure grounded responses with sub-second retrieval latency.",
    outcome:
      "Achieved 94% retrieval precision on multi-hop benchmarks and cut average response latency by 42% through speculative execution and async chunk prefetching.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Qdrant",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    metrics: [
      { label: "Retrieval Precision", value: "94.2%" },
      { label: "End-to-End Latency", value: "< 750ms" },
      { label: "Citation Accuracy", value: "99.1%" },
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    isPlaceholder: true,
  },

  projects: [
    {
      id: "cloud-event-pipeline",
      title: "Event-Driven Telemetry Pipeline",
      category: "Cloud & Infrastructure",
      oneLiner:
        "Scalable streaming ingestion pipeline processing asynchronous telemetry records with dead-letter recovery.",
      description:
        "Designed and deployed a serverless telemetry collection pipeline on AWS using SQS, Lambda, and DynamoDB with automated schema validation and idempotent processing guarantees.",
      technologies: ["AWS Lambda", "SQS", "DynamoDB", "Python", "Terraform"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      visualType: "diagram",
      visualMeta: {
        diagramSteps: [
          "Ingress API Gateway",
          "SQS FIFO Buffer",
          "Batch Worker Lambdas",
          "Idempotent DynamoDB Sink",
          "CloudWatch Alarms & DLQ",
        ],
      },
      isPlaceholder: true,
    },
    {
      id: "high-throughput-rest-api",
      title: "High-Throughput Services Gateway",
      category: "Backend & Systems",
      oneLiner:
        "Asynchronous REST API service with distributed Redis caching, rate-limiting, and connection pooling.",
      description:
        "Architected a FastAPI backend engine with asynchronous SQLModel/PostgreSQL connection pooling, sliding-window token rate limiting, and structured JSON observability.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      visualType: "code",
      visualMeta: {
        codeLanguage: "python",
        codeSnippet: `@app.get("/api/v1/metrics/stream")
async def stream_telemetry(session: AsyncSession = Depends(get_db)):
    cached = await redis_client.get("metrics:summary")
    if cached:
        return orjson.loads(cached)
    data = await compute_aggregated_stats(session)
    await redis_client.setex("metrics:summary", 30, orjson.dumps(data))
    return data`,
      },
      isPlaceholder: true,
    },
    {
      id: "distributed-system-dashboard",
      title: "Cloud Infrastructure Console",
      category: "Full-Stack Application",
      oneLiner:
        "Real-time operational dashboard visualizing microservice health, p99 latency heatmaps, and resource saturation.",
      description:
        "Engineered a responsive single-page web console with Server-Sent Events (SSE) for live health status, interactive cluster node inspection, and dark-mode first telemetry views.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      visualType: "dashboard",
      visualMeta: {
        metrics: [
          { label: "p99 Latency", value: "24ms" },
          { label: "Uptime", value: "99.98%" },
          { label: "Healthy Nodes", value: "16 / 16" },
        ],
      },
      isPlaceholder: true,
    },
    {
      id: "llm-eval-benchmark-tool",
      title: "LLM Inference & Eval Harness",
      category: "AI & Experimental",
      oneLiner:
        "CLI and benchmark runner measuring token throughput, prompt regression, and semantic drift across open models.",
      description:
        "Built a lightweight evaluation suite comparing quantized open-weights models vs hosted API endpoints on deterministic coding and reasoning benchmarks with automated markdown reporting.",
      technologies: ["Python", "Ollama", "Pydantic", "SQLite"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      visualType: "agent",
      visualMeta: {
        workflowNodes: [
          { title: "Prompt Fixtures", desc: "Parameterized test datasets" },
          { title: "Async Runners", desc: "Concurrent model inference" },
          { title: "LLM-as-a-Judge", desc: "Deterministic rubric scoring" },
          { title: "Regression Diff", desc: "Automated PR reporting" },
        ],
      },
      isPlaceholder: true,
    },
  ],

  experience: [
    {
      id: "exp-current",
      role: "Software Engineer",
      company: "[PLACEHOLDER — Company Name]",
      location: "India / Remote",
      period: "2024 — Present",
      description:
        "[PLACEHOLDER — Replace with your actual role overview. Example: Developing backend microservices, cloud deployments, and AI integration pipelines for enterprise workloads.]",
      technologies: ["Python", "FastAPI", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "[PLACEHOLDER — Bullet 1: e.g., Engineered core backend REST APIs serving 50k+ daily transactions with 99.9% uptime]",
        "[PLACEHOLDER — Bullet 2: e.g., Deployed containerized microservices on AWS with automated CI/CD pipelines]",
        "[PLACEHOLDER — Bullet 3: e.g., Collaborated with cross-functional engineering teams to refine system architecture and database queries]",
      ],
      isPlaceholder: true,
    },
    {
      id: "exp-prev",
      role: "Software Engineering Intern / Associate",
      company: "[PLACEHOLDER — Previous Organization]",
      location: "India",
      period: "2023 — 2024",
      description:
        "[PLACEHOLDER — Replace with previous internship or project work summary.]",
      technologies: ["JavaScript", "Python", "SQL", "Git", "Linux"],
      achievements: [
        "[PLACEHOLDER — Bullet 1: e.g., Implemented automated test suites and backend data validation scripts]",
        "[PLACEHOLDER — Bullet 2: e.g., Assisted in optimizing database schema indexing and reducing query execution times]",
      ],
      isPlaceholder: true,
    },
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Languages",
      description: "Core programming languages used for systems and applications",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      description: "APIs, persistence, data structures, and relational databases",
      skills: [
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
        "SQLModel",
        "Redis",
        "System Design",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      description: "Containerization, cloud services, and automated deployment",
      skills: ["AWS", "Docker", "CI/CD", "Linux", "Terraform", "Git"],
    },
    {
      id: "ai",
      title: "AI & Generative AI",
      description: "Modern language model workflows, retrieval, and agents",
      skills: [
        "LLMs",
        "RAG Architecture",
        "AI Agents",
        "Prompt Engineering",
        "LangChain / LangGraph",
        "Vector Databases",
      ],
    },
    {
      id: "frontend",
      title: "Frontend & Web",
      description: "Modern, responsive, accessible web interfaces",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5 / Modern CSS"],
    },
  ],

  currentlyExploring: [
    {
      id: "agents",
      title: "Autonomous Agent Architectures",
      area: "AI Engineering",
      summary:
        "Investigating multi-agent coordination frameworks, tool synthesis, and human-in-the-loop fallback strategies.",
      tags: ["Agentic Workflows", "LangGraph", "Eval-Driven Dev"],
    },
    {
      id: "distributed-systems",
      title: "Distributed State & Consensus",
      area: "Systems Engineering",
      summary:
        "Studying distributed fault tolerance, event-driven ordering guarantees, and Raft consensus implementations.",
      tags: ["Event-Driven", "Consensus", "Partition Tolerance"],
    },
    {
      id: "cloud-patterns",
      title: "Zero-Trust Cloud Architecture",
      area: "Infrastructure",
      summary:
        "Deepening patterns for secure serverless VPC topologies, least-privilege IAM policies, and infrastructure-as-code modularity.",
      tags: ["AWS Well-Architected", "Terraform", "Security"],
    },
  ],

  certifications: [
    {
      id: "cert-aws",
      name: "[PLACEHOLDER — AWS Certified Cloud Practitioner / Solutions Architect]",
      issuer: "Amazon Web Services",
      year: "2024",
      url: "https://aws.amazon.com/certification",
      isPlaceholder: true,
    },
    {
      id: "cert-specialized",
      name: "[PLACEHOLDER — Professional Technical Certification / Specialization]",
      issuer: "Coursera / DeepLearning.AI / University",
      year: "2023",
      url: "https://coursera.org",
      isPlaceholder: true,
    },
  ],
};
