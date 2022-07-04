'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    let text = document.querySelector('textarea').value;
    let rows = text.split('\n');

    for (let [i, row] of rows.entries()) {
        let [firstHalf, secondHalf] = row.toLowerCase().trim().split('_');

        let output = `${firstHalf}${secondHalf.replace(
            secondHalf[0],
            secondHalf[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

/*  test Data
    underscore_case
    first_name
    Some_Variable
    calculate_AGE
    delayed_departure
*/

// Extra
let input = prompt('type input here.');
// let input = "sahil parsaniya";
let output, iparr;
if (input.includes(' ')) {
    iparr = input.split(' ');
    output = handleSpace(...iparr);
} else {
    iparr = input.split('_');
    output = handleUS(...iparr);
}

function transform(str) {
    let tmp = [];
    if (str[0].toUpperCase() === str[0]) {
        for (let i = 0; i <= str.length - 1; i++) {
            if (i % 2 !== 0) {
                tmp.push(str[i].toUpperCase());
            } else {
                tmp.push(str[i].toLowerCase());
            }
        }
    }
    if (str[0].toUpperCase() !== str[0]) {
        for (let i = 0; i <= str.length - 1; i++) {
            if (i % 2 !== 0) {
                tmp.push(str[i].toLowerCase());
            } else {
                tmp.push(str[i].toUpperCase());
            }
        }
    }
    return tmp.join('');
}

function handleUS(...iparr) {
    for (let i = 0; i <= iparr.length - 1; i++) {
        if (iparr[i].includes(' ')) {
            iparr[i] = iparr[i].split(' ');
            iparr[i] = handleSpace(...iparr[i]);
        } else {
            iparr[i] = transform(iparr[i]);
        }
    }
    return iparr.join(' ');
}

function handleSpace(...iparr) {
    for (let i = 0; i <= iparr.length - 1; i++) {
        if (iparr[i].includes('_')) {
            iparr[i] = iparr[i].split('_');
            iparr[i] = handleUS(...iparr[i]);
        } else {
            iparr[i] = transform(iparr[i]);
        }
    }
    return iparr.join('_');
}

console.log(output);