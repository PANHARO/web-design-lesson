# Pre-Requist
```
    1. install git (git -v)
    2. set up account with
        Github
        Gitlab
        BitBucket
    3. GH --> Github CLI (gh version)
```
# working asd collaborative or collaboration
    git --> branch
# type of VCS (Version Control System / Software)
1. Local VCS
2. Centralized VCS
3. Distributed VCS
```
non linear--> branch system
```
# The 3 stages of GIT
1. The working tree
2. The staging area
3. The Git directory

# Git Basic
1.  git config --global user.name “tara.kit”
2. git config --global user.email “tarakit@gmail.com”
3. git config --list

```
# verify account github with gh
```
1. gh auth login 
   --> choose Github.com
   --> choose HTTPs 
   --> Verify code with web browser
```

# command for add project into git
==> In condition you init the new repository
```
    git init
    git add. //at all files and if you want to add specific
    file you can use: git add filename
    git commit - "message"
    git remote add origin https://repository.git
    git push origin {branch}
```

====> In condition you have existing repository
```
    git add . 
    git commit -m "message"
    git push origin {branch}
```

### Using gh to create git repository
```
    gh repo create https://github.com/PANHARO/short-course.git --public
```
