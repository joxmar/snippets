export const gitCommands2 = {
  name: 'More Git Commands',
  cats: ['git', 'github'],
  language: 'generic',
  snippet: `
# Applies a specific commit from one branch to another.
# Bug fixed in a branch, need only that fix in master.
git cherry-pick &lt;commit-hash&gt;

# Shows everything you did, even deleted commits.
git reflog

# undo the last commit but keep the changes in the working directory
git reset --soft HEAD~1

# undo the last commit and discard the changes in the working directory
git reset --hard HEAD~1

# Creates a new commit that undoes a previous commit.
git revert &lt;commit-hash&gt;

# Shows who changed which line and when.
git blame /path/to/file.js

# Powerful inspection of history
git log --graph --oneline --decorate --all

# create release tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
`,
};
