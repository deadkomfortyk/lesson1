let path = require('path');
const readline = require("readline");
let os = require('os');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter the absolute path', (answer => {
    console.log(answer);
    console.log(path.extname(answer));
    console.log(path.basename(answer));
    console.log(os.type());
}));