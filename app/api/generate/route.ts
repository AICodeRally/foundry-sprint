import Anthropic from '@anthropic-ai/sdk';
import { getSystemPrompt, getUserPrompt } from '@/lib/prompt';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: 'Input is required' },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: getSystemPrompt(),
      messages: [
        {
          role: 'user',
          content: getUserPrompt(input),
        },
      ],
    });

    const textBlock = message.content.find((block) => block.type === 'text');
    const output = textBlock ? textBlock.text : '';

    return NextResponse.json({ output });
  } catch (error) {
    console.error('Generate error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
