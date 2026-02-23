# AICR Foundry Sprint - Starter Template

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/AICodeRally/foundry-sprint?quickstart=1)

> Click the badge above to launch your development environment. No setup required.

Your starting point for building an AI-powered app in a hackathon sprint.

## Quick Start

### Option A: GitHub Codespace (Recommended)

1. Click the **"Open in GitHub Codespaces"** badge above
2. Wait for the container to build (about 60 seconds)
3. The dev server starts automatically at port 3000
4. Open the browser preview when prompted

### Using Claude Code (Your AI Coding Assistant)

Once your Codespace is running, type this in the terminal:

```
claude
```

That's it. Claude Code already knows about your project. Tell it what kind of app you want to build and it will help you modify the code.

**Example prompts to try:**
- "I want to build a study planner that creates weekly schedules"
- "Make this into a resume bullet point generator"
- "Help me build an app that summarizes legal contracts"

Claude will start by modifying `lib/prompt.ts` — the file that controls your AI's personality and behavior.

### Option B: Local Development

```bash
# Clone the repo
git clone <your-repo-url>
cd foundry-sprint

# Install dependencies
npm install

# Copy the env file and add your API key
cp .env.example .env.local
# Edit .env.local and set ANTHROPIC_API_KEY

# Start the dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## What to Modify

### 1. Prompts (Start Here!)

Open **`lib/prompt.ts`** — this is the most important file. It controls:

- **System Prompt**: Defines who your AI is and how it behaves
- **User Prompt**: Defines how user input gets formatted before sending to the AI

Change these two functions to transform the starter into YOUR app.

### 2. UI Components (Optional)

- **`components/InputForm.tsx`** — The input area. Add more fields, dropdowns, or file upload.
- **`components/OutputPanel.tsx`** — The output display. Format results as tables, lists, or cards.
- **`app/page.tsx`** — The main page layout. Change the title and description.

### 3. API Route (Advanced)

- **`app/api/generate/route.ts`** — The backend. Adjust model parameters, add multi-step processing, or integrate other APIs.

## How It Works

```
User types input
    |
    v
InputForm sends POST /api/generate
    |
    v
route.ts calls Claude with your prompts from lib/prompt.ts
    |
    v
OutputPanel displays the AI response
```

## Competition Tracks

- **Campus AI** — Apps that solve problems for students, faculty, or campus life
- **Startup AI** — Apps that could become a real product or business
- **Replace the Intern** — Apps that automate tedious work tasks

## Demo Requirements

- Working input/output (the app must produce real AI responses)
- 3-minute demo limit (practice your pitch!)
- Live demo (pre-recorded demos are not accepted)
- Be ready to explain WHAT you changed in `lib/prompt.ts` and WHY

## Tips for Winning

1. **Pick a specific problem.** "AI study planner for biology majors" beats "general AI helper."
2. **Nail the prompt engineering.** The difference between good and great is in `lib/prompt.ts`.
3. **Show, don't tell.** Judges want to see a working demo, not slides.
4. **Think about the user.** Who uses this? What's their workflow? Why is this better than ChatGPT?
5. **Polish the output.** Format the AI response nicely. Use the OutputPanel to make it readable.

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework
- [TypeScript](https://www.typescriptlang.org) — Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first styling
- [Anthropic Claude](https://docs.anthropic.com) — AI model API

## Need Help?

- Type `claude` in the terminal to get AI coding assistance
- Ask your event organizers or mentors
- Check the [Anthropic docs](https://docs.anthropic.com/en/docs/build-with-claude/overview)
- Look at the example prompts in `lib/prompt.ts` for inspiration
