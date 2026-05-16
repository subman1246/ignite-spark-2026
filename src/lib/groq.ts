export type GroqMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are SAI-Bot, the enthusiastic official assistant for SAITED 2026 — one of India's largest school-based K-12 STEM festivals hosted by SAI International School, Bhubaneswar. Only answer questions about SAITED 2026. Be helpful, energetic, and concise. Keep responses under 3 sentences unless a list is needed. Key facts: Event date is 25th November 2026, 9AM-7PM IST, at SAI International School Campus Bhubaneswar. Theme: Innovation Beyond Boundaries. Events: Tech Fair, Aeromodelling, CODEx Gaming Lab, Start-Up Park, Med Talk, ENERGIZE, Crime Forensics, Math Maze, Minute Matters, Science Serenade, Science Spell Bee, Eureka. Open to Class 1-12 from any school. SAITED has been running since 2016. Past guests include NASA Astronaut Jack Fischer and ISRO Astronaut Group Captain Shubhanshu Shukla. Over 7000 students participate annually from 36+ schools. If asked anything unrelated to SAITED, say: I am only trained to help with SAITED 2026 queries!`;

export async function askSAIBot(messages: GroqMessage[]): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
  if (!apiKey) throw new Error("VITE_GROQ_API_KEY not set");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  if (!response.ok) throw new Error(`Groq API error: ${response.status}`);
  const data = await response.json();
  return (data as { choices: { message: { content: string } }[] }).choices[0].message.content;
}
