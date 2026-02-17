export interface ResearchItem {
  id: string;
  title: string;
  subtitle: string;
  abstract: string;
  details: string[];
  tags: string[];
  status: "active" | "complete" | "ongoing";
  year: string;
}

export const researchItems: ResearchItem[] = [
  {
    id: "llm-eval",
    title: "LLM Evaluation & Comparative Analysis",
    subtitle: "M.Tech Research — NIT Uttarakhand",
    abstract:
      "Systematic evaluation of frontier LLMs across structured task taxonomies to quantify capability gaps, calibration errors, and reasoning consistency under distributional shift.",
    details: [
      "Designed a 8-category task taxonomy spanning logical inference, factual recall, arithmetic, code generation, summarization, and instruction adherence",
      "Evaluated GPT-4, Claude 3, Gemini Pro, and Mistral-7B under identical prompting conditions with n=500 test cases per category",
      "Identified systematic failure modes: hallucination clustering in low-frequency factual domains, reasoning chain collapse under multi-hop dependency",
      "Produced structured benchmark reports with statistical significance testing (p < 0.05) and inter-annotator agreement metrics",
    ],
    tags: ["LLM", "Benchmarking", "NLP", "Evaluation", "Comparative Analysis"],
    status: "active",
    year: "2024–2025",
  },
  {
    id: "prompting-strategies",
    title: "Prompting Strategy Experimentation",
    subtitle: "Empirical Research — Reasoning Elicitation",
    abstract:
      "Empirical study of how prompting strategy choice systematically affects LLM output quality, with focus on chain-of-thought variants, structured reasoning scaffolds, and role-priming.",
    details: [
      "Compared zero-shot, few-shot, chain-of-thought (CoT), tree-of-thought (ToT), and self-consistency prompting across 6 model families",
      "Quantified the contribution of explicit reasoning format vs. example selection to performance gains",
      "Investigated role-priming effects on safety boundary behavior and instruction-following compliance",
      "Developed prompting heuristics codebook: 14 documented patterns with measured performance deltas",
    ],
    tags: ["Prompting", "CoT", "Reasoning", "Instruction Following", "Ablation"],
    status: "ongoing",
    year: "2024",
  },
  {
    id: "reasoning-depth",
    title: "Reasoning Depth Analysis",
    subtitle: "Mechanistic Study — LLM Cognition",
    abstract:
      "Probing the relationship between chain length, step validity, and final answer correctness in language model reasoning — with focus on identifying when extended reasoning helps vs. degrades performance.",
    details: [
      "Annotated 1,200 reasoning traces across math, logic, and science domains for step-level correctness",
      "Found that reasoning chain length correlates with accuracy only up to a threshold (6-8 steps), beyond which error propagation dominates",
      "Identified 'reasoning collapse' pattern: high-confidence incorrect conclusions following locally valid intermediate steps",
      "Proposed a lightweight reasoning quality score (RQS) metric combining step validity rate and logical coherence",
    ],
    tags: ["Reasoning", "Mechanistic", "CoT Analysis", "Metrics", "Annotation"],
    status: "active",
    year: "2024–2025",
  },
  {
    id: "benchmark-methodology",
    title: "Structured Benchmarking Methodology",
    subtitle: "Research Infrastructure",
    abstract:
      "Documentation-first framework for reproducible LLM benchmarks — addressing prompt sensitivity, sampling variance, and metric selection as first-class methodological concerns.",
    details: [
      "Established a reproducibility protocol: fixed seeds, temperature sweeps, and multi-run averaging across all evaluations",
      "Developed prompt sensitivity analysis tool that measures output variance across 10 semantically equivalent prompt phrasings",
      "Designed modular evaluation harness integrating multiple LLM APIs under a unified async evaluation loop",
      "Contributed to internal evaluation best-practices documentation adopted by research group",
    ],
    tags: ["Methodology", "Reproducibility", "Infrastructure", "Documentation"],
    status: "complete",
    year: "2023–2024",
  },
];
