#!/bin/bash
# AI Code Rally — Foundry Sprint welcome script
# Runs on postAttachCommand (when student connects to Codespace)

# ANSI color codes matching AICR brand
ORANGE='\033[38;2;249;115;22m'
GOLD='\033[38;2;251;191;36m'
CYAN='\033[38;2;6;182;212m'
WHITE='\033[38;2;250;249;247m'
DIM='\033[38;2;102;102;102m'
GREEN='\033[38;2;34;197;94m'
RED='\033[38;2;239;68;68m'
BOLD='\033[1m'
RESET='\033[0m'

clear

echo ""
echo -e "${ORANGE}${BOLD}"
echo "     █████╗ ██╗   ██████╗ ██████╗ ██████╗ ███████╗"
echo "    ██╔══██╗██║  ██╔════╝██╔═══██╗██╔══██╗██╔════╝"
echo "    ███████║██║  ██║     ██║   ██║██║  ██║█████╗  "
echo "    ██╔══██║██║  ██║     ██║   ██║██║  ██║██╔══╝  "
echo "    ██║  ██║██║  ╚██████╗╚██████╔╝██████╔╝███████╗"
echo "    ╚═╝  ╚═╝╚═╝   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝"
echo -e "${RESET}"
echo -e "${GOLD}${BOLD}    ══════════  R A L L Y   ══════════${RESET}"
echo -e "${DIM}            Foundry Sprint${RESET}"
echo ""

# Wait a moment for the dev server to be ready
sleep 2

# Status checks
echo -e "  ${WHITE}${BOLD}Status${RESET}"
echo -e "  ${DIM}──────────────────────────────────────${RESET}"
echo ""

# Check dev server
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null | grep -q "200\|304"; then
  echo -e "  ${GREEN}■${RESET} ${WHITE}App running${RESET} ${DIM}— preview panel on the right${RESET}"
else
  echo -e "  ${GOLD}■${RESET} ${WHITE}App starting${RESET} ${DIM}— preview will open when ready${RESET}"
fi

# Check API key
if [ -n "$ANTHROPIC_API_KEY" ]; then
  echo -e "  ${GREEN}■${RESET} ${WHITE}API key set${RESET} ${DIM}— ready to go${RESET}"
else
  echo -e "  ${RED}■${RESET} ${WHITE}No API key${RESET}"
  echo -e "    ${DIM}Go to github.com > Settings > Codespaces > Secrets${RESET}"
  echo -e "    ${DIM}Add ${WHITE}ANTHROPIC_API_KEY${DIM}, then rebuild this Codespace${RESET}"
fi

# Check Claude Code
if command -v claude &> /dev/null; then
  echo -e "  ${GREEN}■${RESET} ${WHITE}Claude Code installed${RESET}"
else
  echo -e "  ${RED}■${RESET} ${WHITE}Claude Code not found${RESET} ${DIM}— run: npm i -g @anthropic-ai/claude-code${RESET}"
fi

echo ""
echo -e "  ${DIM}──────────────────────────────────────${RESET}"
echo ""
echo -e "  ${WHITE}${BOLD}To start building, type:${RESET}"
echo ""
echo -e "    ${ORANGE}${BOLD}claude${RESET}"
echo ""
echo -e "  ${DIM}Tell it what you want to build.${RESET}"
echo -e "  ${DIM}It will write the code for you.${RESET}"
echo ""
