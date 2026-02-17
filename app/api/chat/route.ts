import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Tushar Lingwal's portfolio assistant. You answer questions about Tushar concisely and professionally.

About Tushar:
- M.Tech in AI & ML at NIT Uttarakhand
- Specializes in LLM evaluation, prompting strategy research, and reasoning depth analysis
- Built: LLM Evaluation Framework, Blind Man Guide (YOLOv8 + IoT), AI Supply Chain Risk Analyzer, Geo-CoT LLM System
- ML Intern at FuelCab India — built supply chain risk pipeline, LSTM demand forecasting (RMSE 0.12)
- Achievements: National Technothon 2nd place, CodeChef Global Rank 977
- Skills: Python, PyTorch, LangChain, GPT-4/Claude/Gemini, YOLOv8, FastAPI, Docker
- Open to: research collaborations, ML engineering roles, AI consulting
- Contact: tushar@nit.ac.in | github.com/tusharlingwal | linkedin.com/in/tusharlingwal

Keep answers short (2-4 sentences). If asked something you don't know about Tushar, say you're not sure but suggest contacting him directly.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  const data = await response.json();
  return NextResponse.json({
    reply: data.content[0].text,
  });
}