---
name: commit
description: ALWAYS use this skill when creating git commits. Creates thoughtful commits with clear titles and evidence-based bullet points explaining why changes were made and how the need was identified.
allowed-tools:
  - tool: Bash
    prompt: run git commands
  - tool: AskUserQuestion
    prompt: ask which files to commit
---

# Commit Skill

Create a git commit with a clear, thoughtful message.

## Commit Message Format

```
<clear title in imperative mood>

Why:
- Reason for the change
- Problem being solved
- Technical/business justification

How I knew:
- Evidence that led to this change
- Observations or data
- Specific symptoms or triggers

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

## Workflow

### 1. Analyze Changes
Run in parallel:
- `git status`
- `git diff`
- `git log --oneline -5`

### 2. Ask Which Files to Commit
Use AskUserQuestion with multiSelect=true to ask which files to include.

Example:
```
question: "Which files should be included in this commit?"
header: "Files"
multiSelect: true
options:
  - label: "path/to/file.ts"
    description: "Brief summary of changes"
```

### 3. Draft Commit Message
- Title: Imperative mood, under 72 chars
- Why: 2-4 bullets explaining purpose
- How I knew: 2-4 bullets with evidence

### 4. Stage Selected Files
- Stage ONLY files user selected
- Use `git add <filename>` for each file
- Never use `git add .` or `git add -A`

### 5. Create Commit
Use heredoc format:

```bash
git commit -m "$(cat <<'EOF'
<title>

Why:
- <reason>
- <reason>

How I knew:
- <evidence>
- <evidence>

EOF
)"
```

### 6. Verify
Run `git status` to confirm success.

## Safety Rules

Never:
- Use `--no-verify` or skip hooks
- Use `--amend` (unless user explicitly requests it)
- Use `git add .` or `git add -A`
- Commit sensitive files (.env, credentials, etc.)

If pre-commit hook fails:
1. Fix the issue
2. Re-stage files
3. Create NEW commit (not --amend unless requested)
