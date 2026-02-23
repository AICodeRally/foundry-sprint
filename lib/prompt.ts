/**
 * ╔══════════════════════════════════════════════════╗
 * ║  THIS IS YOUR FILE — MODIFY THIS!               ║
 * ║                                                  ║
 * ║  Change the prompts below to build your AI app.  ║
 * ║  The system prompt defines WHO your AI is.       ║
 * ║  The user prompt defines HOW it processes input. ║
 * ╚══════════════════════════════════════════════════╝
 */

/**
 * The system prompt tells the AI who it is and how to behave.
 * This is sent with every request and sets the personality/expertise.
 *
 * Examples:
 * - "You are a study planner that creates weekly schedules based on course load..."
 * - "You are a resume bullet point generator that turns job descriptions into achievements..."
 * - "You are a contract summarizer that extracts key terms and obligations..."
 * - "You are a meal prep assistant that generates grocery lists and recipes for the week..."
 */
export function getSystemPrompt(): string {
  return `You are a helpful AI assistant. Replace this with your own system prompt!

Ideas:
- "You are a study planner that creates weekly schedules based on course load..."
- "You are a resume bullet point generator that turns job descriptions into achievements..."
- "You are a contract summarizer that extracts key terms and obligations..."`;
}

/**
 * The user prompt wraps the user's input before sending it to the AI.
 * Use this to add structure, instructions, or formatting to the request.
 *
 * The 'input' parameter is whatever the user typed in the text box.
 *
 * Examples:
 * - Add format instructions: "Respond as a numbered list..."
 * - Add context: "The user is a college student looking for..."
 * - Add constraints: "Keep your response under 200 words..."
 */
export function getUserPrompt(input: string): string {
  return `Here is the user's request:\n\n${input}\n\nPlease respond helpfully.`;
}
