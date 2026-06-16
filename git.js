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


//* git push origin <branch_name>


//?local to remote
//* git remote -v -> list remote repo 
//* git remote add origin <remote_repo_url> 
//? origin is variable and can be any
//* git remote remove origin

