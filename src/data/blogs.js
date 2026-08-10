const blogsData = [
  {
    id: 1,
    title: "Building Autonomous Dev Agents: From Prompt Engineering to Tool Use",
    category: "AI AGENTS",
    date: "Aug 2026",
    likes: 42,
    dislikes: 1,
    content: `Autonomous coding agents move beyond standard code completion by executing multi-step tasks across complex codebases. Instead of relying on passive text generation, modern developer agents evaluate context, construct execution plans, run tests, and refine their own outputs through iterative loops.

Key architectural concepts include defining strict schema contracts for tool execution (e.g., file system reads, shell execution, terminal parsing), implementing dynamic context pruning to avoid exceeding context windows, and utilizing deterministic rollback mechanisms when agent decision loops fail validation checks.`
  },
  {
    id: 2,
    title: "Architecting a Custom VS Code Extension with Local LLM Integration",
    category: "VS CODE EXTENSIONS",
    date: "Jul 2026",
    likes: 38,
    dislikes: 0,
    content: `Running local LLMs (such as DeepSeek-Coder or Llama-3 through Ollama) gives developers private, zero-latency AI assistance without external API dependencies. Integrating these local instances into VS Code requires building dynamic API bridges using VS Code's extension API.

By implementing custom \`InlineCompletionItemProvider\` and webview panel interfaces, extensions can stream response chunks in real-time, leverage local embeddings for context retrieval, and enforce local privacy controls.`
  },
  {
    id: 3,
    title: "Context Window Optimization: RAG vs. AST Parsing for AI Code Assistants",
    category: "AI ARCHITECTURE",
    date: "Jun 2026",
    likes: 29,
    dislikes: 2,
    content: `Providing effective context to an AI coding assistant is the difference between accurate refactoring and hallucinated syntax errors. While standard Vector Retrieval-Augmented Generation (RAG) works well for plain text, structured code requires semantic understanding.

Combining Abstract Syntax Tree (AST) parsing with AST-aware tree-sitter indexing allows extensions to feed function signatures, scope dependencies, and type interfaces directly to the agent while filtering out irrelevant implementation details.`
  },
  {
    id: 4,
    title: "Model Context Protocol (MCP): Standardizing AI Tool Execution in IDEs",
    category: "AI INFRASTRUCTURE",
    date: "May 2026",
    likes: 51,
    dislikes: 0,
    content: `The Model Context Protocol (MCP) establishes an open standard for connecting AI models to external tools, databases, and editor environments. Instead of building bespoke API integrations for every code editor, MCP standardizes how AI agents discover and invoke functions.

In VS Code extensions, adopting MCP allows agents to inspect git logs, run database queries, and parse error diagnostics through unified JSON-RPC protocol layers.`
  },
  {
    id: 5,
    title: "Zero-Latency Inline Completions: Building Lightweight VS Code Providers",
    category: "EXTENSIONS & PERFORMANCE",
    date: "Apr 2026",
    likes: 19,
    dislikes: 1,
    content: `Inline completion providers in VS Code trigger on every keystroke, demanding aggressive performance budget management. High-latency completions break typing flow and degrade user experience.

This article details performance optimizations for VS Code extension development, including request debouncing, abort controller cancellation on active typing, web-worker tokenization, and streaming response rendering to achieve under-50ms visual response times.`
  }
];

export default blogsData;