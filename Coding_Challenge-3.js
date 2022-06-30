const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

let events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(`\n${gameEvents}\n`);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

for(let [key, value] of gameEvents){
    let half = key <= 45 ? 'FIRST' :'SECONND';
    console.log(`[${half} HALF]${key}: ${value}`);
}