#!/bin/bash
# Push the first commit to GitHub
# Run this from your terminal where GitHub credentials are configured

cd "$(dirname "$0")"

# Reset remote to HTTPS (in case SSH was tried)
git remote set-url origin https://github.com/JDaniel-NeoSleuth/react-native-recurrly.git

echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo "✅ Successfully pushed to GitHub!"
  echo "🗑️  You can now delete this script: rm push-to-github.sh"
else
  echo "❌ Push failed. Make sure you're authenticated with GitHub."
  echo "   Options:"
  echo "   - Use GitHub CLI: gh auth login"
  echo "   - Use a Personal Access Token: git remote set-url origin https://<TOKEN>@github.com/JDaniel-NeoSleuth/react-native-recurrly.git"
  echo "   - Use SSH: gh auth setup-git"
fi
