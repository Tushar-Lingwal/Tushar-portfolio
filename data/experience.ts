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
      "Built end-to-end ML pipeline for recommendation system",
      "Team lead for the project group",
      "Designed automated data quality monitoring system flagging anomalies before model ingestion",
      "Team member monitoring and progress tracking among the project",
      "Collaborated with cross-functional team for model evaluation criteria",
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
    ],
  },
];
