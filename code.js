const readlineSync = require('readline-sync');

let diceRolls = parseInt(readlineSync.question('How many times would you like to roll? (Input an integer): '));
let diceRollsScore = 0;
if (diceRolls >= 12) {
    diceRollsScore = -150;
    if (diceRolls >= 30) {
        diceRollsScore = -500;
        if (diceRolls >= 50) {
            diceRollsScore = -10000;
            if (diceRolls >= 100) {
                diceRollsScore = -1000000;
            }
        }
    }
}

let game2 = 'no';
let game3 = 'no';
let score2 = 0;
let score3 = 0;

let leastFavorite = parseInt(readlineSync.question('What is your least favorite number? (Input an integer): '));
let leastFavoriteScore = 0;
if (leastFavorite >= 10) {
    leastFavoriteScore = -50;
} else {
    leastFavoriteScore = 0;
}

let sixtySomething = parseInt(readlineSync.question('6?: '));
let score = 0;
switch (sixtySomething) {
    case 0:
        score = 10;
        break;
    case 1:
        score = 5;
        break;
    case 2:
        score = 3;
        break;
    case 3:
        score = -10;
        console.log(`You suck, here's your new score: ${score}`);
        break;
    case 4:
        score = 20;
        break;
    case 5:
        score = 15;
        break;
    case 6:
        score = -100;
        console.log("Your a horrible person, you don't even deserve to know how this affects your score");
        break;
    case 7:
        score = 12;
        console.log('Ok');
        break;
    case 8:
        score = 7;
        break;
    case 9:
        score = 30;
        console.log('Funny Number');
        break;
    default:
        score = 0;
        console.log('Your boring');
}

score = score + diceRollsScore;
score = score + leastFavoriteScore;

let roll = Math.floor(Math.random() * 6) + 1;
let totalRoll = roll * diceRolls;

console.log(`The Dice Landed On ${roll}`);
console.log(`The Final Roll Is ${totalRoll}`);

if (totalRoll === leastFavorite) {
    console.log('That Sucks');
} else if (roll === leastFavorite) {
    console.log('Close Enough');
    score = score + totalRoll / diceRolls;
} else {
    score = score + totalRoll - diceRolls;
}

if (diceRolls >= 150) {
    score = -1000;
    console.log('Stop trying to get a crazy high score');
}

console.log(`Your score is ${score}`);

if (score >= 85) {
    score = score + 25;
    console.log('Congratulations, you beat the game!');
} else if (score >= 74) {
    console.log('So Close');
} else if (score >= 50) {
    console.log('Great Job');
} else if (score >= 25) {
    console.log('Good Job');
} else if (score >= 0) {
    console.log("Your score is positive, that's something");
} else {
    console.log('Try harder next time...');
}

if (score >= 85) {
    game2 = readlineSync.question('Do you want to play game 2?: ');
}

if (game2 === 'no') {
    console.log('Click clear to restart');
} else {
    score2 = 0;
    let guesses = 10;
    let randomNum = Math.floor(Math.random() * 11);

    if (game2 === 'yes') {
        while (guesses > 0) {
            let userGuess = parseInt(readlineSync.question('What number do you guess?: '));
            guesses = guesses - 1;
            game3 = 'no';
            if (userGuess > randomNum) {
                console.log('Your guess is too high');
                console.log(`Your score is ${score2}`);
                console.log(`You have ${guesses} guesses left`);
            } else if (userGuess < randomNum) {
                console.log('Your guess is too low');
                console.log(`Your score is ${score2}`);
                console.log(`You have ${guesses} guesses left`);
            } else {
                score2 = score2 + 1;
                console.log('You guessed the number');
                console.log(`Your score is ${score2}`);
                console.log(`You have ${guesses} guesses left`);
                randomNum = Math.floor(Math.random() * 11);
                if (guesses === 0) {
                    console.log(`The number was ${randomNum}`);
                }
            }
            if (guesses === 0 && score2 === 10) {
                console.log('Dang');
            } else if (guesses === 0 && score2 >= 5) {
                console.log('Good Job, you have amazing luck');
            } else if (guesses === 0 && score2 >= 3) {
                console.log('Good job, you have moderate luck');
            } else if (guesses === 0 && score2 < 3) {
                console.log("You don't have great luck");
            }
        }
    }
}

if (game2 === 'yes' && score2 >= 3) {
    const game3 = prompt('Do you want to play game 3?: ');

    if (game3 === 'no') {
        console.log('Click clear to restart');
    } else {
        console.log('Get ready for hardcore wordle');
        let score3 = 0;
        let guesses = 14;
    }
}
