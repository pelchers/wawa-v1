# AI Assistant Preferences

## Terminal Command Formatting

1. **Shell Preference**: PowerShell
   - All command examples should be formatted for PowerShell
   - Use PowerShell-specific syntax and conventions
   - Include PowerShell-specific flags and parameters

Example PowerShell commands:
```powershell
# Directory navigation
Set-Location .\client\src

# File operations
Copy-Item .\source.txt .\destination.txt
Get-Content .\file.txt

# Git operations
git add .
git commit -m "feat: update feature"
git push
```

## Command Output Format

1. **No Automatic Terminal Execution**
   - Commands should be provided as copy-pasteable snippets only
   - Do not use the run_terminal_cmd tool unless explicitly requested
   - Format all command examples in code blocks with appropriate syntax highlighting

Example format for providing commands:
```powershell
# Command 1
New-Item -ItemType Directory -Path ".\new-folder"

# Command 2
Set-Location .\new-folder
```

## Response Formatting

1. **Command Block Structure**
   - Use PowerShell syntax highlighting
   - Separate multiple commands into individual blocks
   - Include comments for complex commands
   - Group related commands together

2. **Documentation**
   - Include brief explanations when needed
   - Note any PowerShell-specific considerations
   - Highlight any potential permission requirements

Example response structure:
```powershell
# Create new directory
New-Item -ItemType Directory -Path ".\project"
```

```powershell
# Navigate and initialize git
Set-Location .\project
git init
```

```powershell
# Configure git and create initial commit
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "initial commit"
``` 