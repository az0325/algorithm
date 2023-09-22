const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = str.split('').map(item => {
        if(item === item.toLowerCase()) return item.toUpperCase()
        if(item === item.toUpperCase()) return item.toLowerCase()
    })
    console.log(result.join(''))
});