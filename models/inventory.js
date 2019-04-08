const db = require('./conn');


class Inventory {

    constructor(id, item_name, category, price, content) {
        this.id = id,
        this.itemName= item_name,
        this.category=category, 
        this.price= price
        this.content= content
    }

    static getOne(id) {
        return db.one(` select * from inventory where id= ${id}`)
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
        return db.any(`select * from inventory`)
            .then((arrayOfInventory) => {
                return arrayOfInventory.map((inventoryData) => {
                    // console.log(reviewData);
                    const anItem = new Inventory(
                        inventoryData.id,
                        inventoryData.item_name,
                        inventoryData.category,
                        inventoryData.price,
                        inventoryData.content
                    );
                    // console.log(aInventory);
                    return anItem;
                });
            });
    } 
    static claimed(itemName, category, price, content) {
        return db.none(`insert into claimed (item_name, category, price, content)
                        values ('${itemName}', '${category}', '${price}','${content})`)
    }


}

module.exports= Inventory;