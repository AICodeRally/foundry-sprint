# Foundry Sprint - Starter Template

This is your hackathon project. It is a working Next.js app pre-wired with the Anthropic Claude API. Your job is to turn it into something creative by editing **one file**: `lib/prompt.ts`.

## Getting Started

### Option A: GitHub Codespace (Recommended)

1. Click the green **Code** button on the repo, then **Codespaces > Create codespace on main**
2. Wait for the container to build (about 2 minutes the first time)
3. The dev server starts automatically on port 3000
4. Open the forwarded port to see your app

### Option B: Local Development

```bash
# Install dependencies
npm install

# Copy the env file and add your API key
cp .env.example .env.local
# Edit .env.local and set ANTHROPIC_API_KEY=your-key-here

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What to Modify

Open **`lib/prompt.ts`** — this is the only file you need to edit. It has two functions:

### `getSystemPrompt()`

Defines the AI's persona and behavior. This is where you tell Claude WHO it is.

```ts
// Example: Turn it into a code reviewer
return 'You are a senior code reviewer. Analyze code for bugs, performance issues, and style problems. Be direct and specific.';
```

### `getUserPrompt(input)`

Transforms the user's input before sending it to Claude. Add formatting, constraints, or context.

```ts
// Example: Add structure to the response
return `Review the following code and provide feedback in three sections:
1. Bugs found
2. Performance improvements
3. Style suggestions

Code:
${input}`;
```

## Project Structure

```
lib/prompt.ts          <-- YOUR FILE (edit this!)
app/page.tsx           <-- Main page (input + output panels)
app/api/generate/      <-- API route (calls Claude)
components/            <-- UI components
```

## Track Ideas

Here are some directions you can take your project:

- **Code Tools** - Code reviewer, bug finder, refactoring assistant, test generator
- **Writing** - Story generator, email composer, resume builder, tweet crafter
- **Education** - Language tutor, math explainer, study guide maker, quiz generator
- **Business** - Pitch coach, meeting summarizer, email responder, proposal writer
- **Creative** - Poem generator, recipe inventor, game master, joke writer
- **Analysis** - Data interpreter, pros/cons analyzer, research summarizer

## Demo Day Tips

- Have a clear 30-second pitch for what your app does
- Show a live demo with a real example
- Explain what makes your prompt engineering interesting
- Mention any edge cases you handled

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** + **Tailwind CSS v4**
- **Anthropic Claude API** (claude-sonnet-4-20250514)

## Troubleshooting

**"Failed to generate response"** - Check that your `ANTHROPIC_API_KEY` is set in `.env.local`

**Port 3000 in use** - Run `npm run dev -- -p 3001` to use a different port

**Types not working** - Run `npx tsc --noEmit` to check for TypeScript errors
