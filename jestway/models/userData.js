const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
           // this.n = this.n + 1;
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    // Method to clear all users
    removeOneUser() {
        if ( this.users.length > 0 ) {
            return this.users.pop();
        }else{
            return null
        }       
    }


    // Method to clear all users
    getUserCount() {
        return this.users.length;
    }

    // Method to clear all users
    clearUsers() {
        this.users = [];
    }

    //function remove tool users
    removeTwoUser() {
        this.removeOneUser();
        this.removeOneUser();     
    }
}

module.exports = UserData;