const { assert, expect } = require("chai");   
let movieTheater = require("./03. MovieTheater");      //name function and file

describe("Movie Theater test", function() { //name function
    describe("ageRestrictions Test", () => {  //every method - describe

        it("Input data - G", () => { //change name
            expect(movieTheater.ageRestrictions("G")).to.equal('All ages admitted to watch the movie'); //without error
        });

        it("Input data - PG", () => { //change name
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers'); //without error
        });

        it("Input data - R", () => { //change name
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian'); //without error
        });

        it("Input data - NC-17", () => { //change name
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie'); //without error
        });

        it("Input data - other", () => { //change name
            expect(movieTheater.ageRestrictions('param')).to.equal('There are no age restrictions for this movie'); //without error
        });
     });
     
    describe("moneySpent Test", () => {  //every method - describe
        it("Input data - 1st par", () => { //change name
            expect(() => movieTheater.calcPriceOfBook('a', ['Nachos', 'Popcorn'], ['Soda', 'Water']).to.throw('Invalid input')); //for error
        });

        it("Input data - 2nd par", () => { //change name
            expect(() => movieTheater.calcPriceOfBook(4, 'Nachos', ['Soda', 'Water']).to.throw('Invalid input')); //for error
        })

        it("Input data - 3th par", () => { //change name
            expect(() => movieTheater.calcPriceOfBook(4, ['Nachos', 'Popcorn'], 'Soda').to.throw('Invalid input')); //for error
        })

        it("Input data - with discount", () => { //change name
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 59.60'); //without error
        });

        
        it("Input data - without discount", () => { //change name
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 29.50'); //without error
        });
     });    
     
    describe("reservation Test", () => {  //every method - describe

        it("equal - 2", () => { //change name
            expect(movieTheater.reservation([
                { rowNumber: 1, freeSeats: 2 },
                { rowNumber: 2, freeSeats: 2 },
              ],
              1)).to.equal(2); //without error
        });

        it("Input data - 1st par", () => { //change name
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 'a').to.throw('Invalid input')); //for error
        })

        it("Input data - 2nd par", () => { //change name
            expect(() => movieTheater.reservation([{ rowNumber: 1}, { rowNumber: 2}]).to.throw('Invalid input'), 3); //for error
        })

        it("Input data - seats not a number", () => { //change name
            expect(() => movieTheater.reservation([{ rowNumber: 'a'}, { rowNumber: 'b'}], 3).to.throw('Invalid input')); //for error
        })

        it("Input data - negative number", () => { //change name
            expect(() => movieTheater.reservation([{ rowNumber: -5}, { rowNumber: -2}], 3).to.throw('Invalid input')); //for error
        })
     });
});