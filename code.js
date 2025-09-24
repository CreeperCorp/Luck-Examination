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
        let words = ['aback', 'abaft', 'abase', 'abate', 'abbey', 'abbot', 'abhor', 'abide', 'abler', 'abode', 'about', 'above', 'abuse', 'abyss', 'ached', 'aches', 'acids', 'acorn', 'acres', 'acrid', 'acted', 'actor', 'acute', 'adage', 'adapt', 'added', 'adder', 'adept', 'adieu', 'admit', 'adobe', 'adopt', 'adore', 'adorn', 'adult', 'aegis', 'aeons', 'affix', 'afire', 'afoot', 'after', 'again', 'agape', 'agate', 'agent', 'aging', 'aglow', 'agony', 'agree', 'ahead', 'aided', 'aides', 'ailed', 'aimed', 'aired', 'aisle', 'alarm', 'album', 'alder', 'alert', 'alias', 'alibi', 'alien', 'alike', 'alive', 'allay', 'alley', 'allot', 'allow', 'alloy', 'aloes', 'aloft', 'alone', 'along', 'aloud', 'amass', 'amaze', 'amber', 'amble', 'amend', 'amigo', 'amiss', 'amity', 'among', 'amour', 'ample', 'amply', 'amuse', 'angel', 'anger', 'angle', 'angry', 'angst', 'annoy', 'anvil', 'apace', 'apart', 'aping', 'appal', 'apple', 'apply', 'aptly', 'areas', 'avert', 'avoid', 'avows', 'await', 'awake', 'award', 'aware', 'awful', 'awoke', 'axiom', 'axles', 'azure', 'cabal', 'cabby', 'cabin', 'cable', 'cacao', 'cache', 'cadet', 'cadre', 'caged', 'cages', 'cairn', 'canal', 'candy', 'canes', 'canny', 'canoe', 'canon', 'cards', 'cared', 'cares', 'cargo', 'carol', 'carry', 'carts', 'carve', 'cased', 'cases', 'casks', 'caste', 'casts', 'catch', 'cater', 'cause', 'caved', 'caves', 'cavil', 'cease', 'cedar', 'ceded', 'cells', 'cents', 'chaos', 'chaps', 'charm', 'chart', 'chary', 'chase', 'chasm', 'chats', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chefs', 'chess', 'chest', 'chick', 'chide', 'chief', 'child', 'chill', 'chime', 'china', 'chunk', 'civic', 'civil', 'clack', 'claim', 'cloak', 'clock', 'clods', 'clogs', 'close', 'cloth', 'cloud', 'clout', 'clove', 'clown', 'clubs', 'cluck', 'clues', 'clump', 'clung', 'coach', 'coals', 'coast', 'coats', 'cobra', 'cocoa', 'codes', 'coils', 'coins', 'colds', 'colic', 'colon', 'colts', 'combs', 'comer', 'comes', 'comet', 'comic', 'comma', 'conch', 'cones', 'conic', 'cooed', 'cooks', 'cools', 'copra', 'copse', 'coral', 'cords', 'cores', 'corks', 'corns', 'corps', 'costs', 'cotes', 'couch', 'cough', 'could', 'count', 'coupe', 'coups', 'court', 'cover', 'coves', 'covet', 'covey', 'cowed', 'cower', 'coyly', 'cozen', 'crabs', 'crack', 'craft', 'crags', 'cramp', 'crane', 'crank', 'crape', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craze', 'crazy', 'creak', 'cream', 'credo', 'creed', 'creek', 'creep', 'crepe', 'crept', 'cress', 'crest', 'crews', 'cribs', 'crick', 'cried', 'crime', 'crimp', 'crisp', 'croak', 'crock', 'crone', 'crony', 'crook', 'crops', 'cross', 'croup', 'crowd', 'crown', 'crows', 'crude', 'cruel', 'crumb', 'crush', 'crust', 'crypt', 'cubes', 'cubic', 'cubit', 'cuffs', 'cults', 'curds', 'cured', 'cures', 'curls', 'curly', 'curry', 'curse', 'curst', 'curve', 'cycle', 'cynic', 'daily', 'dairy', 'daisy', 'dales', 'dally', 'dames', 'damps', 'dazed', 'deals', 'dealt', 'deans', 'dears', 'death', 'debar', 'debit', 'debts', 'debut', 'decay', 'decks', 'decoy', 'decry', 'deeds', 'deems', 'deeps', 'defer', 'deign', 'deity', 'delay', 'dells', 'delta', 'delve', 'demon', 'demur', 'dense', 'dents', 'depot', 'depth', 'derby', 'desks', 'deter', 'deuce', 'devil', 'diary', 'diced', 'dices', 'dicta', 'diets', 'digit', 'dikes', 'dimes', 'dimly', 'dined', 'diner', 'dines', 'dingy', 'dirge', 'dirty', 'discs', 'disks', 'ditch', 'dizzy', 'docks', 'dodge', 'doers', 'dogma', 'doing', 'doled', 'dolls', 'domed', 'domes', 'donor', 'dooms', 'doors', 'dosed', 'doses', 'doted', 'dotes', 'doubt', 'dough', 'doves', 'dowdy', 'downs', 'downy', 'dowry', 'dozed', 'dozen', 'draft', 'drags', 'drain', 'drake', 'drama', 'drams', 'drank', 'drape', 'dread', 'dream', 'dregs', 'dress', 'dried', 'droll', 'drone', 'droop', 'drops', 'dross', 'drove', 'drown', 'drugs', 'drums', 'drunk', 'dryly', 'ducal', 'ducat', 'duchy', 'ducks', 'ducts', 'duels', 'dunce', 'dunes', 'duped', 'dupes', 'dusky', 'dusty', 'dwarf', 'dwell', 'dwelt', 'dying', 'eager', 'eagle', 'earls', 'early', 'earns', 'earth', 'eased', 'easel', 'eases', 'eaten', 'eater', 'eaves', 'ebbed', 'ebony', 'edged', 'edges', 'edict', 'edify', 'eerie', 'egged', 'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elegy', 'elfin', 'elite', 'elope', 'elude', 'elves', 'email', 'emits', 'empty', 'enact', 'ended', 'endow', 'enemy', 'enjoy', 'ennui', 'enrol', 'ensue', 'enter', 'entry', 'envoy', 'epics', 'epoch', 'equal', 'equip', 'erase', 'erect', 'erred', 'error', 'essay', 'ether', 'ethic', 'evade', 'event', 'every', 'evils', 'evoke', 'exalt', 'excel', 'exert', 'exile', 'exist', 'exits', 'expel', 'extol', 'extra', 'exult', 'eying', 'eyrie'];
        
        function findCommonCharacters(string1, string2) {
    const set1 = new Set(string1);
    const set2 = new Set(string2);
    const commonChars = [...set1].filter(char => set2.has(char));
    return commonChars;
}

if (game3 === 'yes') {
    randomWord = words[Math.floor(Math.random() * words.length)];
}

while (guesses > 0) {
    const guessedWord = prompt('Input a 5 letter word: ');
    const guessedWordCharacters = guessedWord.length;
    if (guessedWordCharacters === 5) {
        const h = 'h';
    } else {
        guesses = 0;
        console.log('Only 5 letter words');
    }
    const matches = findCommonCharacters(randomWord, guessedWord);
    console.log(`The common characters are ${matches}`);
    guesses = guesses - 1;

    if (guessedWord === randomWord) {
        score3 = score3 + 1;
        console.log('Yay you got the word');
        randomWord = words[Math.floor(Math.random() * words.length)];
    }

    if (guesses === 0) {
        console.log(`The word was ${randomWord}`);
        console.log(`Your score is ${score3}`);
    }
}

if (score3 < 3) {
    console.log('Better luck next time, you are not a master at wordle');
} else {
    console.log('Congratulations... You are the wordle champion, and one of the luckiest people on earth');
}
    }
}
