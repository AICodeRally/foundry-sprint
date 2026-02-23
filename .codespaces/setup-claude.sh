#!/bin/bash
# Pre-configure Claude Code so students skip the first-run setup entirely.
# Runs during postCreateCommand (container build time).

mkdir -p ~/.claude

# Pre-create the user config to skip onboarding prompts
cat > ~/.claude.json <<'CONFIG'
{
  "numStartups": 1,
  "hasCompletedOnboarding": true,
  "installMethod": "global",
  "autoUpdates": false,
  "theme": "dark-ansi",
  "preferredNotifChannel": "terminal"
}
CONFIG

# Create a minimal settings file to set permissions to accept-all
# so students aren't prompted for tool approvals
mkdir -p ~/.claude
cat > ~/.claude/settings.json <<'SETTINGS'
{
  "permissions": {
    "allow": [
      "Bash(*)",
      "Read(*)",
      "Write(*)",
      "Edit(*)",
      "Glob(*)",
      "Grep(*)",
      "WebFetch(*)",
      "WebSearch(*)"
    ],
    "deny": []
  }
}
SETTINGS

echo "Claude Code pre-configured for Foundry Sprint"
