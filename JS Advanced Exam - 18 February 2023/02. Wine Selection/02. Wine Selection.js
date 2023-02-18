class WineSelection {
    constructor(space) {
        this.space = Number(space);
        this.wines = [];
        this.bill = Number(0);
    }

    reserveABottle (wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            name: wineName,
            type: wineType,
            price: price,
            paid: 'false'
        })

        this.space = Number(this.space) - 1;

        // console.table(this.wines);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;

    }

    payWineBottle( wineName, price ) {
        let wine = this.wines.find(w => w.name == wineName);

        if(!wine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if(wine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        wine.paid = 'true';
        // console.log(wine);

        this.bill = Number(this.bill) + Number(price);
        return `You bought a ${wineName} for a ${price}$.`;

    }

    openBottle(wineName) {

        // console.table(this.wines);
        // console.table(this.wines);
        let wine = this.wines.find(w => w.name == wineName);

        if(!wine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if(wine.paid == 'false') {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        let index = this.wines.indexOf(wine);
        this.wines.splice(index, 1); 

        // console.log(index)
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {

        // console.log(wineType);
        
        if(wineType == undefined) {
            let message = [];
            // console.table(this.wines);


            let emptySlots = Number(this.space);
            message.push(`You have space for ${emptySlots} bottles more.`);
            message.push(`You paid ${this.bill}$ for the wine.`);

            let sortedwines = this.wines.sort((a, b) => a.name.localeCompare(b.name));
            // console.table(sortedwines);

            let list = [];

            for (const wine of sortedwines) {
                // list.push(this.wines.filter(wine => wine.type == wineType));
                // console.log(wine);

                let paid = '';
                if(wine.paid == 'true') {
                    paid = 'Has Paid';
                } else {
                    paid = 'Not Paid';

                }

                message.push(`${wine.name} > ${wine.type} - ${paid}.`);
            }
            return message.join('\n');

        }

        if(wineType != undefined) {
            // console.log(this.wines.type);

            let list = [];

            for (const wine of this.wines) {
                list.push(this.wines.filter(wine => wine.type == wineType));

                let paid = '';
                if(wine.paid == 'true') {
                    paid = 'Has Paid';
                } else {
                    paid = 'Not Paid';

                }

                return `${wine.name} > ${wine.type} - ${paid}.`;
            }

                

            
        } else {
            throw new Error(`There is no ${wineType} in the cellar.`)
        }

    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));


// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
