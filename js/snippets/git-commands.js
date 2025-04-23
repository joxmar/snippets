export const gitCommands = {
  name: 'Git Commands',
  cats: ['git', 'github'],
  language: 'generic',
  snippet: `
#download exiting repo
git clone repo-url

# create local project as repo and upload to empty repo in github
# also change main to master 
git init
git branch -M master
git remote add origin repo-url
git add . && git commit -m "Initial Push" && git push origin master
git branch --set-upstream-to=origin/master master

# get latest repo version from github into local
git pull

#add file to stage
git add file.name

# Add all files to stage
git add .

# commit to repo
git commit -m "message about updates"

#push to github
git push origin master

#add, commit and push short version
git add . && git commit -m "message about updates" && git push origin master
`,
};
