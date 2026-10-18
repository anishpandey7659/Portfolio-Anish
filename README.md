# Anish Pandey — Portfolio & Scroll Animation Showcase

A modern, high-performance portfolio website featuring a hardware-accelerated 240-frame scroll-driven background animation with smooth momentum physics and pixel-perfect design matching `portfolio_desgin.png`.

## Visual & Component Highlights

- **Hero View (Pixel-Matched to Design)**:
  - **AP Monogram Logo**: Clean vector geometry with high-DPI scaling.
  - **Navigation Bar**: Pinned header with active section indicator underline, smooth navigation links, and mobile drawer.
  - **Hero Content Block**: Left-aligned typography with "HI, I'M", "Anish Pandey", "SOFTWARE ENGINEER", fine divider rule, bio, and dual action buttons:
    - `VIEW PROJECTS →` (solid outline, glides to the projects milestone)
    - `VIEW RESUME ↓` (dashed outline, triggers interactive modal with complete CV)
  - **Right-Side Tagline**: Vertical accent line and stacked typography: `BETTER SYSTEMS FOR A BRIGHTER TOMORROW`.
  - **Bottom-Left Scroll Indicator**: Vertical tick line, `SCROLL`, and pulsing arrow indicator.
  - **Bottom-Right Social Dock**: GitHub, LinkedIn, X (Twitter), and direct email links.

- **Interactive Storyline Sections (Synchronized with Video Frames)**:
  - **01 / ABOUT**: Profile summary, B.Sc. CSIT education at Tribhuvan University, Nepal, and core engineering philosophy.
  - **02 / FEATURED PROJECTS**:
    - **ArXiv Copilot** (Agentic Academic RAG with Docling & OpenSearch)
    - **JobPilot AI** (Multi-Node LangGraph Match Agent)
    - **ReturnGuard** (Governed Multi-Agent AI Returns System with Hash-Chained Audit Logs)
  - **03 / SKILLS**: Categorized badges across Agentic AI, RAG & Vector Stores, Backend/APIs, and DevOps.
  - **04 / CONTACT**: Direct reach out tiles, location, and copyright.

- **Background Canvas Engine**:
  - Pinned `<canvas>` rendering 240 video frames in sync with scroll progress.
  - **Lenis Smooth Scroll** + linear interpolation (`lerp`) for buttery momentum and zero jitter across trackpads, mouse wheels, and mobile touch.
  - **Optimized WebP Assets**: Reduced 266MB raw frames down to 22MB (~92% reduction) for instant loading and minimal browser memory overhead.

## Development & Build

```bash
# Development server (currently active on http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```
