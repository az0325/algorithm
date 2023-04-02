let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [hour, minute] = input.shift().split(' ').map(Number);
const [cook] = input.shift().split(' ').map(Number);

let result = { hour, minute: minute + cook }

if (result.minute >= 60) {
    result = { hour: result.hour + parseInt(result.minute / 60), minute: result.minute % 60 }
}

if (result.hour >= 24) {
    result = { ...result, hour: result.hour - 24 }
}

console.log(result.hour + ' ' + result.minute)