// Bring in the databas connection. 
const db = require('./conn');
const bcrypt = require('bcryptjs');


// Need a User class. 
class User {

    constructor (id, first_name, last_name, email, password) {
    // in python we say self, in js we say this. 
    this.id = id;
    this.firstName = first_name;
    this.lastName = last_name; 
    this.email = email;
    this.password = password; 
 }

    // static means that function in something
    // the class can do, but an instance cannot. 
    static getById(id) {
        // .any always return an array
        // Instead, we'll use .one 
        return db.one(`select * from users where id = ${id}`)
            .then((userData)=> {
                const userInstance = new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.password); 
                console.log(userInstance)
                return userInstance;
            })
            .catch(() => {
                return null; // signal an invalid value 
            })
    }
    static getAll() {
        return db.any(` select * from users`)
        .then((arrayOfUsers) => {
            return arrayOfUsers
        })
    }

    // a user can post an item from the inventory
    static 





    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10); 
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash; 

    }
    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    }




    // no "static" since this is an "instance method"
    // it belongs to the individual instance 
    save() {
        // use. result when you might want a report about how many rows got affected
        return db.result(`
        
        update users set
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            email='${this.email}',
            password='${this.password}' 
            
        where id=${this.id}
        `)
    }

}


// export my User model
module.exports = User; 