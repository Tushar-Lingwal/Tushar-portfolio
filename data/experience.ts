export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  type: "internship" | "research" | "academic";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "fuelcab-ml-intern",
    role: "Machine Learning Intern",
    org: "FuelCab India",
    period: "2023",
    location: "Remote / India",
    type: "internship",
    highlights: [
      "Built end-to-end ML pipeline for supply chain risk scoring processing 50K+ daily operational records",
      "Implemented LSTM-based demand forecasting model achieving RMSE of 0.12 on held-out test set",
      "Designed automated data quality monitoring system flagging anomalies before model ingestion",
      "Delivered interactive analytics dashboard using Plotly and Streamlit for non-technical stakeholders",
      "Collaborated with cross-functional team to translate business KPIs into model evaluation criteria",
    ],
  },
  {
    id: "mtech-research",
    role: "M.Tech Research Scholar",
    org: "NIT Uttarakhand",
    period: "2023 – Present",
    location: "Srinagar, Uttarakhand",
    type: "research",
    highlights: [
      "Conducting primary research in LLM evaluation methodologies under faculty supervision",
      "Designing multi-dimensional benchmarking framework for comparative LLM analysis",
      "Investigating reasoning depth and prompting strategy effects on model performance",
      "Developing reproducible evaluation harness with structured documentation protocols",
      "Contributing to academic discussions on AI safety metrics and model calibration",
    ],
  },
];
