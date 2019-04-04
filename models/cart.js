const db = require('./conn');


class Cart {
    constructor(id, item_name, user_id, inventory_id) {
        this.id = id,
        this.itemName= item_name,
        this.userId= user_id,
        this.inventoryId = inventory_id

    }
}

module.exports= Cart;