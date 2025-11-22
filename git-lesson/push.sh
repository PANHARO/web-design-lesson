#!/bin/bash

read -p "Enter the message: " message

# git add
git add .

# commit 
echo "The value of message: $message"
git commit -m "$message"

# git push origin depends on branch 
CURRENT_BRANCH=main
git push origin $CURRENT_BRANCH


#push 