// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                  ║
// ║   ████████╗██╗  ██╗██╗███████╗    ██╗███████╗                    ║
// ║   ╚══██╔══╝██║  ██║██║██╔════╝    ██║██╔════╝                    ║
// ║      ██║   ███████║██║███████╗    ██║███████╗                    ║
// ║      ██║   ██╔══██║██║╚════██║    ██║╚════██║                    ║
// ║      ██║   ██║  ██║██║███████║    ██║███████║                    ║
// ║      ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝╚══════╝                    ║
// ║                                                                  ║
// ║   ██╗   ██╗ ██████╗ ██╗   ██╗██████╗                            ║
// ║   ╚██╗ ██╔╝██╔═══██╗██║   ██║██╔══██╗                           ║
// ║    ╚████╔╝ ██║   ██║██║   ██║██████╔╝                           ║
// ║     ╚██╔╝  ██║   ██║██║   ██║██╔══██╗                           ║
// ║      ██║   ╚██████╔╝╚██████╔╝██║  ██║                           ║
// ║      ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝                           ║
// ║                                                                  ║
// ║   ███████╗██╗██╗     ███████╗    ██╗                             ║
// ║   ██╔════╝██║██║     ██╔════╝    ██║                             ║
// ║   █████╗  ██║██║     █████╗      ██║                             ║
// ║   ██╔══╝  ██║██║     ██╔══╝      ╚═╝                             ║
// ║   ██║     ██║███████╗███████╗    ██╗                             ║
// ║   ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝                             ║
// ║                                                                  ║
// ║   Edit the two functions below to build your AI app.             ║
// ║   Everything else is already wired up for you.                   ║
// ║                                                                  ║
// ╚══════════════════════════════════════════════════════════════════╝

/**
 * getSystemPrompt() — Defines WHO the AI is and HOW it should behave.
 *
 * This is the "persona" of your AI. Change this to make the AI act
 * like anything you want: a chef, a tutor, a poet, a code reviewer,
 * a fitness coach, a travel guide, a therapist, a pirate...
 *
 * IDEAS:
 *   - "You are a senior code reviewer. Review code for bugs, style, and performance."
 *   - "You are a creative writing coach. Help users improve their stories."
 *   - "You are a meal planner. Create weekly meal plans based on dietary needs."
 *   - "You are a startup pitch coach. Give feedback on business pitches."
 *   - "You are a language tutor for Spanish. Teach through conversation."
 *   - "You are a debate partner. Argue the opposite side of any position."
 */
export function getSystemPrompt(): string {
  return 'You are a helpful AI assistant. Respond clearly and concisely.';
}

/**
 * getUserPrompt(input) — Transforms the user's raw input before sending to AI.
 *
 * The `input` parameter is whatever the user typed in the text box.
 * You can wrap it, add instructions, format it, or combine it with
 * other context to shape what the AI actually receives.
 *
 * IDEAS:
 *   - Add format instructions: `Respond in bullet points: ${input}`
 *   - Add constraints: `In under 100 words, ${input}`
 *   - Add context: `Given that the user is a beginner, ${input}`
 *   - Parse structured input: split input by lines, treat first line as topic
 *   - Chain prompts: ask the AI to think step-by-step
 */
export function getUserPrompt(input: string): string {
  return input;
}
