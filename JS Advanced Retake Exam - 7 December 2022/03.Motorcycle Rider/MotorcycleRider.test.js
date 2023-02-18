const { assert, expect } = require("chai");   
let motorcycleRider = require("./MotorcycleRider");      //name function and file

describe("MotorcycleRider test", function() { //name function
    describe("licenseRestriction Test", () => {  //every method - describe
        it("Invalid data", () => { //change name
            expect(() => motorcycleRider.licenseRestriction("vfcvgdfAM").to.throw(" Invalid Information!")); //for error
        });

        it("valid data", () => { //change name
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."); //without error
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."); //without error
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18."); //without error
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24."); //without error
        });
     });

     describe("motorcycleShowroom Test", () => {  //every method - describe
        it("Invalid data", () => { //change name
            expect(() => motorcycleRider.motorcycleShowroom([100,200], 'a').to.throw(" Invalid Information!")); //for error
            expect(() => motorcycleRider.motorcycleShowroom('b', 500).to.throw(" Invalid Information!")); //for error
            expect(() => motorcycleRider.motorcycleShowroom([], 500).to.throw(" Invalid Information!")); //for error
            expect(() => motorcycleRider.motorcycleShowroom([100,200], 30).to.throw(" Invalid Information!")); //for error
            expect(() => motorcycleRider.motorcycleShowroom('a', 'b').to.throw(" Invalid Information!")); //for error
        });

        it("Input data", () => { //change name
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 700)).to.equal("There are 3 available motorcycles matching your criteria!"); //without error
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 600)).to.equal("There are 3 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 400)).to.equal("There are 2 available motorcycles matching your criteria!");
        });
     });

     describe("otherSpendings Test", () => {  //every method - describe
        it("Input data - invalid", () => { //change name
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 'b').to.throw("Invalid information!")); //for error
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil', true).to.throw("Invalid information!")); //for error
            expect(() => motorcycleRider.otherSpendings('helmet', ['engine oil', 'oil filter'], true).to.throw("Invalid information!")); //for error
        });

        it("Input data", () => { //change name
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!"); //without error
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal("You spend $600.00 for equipment and consumables!"); //without error
        });
     });
});