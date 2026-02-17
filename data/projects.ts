export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  github?: string;
  demo?: string;
  category: "research" | "systems" | "applied";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "llm-eval-framework",
    title: "LLM Evaluation Framework",
    description:
      "A structured benchmarking system for comparative analysis of large language models across reasoning depth, factual accuracy, and instruction-following dimensions.",
    longDescription:
      "Designed and implemented a multi-dimensional evaluation pipeline that assesses LLMs on 8 distinct cognitive task categories. Incorporates automated prompt generation, response parsing, and statistical scoring with reproducible benchmark reports.",
    stack: ["Python", "LangChain", "OpenAI API", "Pandas", "FastAPI", "Docker"],
    github: "https://github.com/tusharlingwal",
    category: "research",
    featured: true,
  },
  {
    id: "blind-man-guide",
    title: "Blind Man Guide",
    description:
      "Real-time assistive navigation system combining YOLOv8-based object detection with IoT hardware for obstacle identification and spatial audio feedback.",
    longDescription:
      "Built an edge-deployed computer vision system on Raspberry Pi that achieves 18fps obstacle detection. Integrates ultrasonic sensors with directional audio cues, reducing navigation error by 40% in structured environments.",
    stack: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi", "IoT", "TensorFlow Lite"],
    github: "https://github.com/tusharlingwal",
    category: "systems",
    featured: true,
  },
  {
    id: "supply-chain-risk",
    title: "AI Supply Chain Risk Analyzer",
    description:
      "ML pipeline for predictive risk scoring in supply chain networks using graph neural networks and time-series anomaly detection.",
    longDescription:
      "Developed during internship at FuelCab India. Processes 50K+ daily transactions to surface disruption signals. GNN-based supplier network analysis identifies cascading failure risk with 82% precision at a 7-day forecast horizon.",
    stack: ["Python", "PyTorch", "NetworkX", "scikit-learn", "PostgreSQL", "FastAPI"],
    github: "https://github.com/tusharlingwal",
    category: "applied",
    featured: true,
  },
  {
    id: "geo-cot-llm",
    title: "Geo-CoT LLM System",
    description:
      "Geospatial Chain-of-Thought reasoning system that guides LLMs through structured geographic problem decomposition for location-aware inference tasks.",
    longDescription:
      "Research system investigating how explicit geographic context injection and spatial reasoning scaffolds improve LLM performance on location-based QA by 23% over vanilla prompting baselines.",
    stack: ["Python", "GPT-4", "LangChain", "GeoPandas", "PostGIS", "Streamlit"],
    github: "https://github.com/tusharlingwal",
    category: "research",
  },
  {
    id: "fuelcab-analytics",
    title: "ML Internship Analytics Platform",
    description:
      "Data-driven analytics dashboard and automated anomaly detection pipeline built during ML internship, processing real-time operational data.",
    longDescription:
      "End-to-end ML pipeline from data ingestion to dashboard delivery. Implemented LSTM-based demand forecasting (RMSE: 0.12), automated data quality checks, and interactive visualization layer for business stakeholders.",
    stack: ["Python", "LSTM", "Plotly", "Airflow", "Redis", "Docker"],
    github: "https://github.com/tusharlingwal",
    category: "applied",
  },
];
