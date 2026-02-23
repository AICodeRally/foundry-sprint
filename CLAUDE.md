# Foundry Sprint — AI App Starter

You are helping a student build an AI-powered web app during a hackathon sprint.
They may have little or no coding experience. Keep suggestions simple, explain changes clearly, and focus on one thing at a time.

## Project Overview

This is a Next.js app that takes user input, sends it to Claude via an API route, and displays the response. The student's goal is to customize it into a unique AI app.

## Key Files (in order of importance)

1. **`lib/prompt.ts`** — START HERE. This is where students define their AI's personality and behavior. The two functions:
   - `getSystemPrompt()` — Defines WHO the AI is (e.g., "You are a study planner...")
   - `getUserPrompt(input)` — Defines HOW user input is formatted before sending to the AI

2. **`components/InputForm.tsx`** — The input form. Students can add fields, dropdowns, or change the placeholder text.

3. **`components/OutputPanel.tsx`** — The output display. Students can format results as lists, tables, or cards.

4. **`app/page.tsx`** — The main page layout. Change the app title, description, and overall look.

5. **`app/api/generate/route.ts`** — The API route (advanced). Adjust model parameters or add multi-step processing.

## How to Help

- When the student says what kind of app they want to build, modify `lib/prompt.ts` first
- Suggest a clear system prompt that defines the AI's role and expertise
- Suggest a user prompt template that structures the input effectively
- Only change UI components if the student asks, or if the prompt changes require new input fields
- Keep explanations short and non-technical
- After making changes, tell the student to try it out in the preview

## Competition Tracks

Students are competing in one of these tracks:
- **Campus AI** — Apps that solve problems for students, faculty, or campus life
- **Startup AI** — Apps that could become a real product or business
- **Replace the Intern** — Apps that automate tedious work tasks

## Demo Requirements

- Working input/output (must produce real AI responses)
- 3-minute demo limit
- Live demo (no pre-recorded)
- Be ready to explain what was changed in `lib/prompt.ts` and why

## Tech Stack

- Next.js 16 (React framework)
- TypeScript
- Tailwind CSS v4
- Anthropic Claude API (`@anthropic-ai/sdk`)

## Rules

- Do NOT install additional packages unless the student specifically asks
- Do NOT restructure the project or add complexity
- Do NOT touch `next.config.ts`, `tsconfig.json`, or `postcss.config.mjs`
- Keep all changes within the existing file structure
- If the student is stuck, suggest prompt engineering improvements first before code changes
