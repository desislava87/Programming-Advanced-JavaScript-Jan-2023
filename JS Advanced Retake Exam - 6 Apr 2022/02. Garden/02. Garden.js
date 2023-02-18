class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        plantName = String(plantName);
        spaceRequired = Number(spaceRequired);

        if(this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            name: plantName,
            spaceRequired: spaceRequired,
            ripe: 'false',
            quantity: 0
        })

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);
        let plant = this.plants.find(p => p.name == plantName);

        if(plant) {
            if(plant.ripe !== 'false') {
                throw new Error(`The ${plantName} is already ripe.`)
            }

            if(quantity <= 0) {
                throw new Error(`The quantity cannot be zero or negative.`)
            }

            plant.ripe = 'true';
            plant.quantity = Number(plant.quantity) + Number(quantity);

            if(quantity == 1) {
                return `${quantity} ${plantName} has successfully ripened.`
            }

            if(quantity > 1) {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        } else {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.name == plantName);

        if(!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(plant.ripe == 'false') {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.spaceAvailable = Number(this.spaceAvailable) + Number(plant.spaceRequired);

        this.storage.push({
            name: plantName,
            quantity: plant.quantity
        })

        let index = this.plants.indexOf(plant);
        this.plants.splice(index, 1); 

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {

        let information = [];
        information.push(`The garden has ${this.spaceAvailable} free space left.`);

        let plantsNameInGarden = [];

        for (const plant of this.plants) {
            plantsNameInGarden.push(plant.name);
            
        }
        let sortedNames = plantsNameInGarden.sort((a, b) => a.localeCompare(b));

        information.push(`Plants in the garden: ${sortedNames.join(', ')}`);

        if(this.storage.length == 0) {
            information.push(`Plants in storage: The storage is empty.`);
        } else {

            let storageInfo = [];

            for (const plant of this.storage) {
                storageInfo.push(`${plant.name} (${plant.quantity})`);
            }
            information.push(`Plants in storage: ${storageInfo.join(', ')}`);
        }

        return information.join('\n');


    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('raspberry', 10));

// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());