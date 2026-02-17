export interface Achievement {
  id: string;
  title: string;
  org: string;
  description: string;
  year: string;
  icon: "trophy" | "code" | "academic" | "star";
  metric?: string;
}

export const achievements: Achievement[] = [
  {
    id: "technothon",
    title: "National Technothon — 2nd Place",
    org: "National Level Competition",
    description:
      "Secured 2nd position among 200+ teams in a national-level technology innovation competition for the Blind Man Guide assistive navigation system.",
    year: "2023",
    icon: "trophy",
    metric: "Top 1%",
  },
  {
    id: "codechef",
    title: "CodeChef Global Rank 977",
    org: "CodeChef",
    description:
      "Achieved Global Rank 977 in competitive programming, demonstrating strong algorithmic problem-solving and data structures proficiency.",
    year: "2023",
    icon: "code",
    metric: "Rank 977",
  },
  {
    id: "mtech-excellence",
    title: "M.Tech Academic Excellence",
    org: "NIT Uttarakhand",
    description:
      "Maintaining strong academic performance in M.Tech AI & ML program while conducting independent research in LLM evaluation systems.",
    year: "2023–Present",
    icon: "academic",
    metric: "Active",
  },
  {
    id: "research-contrib",
    title: "Open Source Research Contributions",
    org: "GitHub",
    description:
      "Published reproducible evaluation frameworks, prompting experiment codebooks, and ML pipeline utilities as open-source research artifacts.",
    year: "2024",
    icon: "star",
    metric: "Public Repos",
  },
];
