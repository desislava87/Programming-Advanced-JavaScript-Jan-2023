const { assert, expect } = require("chai");   
let findNewApartment = require("./findApartment");      //name function and file

describe("findNewApartment test", function() { //name function
    describe("isGoodLocation Test", () => {  //every method - describe
        it("Input data - string", () => { //change name
            expect(() => findNewApartment.isGoodLocation(1, true).to.throw('Invalid input!')); //for error
        });

        it("Input data - boolean", () => { //change name
            expect(() => findNewApartment.isGoodLocation('Sofia', 1).to.throw('Invalid input!')); //for error
        });

        it("Input data - Sofia, true", () => { //change name
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!'); //without error
        });

        it("Input data - Varna, true", () => { //change name
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!'); //without error
        });

        it("Input data - Plovdiv, true", () => { //change name
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!'); //without error
        });

        it("Input data - other, true", () => { //change name
            expect(findNewApartment.isGoodLocation('abc', true)).to.equal('This location is not suitable for you.'); //without error
        });

        it("Input data - Varna, false", () => { //change name
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.'); //without error
        });
     });

     describe("isLargeEnough Test", () => {  //every method - describe
        it("Input data", () => { //change name
            expect(() => findNewApartment.isLargeEnough([], 20)).to.throw('Invalid input!'); //for error
        });

        it("Input data", () => { //change name
            expect(() => findNewApartment.isLargeEnough(20, 20)).to.throw('Invalid input!'); //for error
        });

        it("Input data", () => { //change name
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'abc')).to.throw('Invalid input!'); //for error
        });

        it("Input data - return", () => { //change name
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal(`50, 60`); //without error
        });
     });

     describe("isItAffordable Test", () => {  //every method - describe
        it("Input data - price string", () => { //change name
            expect(() => findNewApartment.isItAffordable('abc', 20).to.throw('Invalid input!')); //for error
        });

        it("Input data - price 0", () => { //change name
            expect(() => findNewApartment.isItAffordable(0, 20).to.throw('Invalid input!')); //for error
        });

        it("Input data - price < 0", () => { //change name
            expect(() => findNewApartment.isItAffordable(-5, 20).to.throw('Invalid input!')); //for error
        });

        it("Input data - budget string", () => { //change name
            expect(() => findNewApartment.isItAffordable(10, 'abc').to.throw('Invalid input!')); //for error
        });

        it("Input data - budget 0", () => { //change name
            expect(() => findNewApartment.isItAffordable(10, 0).to.throw('Invalid input!')); //for error
        });

        it("Input data - budget < 0", () => { //change name
            expect(() => findNewApartment.isItAffordable(10, -5).to.throw('Invalid input!')); //for error
        });

        it("Input data - buy", () => { //change name
            expect(findNewApartment.isItAffordable(10, 20)).to.equal(`You can afford this home!`); //without error
        });

        it("Input data - not buy", () => { //change name
            expect(findNewApartment.isItAffordable(20, 10)).to.equal(`You don't have enough money for this house!`); //without error
        });
     });
});