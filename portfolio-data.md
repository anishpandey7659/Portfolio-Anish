# Portfolio Content & Profile Data

This document serves as the single source of truth for the portfolio website content of **Anish Pandey**, organized cleanly for display across sections (Hero, About, Skills, Projects, and Contact).

---

## 1. Personal & Professional Profile

### Identity & Contact
- **Name:** Anish Pandey
- **Headline / Title:** AI Engineer
- **Location:** Nepal
- **Email:** [anishpandey1232@gmail.com](mailto:anishpandey1232@gmail.com)
- **Portfolio Domain:** [anishpandey7.com](https://anishpandey7.com)
- **LinkedIn:** [linkedin.com/in/anishpandey7](https://linkedin.com/in/anishpandey7) *(resume shorthand: `linkedin.com/anishpandey7`)*
- **GitHub Profile:** [github.com/anishpandey7659](https://github.com/anishpandey7659)

> **Note on Links & URLs:**  
> Verify domain DNS and exact LinkedIn handle before final deployment. Project repository links listed below reflect standard GitHub username mapping (`https://github.com/anishpandey7659/<repo>`) and should be confirmed before publishing clickable links.

### Education
- **Degree:** Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT) — 3rd Year
- **Institution:** Birendra Multiple Campus, Tribhuvan University, Nepal
- **Expected Graduation:** November 2028

### Professional Positioning & Summary
> AI Engineer specializing in Agentic AI Systems, LLM Applications, and Production-Grade GenAI Solutions.

- **Focus & Strengths:** Hands-on experience developing autonomous AI agents, robust RAG pipelines, prompt-engineering workflows, LLM/agent evaluations, and multi-agent orchestration.
- **Tooling & Architecture:** Core proficiency in Python, LangChain, LangGraph, LiteLLM, and vector databases.
- **Enterprise Agentic Capabilities:** Designing and integrating intelligent agent workflows, structured tool use, deterministic guardrails, and scalable architectures without overstating seniority or professional tenure.

---

## 2. Technical Skills

Organized into industry-standard groupings with verified product naming conventions:

### Agentic AI & LLM Engineering
- **Frameworks & Orchestration:** LangChain, LangGraph
- **Observability & Evaluation:** Langfuse, DeepEval *(standard spelling verified; resume: "DeepEvals")*, Logfire
- **Model Routing & Gateways:** LiteLLM
- **Techniques:** Agentic RAG, Multi-Agent Collaboration, Autonomous Decision Workflows, Prompt Engineering, Evaluation Benchmarking

### RAG & Data Stores
- **Retrieval Architecture:** Retrieval-Augmented Generation (RAG), Hybrid Retrieval (BM25 + Dense Vector Search), Section-aware Chunking
- **Vector & Search Databases:** OpenSearch, Pinecone, FAISS
- **Relational Databases:** PostgreSQL *(standard spelling verified; resume: "PostgresSQL")*

### Backend & APIs
- **Core Language:** Python
- **Frameworks & Validation:** FastAPI, Pydantic, SQLAlchemy
- **Concurrency & Integration:** AsyncIO, RESTful API Integration

### Development & DevOps
- **Containerization & Environments:** Docker, Docker Compose, Linux
- **Version Control & Collaboration:** Git, GitHub

---

## 3. Featured Projects

---

### Project A: ArXiv Copilot — Agentic Research Assistant

- **Subtitle:** End-to-End RAG Research Assistant with Hybrid Search & Multi-Layer AI Guardrails
- **Tech Stack:** Python, FastAPI, OpenSearch, LiteLLM, Docling, Langfuse, Logfire, BM25, Docker
- **Repository:** [github.com/anishpandey7659/Arxiv-Copilot](https://github.com/anishpandey7659/Arxiv-Copilot) *(shorthand in resume: `github/Arxiv-Copilot`)*
- **Demo / Status:** Local / Showcase project

#### Problem Statement
Researchers and developers face information overload when navigating extensive academic literature on arXiv. Discovering pertinent papers, parsing complex multi-column academic PDF layouts, and accurately synthesizing grounded answers without hallucinations requires specialized ingestion and retrieval workflows.

#### System Architecture & End-to-End Flow
1. **Paper Discovery & Fetching:** Query arXiv API for papers with parallel batch downloading.
2. **Automated Parsing & Ingestion:** Leverages **Docling** for structured academic PDF parsing, preserving tables, headings, and logical section hierarchies.
3. **Section-Aware Chunking & Embeddings:** Context-preserving chunking tied to document structure prior to embedding generation.
4. **Hybrid Indexing & Retrieval:** Stored in **OpenSearch**, combining sparse lexical search (**BM25**) and dense vector search for high recall and precision.
5. **Provider-Agnostic Generation:** Routed via **LiteLLM** to decouple application logic from underlying LLM providers.
6. **Multi-Layer AI Guardrails:** Rate limiting, strict regex filtering, and LLM-based safety checks to maintain output integrity.
7. **Observability & Tracing:** Full telemetry instrumented with **Langfuse** and **Logfire** for latency monitoring, trace graphs, and token cost tracking.

#### Key Features & Technical Contributions
- Automated Docling-powered ingestion pipeline with parallel paper download and indexing optimization.
- Hybrid search relevance (BM25 + vector embeddings) in OpenSearch.
- Multi-layer guardrail design ensuring safe and grounded answer generation.
- Full observability stack tracking token usage, latency bottlenecks, and error states.

---

### Project B: JobPilot AI — JobMatch Agent

- **Subtitle:** Multi-Node LangGraph Agent for Dynamic Job Discovery, Ranking & Tailored Resumes
- **Tech Stack:** Python, LangGraph, Langfuse, Pydantic, LLM APIs
- **Repository:** [github.com/anishpandey7659/JobPilot](https://github.com/anishpandey7659/JobPilot) *(shorthand in resume: `github/JobPilot`)*
- **Demo / Status:** Local / Showcase project

#### Problem Statement
Job seekers struggle with high-friction workflows: matching their specific skill set across disparate job listings and tailoring resumes accurately to job descriptions without introducing fabricated experience or irrelevant formatting.

#### System Workflow & Architecture
1. **Conditional Entry Router:** Directs incoming requests dynamically to either **Job-Search Mode** or **Resume-Tailoring Mode** within a single state graph.
2. **Job Fetching & Ranking Node:** Retrieves listings and scores role relevance against structured candidate profiles.
3. **Quality Check & Query Reformulation Loop:** If top-ranked listings fall below confidence or relevance thresholds, the agent automatically reformulates the search query and re-runs the retrieval node.
4. **Resume Tailoring Node:** Aligns relevant candidate experiences to targeted role requirements.
5. **Validation & Output Gate:** Evaluates the tailored resume output against strict structural and content constraints before returning data.
6. **End-to-End Graph Observability:** **Langfuse** integration tracing node state transitions, retry loops, and LLM execution times.

#### Key Features & Technical Contributions
- Multi-node state machine engineered with **LangGraph**.
- Self-correcting feedback loop with automatic query reformulation upon low-scoring initial retrieval.
- Multi-mode unified graph architecture with strict post-generation validation checks.
- Granular step-by-step tracing with Langfuse across all state transitions.

---

### Project C: ReturnGuard — Governed Multi-Agent AI Returns System

- **Subtitle:** Local Multi-Agent E-Commerce Return & Refund System with Deterministic Governance
- **Tech Stack:** Python, Docker Compose, Multi-Agent Architecture, Vision/Multimodal LLMs, Hash-Chained Audit Logs
- **Repository:** *(Verify repository URL before hyperlinking)*
- **Demo / Status:** Local Docker Compose implementation (reproducible testing environment; non-production simulation)

#### Problem Statement & Overview
Modern e-commerce returns are susceptible to abuse, fraudulent claims (e.g., synthetic or pre-existing damage images), and high operational review costs. Fully autonomous AI decision-making without deterministic boundaries introduces business risk, while manual review creates massive bottlenecks. ReturnGuard explores a governed, audited multi-agent alternative with bounded autonomy.

#### Governed Multi-Agent Pipeline
```
[Data-Quality Gate]
       │
       ▼
   [Planner]
       │
       ├──► [Intake Agent]
       ├──► [Policy Analysis Agent] (Versioned policies)
       ├──► [Image Analysis Agent]  (Catalog comparison + AI-damage screening)
       └──► [Behaviour Analysis Agent]
       │
       ▼
[Decision Agent]
       │
       ▼
   [Critic]
       │
       ▼
[Explanation Agent]
       │
       ▼
[Governance Gate] (Deterministic safety thresholds & automation policy)
       │
       ├───► Approved (Meets deterministic confidence & criteria)
       └───► Human-in-the-Loop Review (High-risk, uncertain, or high-value)
```

#### Core Capabilities & Safeguards
- **Deterministic Governance Gate:** Hard-coded business thresholds override probabilistic agent recommendations.
- **Absolute Denial Prohibition:** Automatic denials are strictly forbidden; any proposed denial requires explicit human confirmation.
- **Global Kill Switch:** An instantaneous override mechanism routing 100% of cases directly to human reviewers.
- **Multimodal Image Screening:** Compares claimed return images against catalog photos and screens for AI-generated or manipulated damage artifacts.
- **Configurable Automation Modes:** Supports 4 discrete operational modes:
  - *Shadow:* Runs silently in background; outputs recorded for benchmarking.
  - *Suggest:* Formulates recommendations for human triage.
  - *Assist:* Pre-populates decisions for human sign-off.
  - *Auto:* Autonomous approvals strictly bounded by safety thresholds for low-risk, verified cases.
- **Append-Only, Hash-Chained Audit Logging:** Cryptographically linked event ledger with a verification script to validate decision history and prevent tampering.
- **Decision-Level Traceability:** Captures exact model versions, system prompts, policy document snapshots, raw inputs, token usage, and simulated costs for every decision.
- **Analytics & Value Modeling:** Computes simulated agent-human agreement rates and projected operational cost impacts.

#### Portfolio Framing & Accuracy Constraints
- **Framed strictly as an applied research / local portfolio simulation:** Clearly state that the project runs via Docker Compose and is not deployed to live production.
- Avoid unverified assertions of verified fraud elimination percentages, model accuracy benchmarks, or realized financial savings; treat all business impact figures as model estimates.

---

## 4. Suggested Website Section Structure

1. **Hero Section:**
   - Greeting, Name (**Anish Pandey**), Headline (**AI Engineer**).
   - Core tagline: *Specializing in Agentic AI Systems, LLM Applications, and Production-Grade GenAI Solutions.*
   - Quick action buttons: *View Projects*, *Get in Touch* (mailto / LinkedIn), *GitHub*.

2. **About Section:**
   - Concise summary based on the professional positioning.
   - Education snippet (B.Sc. CSIT, 3rd Year at Birendra Multiple Campus, TU; expected Nov 2028).
   - Core philosophy: deterministic governance, observability, and robust agentic systems.

3. **Skills Section:**
   - Clean badges or categorized cards: *Agentic AI & LLMs*, *RAG & Data Stores*, *Backend & APIs*, *DevOps & Tooling*.

4. **Featured Projects Section:**
   - Card / Case study layout highlighting problem, workflow, technical stack badges, and key architectural contributions.
   - Includes ArXiv Copilot, JobPilot AI, and ReturnGuard.

5. **Contact / Footer:**
   - Email, LinkedIn, GitHub, Location (Nepal).
   - Clean, professional copyright and credit line.
