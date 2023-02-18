class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}; //peak’s name and its altitude
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        peak = String(peak);
        altitude = Number(altitude);

        if(this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike (peak, time, difficultyLevel) {
        peak = String(peak);
        time = Number(time);
        difficultyLevel = String(difficultyLevel);

        if(!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } 
        
        if (this.goals[peak] &&  this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }
        let usedResources = Number(time) * 10
        let difference = Number(this.resources) - usedResources;

        if (difference < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {
            this.resources -= usedResources;

            this.listOfHikes.push({peak, time, difficultyLevel});
            return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`;
        }
    }

    rest(time) {
        time = Number(time);
        let addTime = time * 10;

        this.resources += addTime;

        if(this.resources >= 100) {
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${addTime}% resources`;
        }
    }

    showRecord(criteria) {
        criteria = String(criteria);
        let list;

        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if(criteria === 'easy' || criteria === 'hard') {
            list = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);
            let shortedList = list.sort((a,  b) => a.time - b.time);
            let bestHike = shortedList[0];


      
            if(bestHike) {
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
            } else {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        }

        if(criteria === 'all') {
            list = this.listOfHikes;
            let message = ['All hiking records:'];

            for (const hike of this.listOfHikes) {
                message.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            }

            return message.join('\n');
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

//Testing showRecord
// const Hike = result;
// let newHike = new Hike('Vili');

// assert.equal(newHike.addGoal("Musala", 2925), "You have successfully added a new goal - Musala");
// assert.equal(newHike.hike("Musala", 8, "hard"), "You hiked Musala peak for 8 hours and you have 20% resources left");
// assert.equal(newHike.showRecord("easy"), "Vili has not done any easy hiking yet"); ok
// assert.equal(newHike.addGoal("Vihren", 2914), "You have successfully added a new goal - Vihren");
// assert.equal(newHike.hike("Vihren", 4, "hard"), "You don't have enough resources to complete the hike");
// assert.equal(newHike.showRecord("hard"), "Vili's best hard hike is Musala peak, for 8 hours"); ok
// assert.equal(newHike.addGoal("Rui", 1706), "You have successfully added a new goal - Rui");
// assert.equal(newHike.hike("Rui", 3, "easy"), "You don't have enough resources to complete the hike");
// assert.equal(newHike.showRecord("all"), "All hiking records:\nVili hiked Musala for 8 hours"); ok

//Testing showRecord
// const Hike = result;
let newHike = new SmartHike('Vili');

newHike.addGoal("Musala", 2925);
newHike.hike("Musala", 8, "hard");
console.log(newHike.showRecord("easy"));
newHike.addGoal("Vihren", 2914);
newHike.hike("Vihren", 4, "hard");
console.log(newHike.showRecord("hard"));
newHike.addGoal("Rui", 1706);
newHike.hike("Rui", 3, "easy");
console.log(newHike.showRecord("all"));


