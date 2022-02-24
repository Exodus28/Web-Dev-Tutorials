var player1 = {name:"Jaz", Score: 1000, rank: 1};
var player2 = {name: "Jak", Score: 10000, rank: 5};
console.log(player1.name);
console.log(player2.rank);
function PlayerDetails() {
    console.log(this.name + ' ' + "has a rank of"+ ' ' +
                this.rank+ ' ' + "and score of" + ' ' + this.Score);
}
player1.logDetails = PlayerDetails;
player2.logDetails = PlayerDetails;
player1.logDetails();
player2.logDetails();
VM628:3 Jaz
VM628:4 5
VM628:6 Jaz has a rank of 1 and score of 1000
VM628:6 Jak has a rank of 5 and score of 10000
