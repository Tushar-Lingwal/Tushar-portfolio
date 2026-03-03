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
    title: "Quantization & Efficiency Benchmarking",
    subtitle: "M.Tech Research — NIT Uttarakhand",
    abstract:
      "This research provides a controlled, comparative evaluation of how architectural design, post-training quantization, and prompting strategies interact to influence reasoning performance in Large Language Models (LLMs).",
    details: [
      "Evaluated DeepSeek-MoE-16B and Mistral-7B under 4-bit post-training quantization to simulate real-world deployment constraints.",
      "Analyzed the trade-offs between reduced bit-precision and logical consistency in resource-constrained environments.",
      "Demonstrated that 4-bit quantization does not significantly impair arithmetic accuracy, showing that precision is not the primary bottleneck for mathematical tasks.",
      ]
    tags: ["LLM", "Benchmarking", "NLP", "Evaluation", "Comparative Analysis"],
    status: "ongoing",
    year: "2026",
  },
  {
    id: "prompting-strategies",
    title: "Prompt Engineering & Model Comparisons",
    subtitle: "M.Tech Research — NIT Uttarakhand",
    abstract:
      "Empirical study of how prompting strategy choice systematically affects LLM output quality, with focus on chain-of-thought variants.",
    details: [
      "Conducted a controlled study of Basic, Chain-of-Thought (CoT), and Instruction-style prompting across all four models.",
      "Proved that CoT prompting is architecture-dependent, yielding gains for models like Phi-2 (58% to 62%) while showing no benefit for others.",
      "Performed comparative analysis on GSM8K, where the instruction-tuned Qwen2.5-3B achieved the highest accuracy of 80%.",
    ],
    tags: ["Prompting", "CoT", "Reasoning", "Instruction Following"],
    status: "active",
    year: "2025-2026",
  },
  {
    id: "reasoning-depth",
    title: "Multi-Domain Reasoning Evaluation",
    subtitle: "M.Tech Research — NIT Uttarakhand",
    abstract:
      "conducted large paramaterized quantized model vs small language model on reasoning dataset.",
    details: [
      "Assessed model performance on knowledge-intensive inference using the ARC-Challenge dataset and multi-hop reasoning via StrategyQA.",
      "Demonstrated that the Mixture-of-Experts (MoE) architecture excels in multi-step logical reasoning and knowledge integration, achieving the highest accuracy (70%) on StrategyQA.",
      "Concluded that reasoning performance is task-type dependent, as the model rankings for scientific and multi-hop tasks differed significantly from arithmetic benchmarks.",
    ],
    tags: ["Reasoning", "CoT Analysis", "Metrics", "StrategyQA", "ARC-Challenge"],
    status: "active",
    year: "2025–2026",
  },
  {
    id: "benchmark-methodology",
    title: "Transformer Architecture: Implementation and Core Mechanisms",
    subtitle: "M.Tech Research — NIT Uttarakhand",
    abstract:
      "Implementing and understanding the transformer architecture and various working behind it.",
    details: [
      "Subword Tokenization & BPE: Studied the implementation of Byte Pair Encoding (BPE) to efficiently map raw text into a compressed vocabulary of subword units",
      "Self-Attention Mechanism: Analyzed the mathematical framework of Scaled Dot-Product Attention, where Query, Key, and Value vectors enable the model to focus on relevant contextual dependencies.",
      "Multi-Head Attention: Explored how parallel attention heads allow models like Mistral-7B to simultaneously capture diverse linguistic and logical relationships",
    ],
    tags: ["Transformer", "attention", "Byte Pair Encoding", "Multi-Head Attention"],
    status: "complete",
    year: "2024–2025",
  },
];
