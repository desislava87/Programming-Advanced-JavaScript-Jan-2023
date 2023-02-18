const { assert, expect } = require("chai");   
let chooseYourCar = require("./chooseYourCar");     

describe("Choose Your Car test", function() {
    describe("choosingType Test", () => { 
        it("Input data - year < 1900", () => { 
            expect(() => chooseYourCar.choosingType("Sedan", 'red', 1880).to.throw('Invalid Year!')); 
        });

        it("Input data - year > 2022", () => { //change name
            expect(() => chooseYourCar.choosingType("Sedan", 'red', 2025).to.throw('Invalid Year!')); //for error
        });

        it("Input data - different type from Sedan", () => { //change name
            expect(() => chooseYourCar.choosingType("Combi", 'red', 2018).to.throw('This type of car is not what you are looking for.')); //for error
        });

        it("The picked car with year equal 2010", () => { //change name
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.'); //without error
        });

        it("The picked car with year = 2015", () => { //change name
            expect(chooseYourCar.choosingType('Sedan', 'red', 2015)).to.equal('This red Sedan meets the requirements, that you have.'); //without error
        });

        it("The picked car with year = 2009", () => { //change name
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.'); //without error
        });
     });

     describe("brandName Test", () => {  //every method - describe

        it("Remove brand", () => { //change name
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 0)).to.equal('Toyota, Peugeot'); //without error
        });

        it("Invalid data - brands is not array", () => { //change name
            expect(() => chooseYourCar.brandName(0, 0).to.throw('Invalid Information!')); //for error
        });

        it("Invalid data - index is not a number", () => { //change name
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], "BMW").to.throw('Invalid Information!')); //for error
        });

        it("Invalid data - index is not in range", () => { //change name
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 10).to.throw('Invalid Information!')); //for error
        });

        it("Invalid data - index <0>", () => { //change name
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], -10).to.throw('Invalid Information!')); //for error
        });
     });

     describe("carFuelConsumption Test", () => {  //every method - describe

        it("km/100 > 7", () => { //change name
            expect(chooseYourCar.carFuelConsumption(700, 65)).to.equal('The car burns too much fuel - 9.29 liters!'); //without error
        });

        it("km/100 < 7", () => { //change name
            expect(chooseYourCar.carFuelConsumption(1000, 65)).to.equal('The car is efficient enough, it burns 6.50 liters/100 km.'); //without error
        });

        it("km/100 = 7", () => { //change name
            expect(chooseYourCar.carFuelConsumption(1000, 70)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.'); //without error
        });

        it("Not number ", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption('a', 70).to.throw('Invalid Information!')); //for error
        });

        it("Not number ", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption(1000, 'b').to.throw('Invalid Information!')); //for error
        });

        it("negative number ", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption('a', -70).to.throw('Invalid Information!')); //for error
        });

        it("negative number ", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption(-1000, 'b').to.throw('Invalid Information!')); //for error
        });

        it("number=0 ", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption('a', 0).to.throw('Invalid Information!')); //for error
        });

        it("number =0", () => { //change name
            expect(() => chooseYourCar.carFuelConsumption(0, 'b').to.throw('Invalid Information!')); //for error
        });
     });
});