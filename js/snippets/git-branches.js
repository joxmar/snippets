export const gitBranches = {
  name: 'Git Branches',
  cats: ['git', 'github'],
  language: 'generic',
  snippet: `
# Check existing branches:
git branch

# Create a new branch:
git branch new-branch-name

# Switch to the new branch:
git checkout new-branch-name

# Create and switch branch shortcode
git checkout -b new-branch-name


# Check which branches have been merged to master
git branch --merged master

#################################
# Merge branches into master:
#################################
# switch to master
git checkout master
# Pull the latest changes from the remote master branch
git pull origin master 
#Merge your branch into master:
git merge your-branch-name 
# push branch to remote
git push origin master
`,
};
