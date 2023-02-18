class Triathlon {
    constructor(competitionName) {
        this.competitionName = String(competitionName);
        this.participants = {}; //name:gender
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender) {
        participantName = String(participantName);
        participantGender = String(participantGender);

        // let addParticipant = this.participants.find(p => p.name == participantName);

        if(this.participants[participantName]) {
            return `${participantName} has already been added to the list`;
        }

        if(!this.participants[participantName]) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }

    completeness (participantName, condition) {
        participantName = String(participantName);
        condition = Number(condition);

        // let checkParticipant = this.participants.find(p => p.name == participantName);

        if(!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if(this.participants[participantName] && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        let countDiscipline = Math.floor(condition / 30);

        if(countDiscipline <= 2) {
            return `${participantName} could only complete ${countDiscipline} of the disciplines`;
        } else if (countDiscipline === 3) {
            let participantGender = this.participants[participantName];
            this.listOfFinalists.push({
                name: participantName,
                gender: participantGender
            });
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding (participantName) {
        participantName = String(participantName);
        let completed = this.listOfFinalists.some(
            (finalist) => finalist.name === participantName
          );

        if (!completed) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }

    showRecord (criteria) {

        let finalistByGender = this.listOfFinalists.filter((g) => g.gender === criteria);

        if(this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        if(criteria === 'male' || criteria === 'female') {
            if(!finalistByGender) {
                return `There are no ${participantGender}'s that finished the competition`;
            }
        }

        if(criteria === 'all') {
        let arrName = [];
          for (const finalist of this.listOfFinalists) {
                arrName.push(finalist.name);
          }

            let sortedFinalists = arrName.sort((a, b) => a.localeCompare(b));
          let result = [`List of all ${this.competitionName} finalists:`];

            for (const name of sortedFinalists) {
                result.push(name);
            }
    
          return result.join("\n");
        }
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));









    