# Pre-Requist 
  1. install git (git -v)
  2. set up account with 
      Github 
      Gitlab
      BitBucket
  3. GH --> Github CLI (gh version)


# working asd collaborative or collaboration
  git --> branch 

# Type of VCS (Version Control System / Software)
1. Local VCS
2. Centralize VCS 
3. Distributed VCS (git)

non-linear ==> branch system 

# The 3 states of Git 
1. The working tree
2. Stage Area 
3. Git Directory

## Git Basic 
1. git config --global user.name="Sokcheatsrorng"
2. git config --global user.email="sokcheatsrorng@gmail.com" 
3. git config --list

# verify acccount github with gh
1. gh auth login 
   --> choose Github.com
   --> choose HTTPs 
   --> Verify code with web browser
# command for add project into git 
==> In condition you init the new repository 
   git init 
   git add . //at all files and if you want to add specific file you can use: git add filename
   git commit -m "message" 
   git remote add origin https://reposity.git 
   git push origin {branch}
 

===> In condition you have exisiting git repository
  git add . 
  git commit -m "message"
  git push origin {branch}

### Using gh to create git repository 
   gh repo create https://github.com/CheatDev07/short-course-test1.git --public


### clone project 
  git clone https://github.com/TheOdinProject/javascript-exercises.git
   
  gh repo clone TheOdinProject/javascript-exercises

## clear cache in git
  git rm -r --cached . 


## renew name of origin 
git remote rename <old-remote-name> <new-remote-name>