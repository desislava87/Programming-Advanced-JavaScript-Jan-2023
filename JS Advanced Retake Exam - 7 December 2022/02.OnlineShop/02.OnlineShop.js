class OnlineShop {

    countSell = 0;
	constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace <= spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        } 

        this.warehouseSpace -= spaceRequired;
        this.products.push({product, quantity});
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {

        let productCheck = this.products.find((p) => p.product == product);
        if(!productCheck) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            return `The quantity cannot be zero or negative.`;
        }

        if (productCheck.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        }

        if (productCheck.quantity < minimalQuantity) {
            let difference = Number(minimalQuantity) - Number(productCheck.quantity);
            productCheck.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    
    sellProduct(product) {
        let productCheck = this.products.find((p) => p.product == product);

        if (!productCheck) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        productCheck.quantity = Number(productCheck.quantity) - 1;
        this.countSell += 1;
        return `The ${product} has been successfully sold.`

    }

    revision() {
        let result = [];

        if(this.countSell == 0) {
            throw new Error(`There are no sales today!`);
        } else {
            result.push(`You sold ${this.countSell} products today!`);
        }

        result.push('Products in the warehouse:');
        for (const key in this.products) {
            result.push(`${this.products[key].product}-${this.products[key].quantity} more left`);
        }

        return result.join("\n");
    }
}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
 

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

