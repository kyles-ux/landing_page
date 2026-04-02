import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const customOpenAI = createOpenAI({
  baseURL: "https://9router.vuhai.io.vn/v1",
  apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: customOpenAI("ces-chatbot-gpt-5.4"),
    messages,
  });

  return result.toTextStreamResponse();
}
