// Add your Groq API key to .env as: VITE_GROQ_API_KEY=your_key_here
// Get a free key at console.groq.com

export type GroqMessage = { role: "user" | "assistant"; content: string };

export async function askSAIBot(conversationHistory: GroqMessage[]): Promise<string> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are SAI-Bot, the enthusiastic official assistant for SAITED 2026, one of Indias largest school-based K-12 STEM festivals hosted by SAI International School, Bhubaneswar. Only answer questions about SAITED 2026. Be helpful, energetic, and concise. Keep responses under 3 sentences unless a list is needed. Key facts: Event date is 25th November 2026, 9AM to 7PM IST, at SAI International School Campus Bhubaneswar. Theme: Innovation Beyond Boundaries. Events: Tech Fair, Aeromodelling, CODEx Gaming Lab, Start-Up Park, Med Talk, ENERGIZE, Crime Forensics, Math Maze, Minute Matters, Science Serenade, Science Spell Bee, Eureka. Open to Class 1 to 12 from any school. SAITED has been running since 2016. Past guests include NASA Astronaut Jack Fischer and ISRO Astronaut Group Captain Shubhanshu Shukla. Over 7000 students participate annually from 36 plus schools. If asked anything unrelated to SAITED, say: I am only trained to help with SAITED 2026 queries!",
        },
        ...conversationHistory,
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return (data as { choices: { message: { content: string } }[] }).choices[0].message.content;
}
