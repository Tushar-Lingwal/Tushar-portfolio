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
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        max_tokens: 300,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return NextResponse.json({ error: err }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });

  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}