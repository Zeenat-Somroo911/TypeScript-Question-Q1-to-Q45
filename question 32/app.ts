let current_users: string[] = ["user1","areej","user3","user4","user5"];
let new_users: string[] =["user1","user6","user7","ateej","user9"];
new_users .forEach(newUser => {
    if (current_users.some(currentUser =>currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log("${newUser} will need to enter a new user name.");    }
});  
console.log("${newUser} is available.");
}