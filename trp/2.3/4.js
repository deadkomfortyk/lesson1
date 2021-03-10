let say = require('say');
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let rand = Math.round(Math.random() + 1);
rl.question('enter 2 or 1', answer => {

    if (answer == rand){
        console.log('you win');
        say.speak('you win');
    }
    else if (Number.parseInt(answer)!=1 && Number.parseInt(answer)!=2){
        console.log('incorrect number' + answer);
        say.speak('incorrect number');
    }
    else {
        console.log('you loose');
        say.speak('you loose');
    }
});