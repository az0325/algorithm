// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
// let x = input.shift().split(' ').map(Number)[0];
// let y = input.shift().split(' ').map(Number)[0];

// if (x > 0) {
//     if (y > 0) console.log(1)
//     else console.log(4)
// } else {
//     if (y > 0) console.log(2)
//     else console.log(3)
// }


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > 0 && num2 > 0) {
        console.log(1);
    } else if (num1 < 0 && num2 > 0) {
        console.log(2);
    } else if (num1 < 0 && num2 < 0) {
        console.log(3);
    } else if (num1 > 0 && num2 < 0) {
        console.log(4);
    }

    process.exit();
});