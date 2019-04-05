const db = require('./conn');


class Selling {
    constructor(id, item_name, category, content) {
        this.id = id,
        this.itemName= item_name,
        this.category= category,
        this.content = content

    }

    static postNewItem(itemName, category, content) {
        return db.none(`insert into selling (item_name, category, content)
                        values ('${itemName}', '${category}', '${content}')`)
                // .then((itemData) => {
                //     const item = 
                //     new Selling(
                //         itemData.id, 
                //         itemData.itemName, 
                //         itemData.category, 
                //         itemData.content
                //     );
                //     console.log(item);
                //     return item;
                ;
            }

    static getAll() {
        return db.any(`select * from selling`)
            .then((arrayOfSelling) => {
                return arrayOfSelling.map((SellingData) => {
                    // console.log(reviewData);
                    const anItem = new Selling(
                        SellingData.id,
                        SellingData.item_name,
                        SellingData.category,
                        SellingData.content
                    );
                return anItem;
                });
            });
    } 
}
    


module.exports = Selling;