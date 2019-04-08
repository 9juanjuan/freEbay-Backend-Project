const db = require('./conn');




class Claimed {
    constructor(id, item_name, category, price, content) {
        this.id = id,
        this.itemName= item_name,
        this.category=category, 
        this.price= price
        this.content= content
    }

    static getAll() {
        return db.any(`select * from claimed`)
            .then((arrayOfInventory) => {
                return arrayOfInventory.map((inventoryData) => {
                    // console.log(reviewData);
                    const claimedItem = new Claimed(
                        inventoryData.id,
                        inventoryData.item_name,
                        inventoryData.category,
                        inventoryData.price,
                        inventoryData.content
                    );
                    // console.log(aInventory);
                    return claimedItem;
                });
            });
    } 
}

module.exports= Claimed;