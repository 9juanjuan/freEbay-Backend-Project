const db = require('./conn');




class Claimed {
    constructor(id, score, inventory_id, user_id) {
        this.id= id,
        this.score= score,
        this.inventoryId= inventory_id,
        this.user_id= user_id
    }



}

module.exports= Claimed;