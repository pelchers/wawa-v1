# Git Branch Tracking Information

## Setting Up Branch Tracking

When you use the command:
```
git push -u origin branch-name
```
or
```
git push --set-upstream origin branch-name
```

This sets up tracking between your local branch and the remote branch. What this means:

- Your local branch now "tracks" the remote branch
- You can use simple `git push` and `git pull` commands without specifying the branch name
- Git knows which remote branch to push to or pull from

## Important Notes About Branch Tracking

1. Setting up tracking with `-u` does NOT change the default branch of the repository
2. It only establishes a relationship for your local Git operations
3. This setting is stored in your local Git configuration
4. Each branch can track a different remote branch

## Changing the Default Branch

The default branch (sometimes called the "main" branch) is separate from branch tracking. To change the default branch:

1. Go to your repository on GitHub/GitLab/Bitbucket
2. Navigate to the repository settings
3. Look for "Default branch" or similar setting
4. Change it from the current default (often `main`) to your desired branch

After changing the default branch, new clones of the repository will check out the new default branch automatically.

## Checking Branch Tracking

To see which remote branches your local branches are tracking:
```
git branch -vv
```

## Setting Up a New Main Branch

To create a new main branch from your current state and set it up for tracking:
```
git checkout -b new-main-branch
git push -u origin new-main-branch
```

This creates a new branch and sets it up for tracking, but does not make it the default repository branch. 