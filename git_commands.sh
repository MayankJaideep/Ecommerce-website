#!/bin/bash
# Git Command Sequence for E-Commerce Data Project
# Run these commands manually in your terminal after generating the data files

# Step 1: Initialize a new Git repository
git init

# Step 2: Add all generated files to staging
git add ecom_data_generator.py sqlite_ingest.py top_customers_query.sql README.md git_commands.sh

# Step 3: Create initial commit
git commit -m "Initial commit: E-commerce data generation and database ingestion scripts"

# Step 4: Create main branch (if not already on main)
git branch -M main

# Step 5: Add remote repository
# Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual values
# git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Step 6: Push to remote repository
# git push -u origin main

# Note: Before running steps 5 and 6, you need to:
# 1. Create a new repository on GitHub (https://github.com/new)
# 2. Copy the repository URL
# 3. Replace the placeholder in the 'git remote add origin' command above
# 4. Uncomment and run the last two commands

echo "Git repository initialized!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Copy the repository URL"
echo "3. Run: git remote add origin YOUR_REPO_URL"
echo "4. Run: git push -u origin main"
