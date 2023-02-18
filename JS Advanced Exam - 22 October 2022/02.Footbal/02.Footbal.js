class footballTeam {
    constructor(clubName, country) {
        this.clubName = String(clubName);
        this.country = String(country);
        this.invitedPlayers = [];
    }

    newAdditions(footbalPlayers) {
        let nameArr = [];
        for (const playerInfo of footbalPlayers) {
            let [name, age, playerValue] = playerInfo.split("/");

            age = Number(age);
            playerValue = Number(playerValue);
            let player = this.invitedPlayers.find(p => p.name == name);


            if(!player) {
                this.invitedPlayers.push({ name, age, playerValue });
            }

            if(player && player.playerValue < playerValue) {
                player.playerValue = playerValue;
            }
        }

        for (const player of this.invitedPlayers) {
            nameArr.push(player.name)
        }
        return `You successfully invite ${nameArr.join(', ')}.`;

    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(player && player.playerValue > playerOffer) {
            let priceDifference = Number(player.playerValue) - Number(playerOffer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(player && player.age < age) {
            let ageDifference = Number(age) - Number(player.age);

            if(ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else if(ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            } 

        }else if(player && player.age > age) {
            return `${name} is above age limit!`;
        } 
    }

    transferWindowResult() {
        let message = [];

        message.push("Players list:");
        for (const player of this.invitedPlayers) {
            message.push(`Player ${player.name}-${player.playerValue}`);
        }
        return message.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));

