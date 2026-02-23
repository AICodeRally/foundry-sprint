#!/bin/bash
# Foundry Sprint — Codespace welcome script

clear

echo ""
echo "  ╔═══════════════════════════════════════════════════════════╗"
echo "  ║                                                           ║"
echo "  ║   ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ ██████╗ ██╗   ██╗  ║"
echo "  ║   ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝  ║"
echo "  ║   █████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║██████╔╝ ╚████╔╝   ║"
echo "  ║   ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║██╔══██╗  ╚██╔╝    ║"
echo "  ║   ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║   ██║     ║"
echo "  ║   ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝   ╚═╝     ║"
echo "  ║                                                           ║"
echo "  ║              AI Code Rally — Sprint Mode                  ║"
echo "  ║                                                           ║"
echo "  ╚═══════════════════════════════════════════════════════════╝"
echo ""

# Step 1: App status
echo "  Step 1: Your app is running on port 3000"
echo "          (The dev server started automatically)"
echo ""

# Step 2: Preview
echo "  Step 2: Open the preview"
echo "          Click the 'Ports' tab below, then click the globe icon on port 3000"
echo ""

# Step 3: API key check
echo -n "  "
if [ -n "$ANTHROPIC_API_KEY" ]; then
  echo "Step 3: API key detected — you're ready to build!"
else
  echo "Step 3: No API key found"
  echo "          Go to github.com > Settings > Codespaces > Secrets"
  echo "          Add ANTHROPIC_API_KEY, then rebuild this Codespace"
fi
echo ""

# Divider
echo "  ---------------------------------------------------------"
echo ""
echo "  Start building with Claude Code:"
echo ""
echo "       claude"
echo ""
echo "  Just type 'claude' and tell it what you want to build."
echo "  It already knows about your project and will guide you."
echo ""
echo "  ---------------------------------------------------------"
echo ""
