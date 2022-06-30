'use strict';

///////////////////////////////////////////////////
//Coding Challenge-1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let [players1, players2] = game.players;
console.log(players1, players2);

let [gk, ...fieldplayers] = players1;
console.log(`${gk} \n${fieldplayers}`);

let allPlayers = [...players1, ...players2];
console.log(allPlayers);

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

var { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Extra
//1 merge objects
var conditions = {
    rain: false,
};
var activeGame = {...game, ...conditions};

//2 pass arrays to function arguments
console.log(activeGame);
let goals = [2,3,9];
const average = function(...arr){
    for(let i=0; i<arr.length; i++){
        var sum = arr[i];
    }
    return sum/arr.length;
}

//3 Concatenate arrys
let goals2 = [3, 1, 5];
const goalsThisSeason = [...goals, ...goals2];
console.log(goalsThisSeason);
console.log(average(...goalsThisSeason));

//4  deconstructing arrays/copying full/portion of arrays
let [firstMatch, ...otherMatches] = goalsThisSeason;
console.log(firstMatch + "\t\t" + otherMatches);

//5 copying full/partial objects
let copy = {...game.odds};
console.log(copy);
