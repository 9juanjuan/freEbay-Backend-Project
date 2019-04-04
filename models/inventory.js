const db = require('./conn');


class Inventory {

    constructor(id, item_name, category, price, content) {
        this.id = id,
        this.itemName= item_name,
        this.category=category, 
        this.price= price
        this.content= content
    }

    static getOne() {
        return db.one(` select * from inventory where id= ${this.id}`)
        .then((oneItem) => {
            const anItem = new Inventory(
                oneItem.id,
                oneItem.item_name,
                oneItem.category,
                oneItem.price,
                oneItem.content
            );
            return anItem;
        })
    }


    static getAll() {
        return db.any(` select * from users`)
        .then((arrayOfUsers) => {
            return arrayOfUsers
        })
    } 



}

module.exports= Inventory;