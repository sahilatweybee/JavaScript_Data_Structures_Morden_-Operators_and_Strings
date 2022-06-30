'use strict';

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

for (let [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

var odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) { average += odd; }
average /= odds.length;
console.log(`\n${average}\n`);

for (let [team, odd] of Object.entries(game.odds)) {
    let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
let scorers = {};
for(let j of game.scored.entries()){
    scorers[j] ? scorers[j]++ : (scorers[j] = 1);
}
console.log(scorers);