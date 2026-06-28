//! git / github


//* github,gitlab,bitbucket-> A cloud-based hosting platform for Git repositories



//* git
//? A distributed(no single server) version control system-> history tracking
//? for multiple users working on same project
//? branching->multiple task at a same time

//! git commands 
//? config

//* git config --global --list -> helps to see which change is made by which user
//* git config --global user.name "<user_name">;
//* git config --global user.email "<user_email">;
//* git config --global init.defaultbranch "main";

//! repository/ repo
//? local repo -> git initialized and history is tracked
//? remote repo-> github lab where local repo is tracked


//! git working flow
//* changes seen in:
//? working directory  -> staging area    -> local repo        ->remote repo 
//? changes               ready state     new version/commiy
// if change in working directory ,we cannot directly commit it, need to take it to the ready state i.e staging area and then to local repo for commit

//! initialize empty local repo
//* git init-> current folder initialize -> .git is initialize inside the folder which remains hidden
// if .git is unknowingly deleted, whole folder will be deleted 
// //? ls -a

//* git status -> gives the current state of the file whether it is added or not

//* git add <file_path>
//? if all files should be added to staging state of a folder we use -> git add . 


//* git commit -m "<commit_messages>"-> takes the staging area file to local repo
//every change is new version
a

//* git push origin <branch_name>


//?local to remote
//* git remote -v -> list remote repo 
//* git remote add origin <remote_repo_url> 
//? origin is variable and can be any
//* git remote remove origin

//! branch
//* git branch
//* git branch <branch_name>

//* git switch <branch_name> --- to jump from one branch to another
//* git switch -c <branch_name>
//* git merge <branch_name> ---- for eg , merging the (new_branch)login branch to main branch 

//* git stash  -- locally stored temporarily in cache memory - like completed the task but want to keep
//hiii
//jiiii
//* git stash list --- how many changes are in stash , it gives lists
//* git stash pop --- it brings out the changes that got hide when using git stash
//* git log --- history check (to stop click Q)
//* git log --oneline

//! merge conflict
//?A merge conflict happens in Git when two changes can't be combined automatically


//!rebase 
//git rebase<>
//main: A -> B -> c -> D -> G -> H
// feature ;           D -> E-> F // merge
//feature :            G' -> H' -> E -> F // rebase

//! cherry-pick <commit_hash> --- it will help in choosing one commit from multiple new commit branch in merge cases using hash (git log --oneline)
//main: A -> B -> c -> D 
// fix ;               D -> E-> F -> G // merge

//* PR -> pull request  -- github       if   git ( MR)


//? main -> production 
//? develop -> integration branch ---- merge is always done in develop not with main
//? hotfix -> emergency bug fix // hotfix/login
//? feature -> feature/login

