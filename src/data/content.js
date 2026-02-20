export const portfolioData = {
  name: 'Pratik Korat',
  role: 'Software Engineer (ML)',
  profileImage: '/profile-photo.png',
  location: 'San Jose, CA',
  email: 'korat.pratik1@gmail.com',
  phone: '+1 (408) 646 5708',
  resumeFile: '/Pratik_Korat_Resume.pdf',
  summary:
    'Software Engineer (ML) with 2.5+ years of experience shipping and operating production ML systems, specializing in LLM fine-tuning, inference optimization, and automated evaluation pipelines.',
  aboutSummary:
    'I work at the intersection of ML research and production engineering, translating model ideas into reliable systems with measurable user and business impact.',
  heroTagline:
    'I build reliable, low-latency AI systems and production-grade LLM workflows through hands-on experimentation and engineering.',
  heroHeadline: 'LLM Systems, Inference Optimization, and Production ML Engineering',
  heroHighlights: [
    'Built and deployed end-to-end ML systems with measurable production impact.',
    'Specialized in LLM post-training, low-latency inference, and robust evaluation.',
    'Strong delivery across data pipelines, backend services, and MLOps workflows.',
  ],
  heroMetrics: [
    { label: 'Experience', value: '2.5+ yrs' },
    { label: 'Projects', value: '20+' },
    { label: 'Publications', value: '2' },
    { label: 'Top Impact', value: 'Reduce time-to-production by 37% for ML Systems at Scale' },
  ],
  currentRole: 'ML Research Assistant, SJSU',
  socials: {
    github: 'https://github.com/pratikkorat26',
    linkedin: 'https://www.linkedin.com/in/pratik-korat/',
  },
  mediumProfile: 'https://medium.com/@pratikkorat1',

  experience: [
    {
      role: 'Machine Learning Research Assistant',
      company: 'Research Foundation, SJSU',
      period: 'Mar 2025 - Present',
      highlights: [
        'Engineered a high-throughput LLM post-training pipeline using GRPO (reinforcement learning), implementing a dual reward optimization strategy to reduce hallucinations and improve reasoning and consistency during model evaluation ',
        'Implemented a Canvas-integrated LLM grading service using vLLM, adding rate limiting and request queuing to support 100+ faculty users with stable, low-latency performance.',
        'Delivered an LLM-based grading workflow that automated assignment evaluation, reducing turnaround time by 35% while maintaining 95% scoring consistency across courses',
      ],
    },
    {
      role: 'Teaching Associate',
      company: 'Department of Computer Engineering, SJSU',
      period: 'Aug 2024 - Dec 2025',
      highlights: ['Mentored 40+ graduate students on ML/DL systems, debugging training instability, optimizing model architectures, and improving experimental rigor in research and project work.', 
        'Facilitated weekly lab sessions, provided technical guidance, and reviewed project progress to ensure academic excellence and research integrity.'],
    },
    {
      role: 'System Engineer - Machine Learning',
      company: 'Tata Consultancy Services',
      period: 'Jun 2022 - Oct 2023',
      highlights: [
        'Built and integrated a tabular ML training module within an internal AutoML framework, supporting PyTorch and TensorFlow, automating training and Hyperparameters Optimization workflows, and cutting time-to-production by 37%.',
        'Developed and deployed an unsupervised anomaly detection model (VAE-based) on internal production infrastructure using a containerized workflow, reducing manual audit effort by 17% through automated pattern detection.',
        'Implemented automated evaluation and validation pipelines to support rapid model iteration, standardizing metrics and experiment tracking, and cutting evaluation turnaround time by 40% ',
        'Deployed ML models as FastAPI-based inference services with asynchronous request handling and batching, ensuring low-latency predictions under variable production traffic'
      ],
    },
  ],

  navLinks: [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ],
  fallbackBlogs: [
    {
      title: 'View all posts on Medium',
      link: 'https://medium.com/@pratikkorat1',
      displayDate: '',
    },
  ],
  stats: [
    { label: 'Years Experience', value: '2.5+' },
    { label: 'Production Projects', value: '8+' },
    { label: 'Publications', value: '2' },
    { label: 'MS GPA', value: '3.98/4.00' },
  ],
  education: [
    {
      degree: 'M.S., Software Engineering',
      school: 'San Jose State University, California',
      period: 'Jan 2024 - Dec 2025',
      gpa: '3.96/4.00',
      coursework: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Reinforcement Learning'],
    },
    {
      degree: 'B.E., Information Technology',
      school: 'L.D. College of Engineering, India',
      period: 'Jul 2018 - Apr 2022',
      gpa: '3.92/4.00',
      coursework: [],
    },
  ],
  skills: [
    {
      title: 'Languages',
      items: ['Python', 'C++', 'SQL'],
    },
    {
      title: 'ML Frameworks',
      items: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'Hugging Face Transformers', 'LangChain', 'Scikit-Learn', 'XGBoost'],
    },
    {
      title: 'Inference Optimization',
      items: ['vLLM', 'SGLang', 'CUDA', 'Triton', 'TensorRT', 'ONNX', 'TorchScript', 'llama.cpp', 'Model Quantization', 'PTQ'],
    },
    {
      title: 'MLOps',
      items: ['GitHub Actions', 'Slurm', 'REST', 'Docker', 'AWS', 'Vertex AI', 'Qdrant', 'Apache Kafka', 'MLflow', 'Weights & Biases'],
    },
    {
      title: 'Applied ML Domains',
      items: [
        'Generative AI (LLMs, VLMs, RAG)',
        'Natural Language Processing',
        'Computer Vision',
        "Speech Recognition",
        'Reinforcement Learning',
        'Distributed Training',
        'Time Series Modeling',
        'Federated Learning',
      ],
    },
  ],
  projects: [
    
    
    {
      title: 'Scratch LLM Inference System',
      stack: ['FastAPI', 'Hugging Face', 'Gemma3', 'Transformers'],
      description:
        '• Implemented a readable, end-to-end LLM inference engine for Gemma 3 270M in PyTorch, including GQA attention, RoPE, KV-cache decoding, and a single-device scheduler with prefill/decode separation, round-robin fairness, anddecode batching. Built an OpenAI-compatible FastAPI chat API (/v1/chat/completions) with SSE streaming, prompt templating, and usage accounting. Added a radix-tree prefix KV cache with LRU memory limits and comprehensive unit tests for scheduler isolation, batching behavior, and API contract compliance.',
      impact: 'Readable LLM inference sytem which sustained 32 concurrent requests with 0% errors, 100 tokens/sec, and 6s p95 latency.',
      link: 'https://github.com/pratikkorat26/gemma3-from-scratch-python',
    },
    {
      title: 'Triton Transformer Kernels',
      stack: ['Python', 'PyTorch', 'Triton', 'CUDA', 'Transformer Inference', 'Benchmarking'],
      description:
        '• Built high-performance Triton kernels for Transformer inference, including Flash Attention (prefill/decode), fused RMSNorm + GeGLU MLP kernels, and GQA-aware decoding paths. Added correctness tests and benchmark suites to compare Triton kernels against PyTorch eager and torch.compile baselines.',
      impact: 'Improved inference efficiency through kernel fusion, memory-aware tiling, and benchmark-driven optimization on CUDA GPUs.',
      link: 'https://github.com/pratikkorat26/attention',
    },
    {
      title: 'NanoRouter: Edge-Native Agentic Tool Router',
      stack: ['Gemma3 1B', 'LoRA', 'Unsloth', 'llama.cpp'],
      description:
        '• Fine-tuned a Small Language Model (SLM) using LoRA for edge/on-device inference, implementing a tool-calling LLM with structured outputs and achieving 93% executable action accuracy under on-device performance constraints.',
      impact: 'Achieved 93% executable action accuracy under edge constraints.',
      link: '#',
    },
    {
      title: 'Automated Course Quality Audit Platform',
      stack: ['Qwen', 'RAG', 'FastAPI', 'Qdrant'],
      description:
        '• Built a production LLM application for Quality Matters (QM) course auditing with Canvas LMS integration, RAG-based evaluation, and Qdrant vector database for embeddings and semantic search, delivering structured scoring, evidence retrieval, and recommendations to 30+ DAUs.',
      impact: 'Delivered structured recommendations to 30+ daily active users.',
      link: '#',
    },

    {
      title: 'Personalized Fitness & Health Tracker Virtual Assistant',
      stack: ['Python', 'LLMs', 'Gemma', 'Qwen', 'SQLite', 'Web Search', 'Ollama'],
      description:
        '• Built an LLM-based virtual assistant that answers personalized fitness and health queries by combining structured vitals and sleep data from SQLite with external health knowledge from web search. Implemented trend analysis, anomaly detection, and metric comparisons across heart rate, blood pressure, SpO2, and sleep stages via a conversational interface.',
      impact:
        'Delivered a tool-augmented AI health assistant with robust query handling, multi-model reasoning, and practical performance on local inference workflows.',
      link: 'https://github.com/pratikkorat26/AgenticAI-Personal-Assistant',
    },
    
    {
      title: 'Real-Time Company Risk Monitoring Pipeline',
      stack: ['Kafka', 'vLLM', 'Streaming NLP', 'SQL'],
      description:
        '• Architected a Kafka-based real-time NLP pipeline ingesting 1K–5K news articles/day and deployed a vLLM-powered LLM inference service for zero-shot multi-label classification with low latency batched inference',
      impact: 'Enabled fast, scalable risk signal extraction from live news feeds.',
      link: '#',
    },

    {
      title: 'SnoopTrade - Insider-Aware Time Series Forecasting Platform',
      stack: ['Python', 'Time Series ML', 'Data Pipelines', 'FastAPI', 'AWS Elastic Beanstalk', 'Load Balancer', 'Auto Scaling'],
      description:
        '• Built a production ML platform for stock time-series forecasting by combining insider trading filings with historical market signals. Designed automated 24-hour data ingestion, temporal feature alignment, leakage-safe joins, and on-demand forecasting jobs for user-selected historical windows. Deployed backend inference services behind AWS Elastic Beanstalk with load balancing and autoscaling for reliable real-time dashboard serving.',
      impact: 'Delivered reproducible, scenario-driven forecasting with scheduled pipelines, deterministic preprocessing, and isolated per-request model runs.',
      link: 'https://snooptrade.vercel.app',
    },
    {
      title: 'Audio Digit Classification with PyTorch',
      stack: ['Python', 'PyTorch', 'Hugging Face Datasets', 'AMP', 'WSL2', 'CUDA'],
      description:
        '• Built an end-to-end spoken digit classification pipeline on FSDD with audio preprocessing (resampling, pad/trim, log-Mel extraction), offline feature caching, and a lightweight spectrogram CNN (SmallMelCNN_Lite). Implemented mixed-precision training with PyTorch AMP, experiment tracking, and full evaluation with classification metrics and confusion matrix analysis.',
      impact:
        'Inference performance validation artifact for PyTorch',
      link: 'https://github.com/pratikkorat26/Audio-Digits-Classification',
    },

    

  ],
  
  publications: [
    {
      title: 'A Federated Learning Study on Bias and Fairness in Small Data Medical Applications',
      venue: 'IEEE Big Data Service, 2025',
      link: 'https://ieeexplore.ieee.org/document/11129563',
    },
    {
      title: 'FedFAME: Data-Free Contrastive Learning Framework for Federated Semi-Supervised Learning',
      venue: 'ACM SAC, 2023',
      link: 'https://dl.acm.org/doi/10.1145/3555776.3577613',
    },
  ],
}
