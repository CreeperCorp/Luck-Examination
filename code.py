import random
diceRolls = int(input('How many times would you like to roll? (Input an integer): '))
diceRollsScore = 0
if (diceRolls >= 12):
    diceRollsScore = -150
    if (diceRolls >= 30):
        diceRollsScore = -500
        if (diceRolls >= 50):
             diceRollsScore = -10000
             if (diceRolls >= 100):
                diceRollsScore = -1000000
                
game2 = 'no'
game3 = 'no'

leastFavorite = int(input('What is your least favorite number? (Input an integer): '))
if (leastFavorite >= 10):
    leastFavoriteScore = -50
else:
    leastFavoriteScore = 0
sixtySomething = int(input('6?: '))
if (sixtySomething == 0):
    score = 10
elif (sixtySomething == 1):
    score = 5
elif (sixtySomething == 2):
    score = 3
elif (sixtySomething == 3):
    score = -10
    print (f"You suck, here's your new score: {score}")
elif (sixtySomething == 4):
    score = 20
elif (sixtySomething == 5):
    score = 15
elif (sixtySomething == 6):
    score = -100
    print (f"Your a horrible person, you don't even deserve to know how this affects your score")
elif (sixtySomething == 7):
    score = 12
    print('Ok')
elif (sixtySomething == 8):
    score = 7
elif (sixtySomething == 9):
    score = 30
    print ('Funny Number')
else:
    score = 0
    print ('Your boring')
score = score + diceRollsScore
score = score + leastFavoriteScore
roll = 0
roll = random.random() * 6
roll = int(roll)
roll = roll + 1
totalRoll = roll * diceRolls
print (f'The Dice Landed On {roll}')
print (f'The Final Roll Is {totalRoll}')
if (totalRoll == leastFavorite):
    print ('That Sucks')
elif (roll == leastFavorite):
        print ('Close Enough')
        score = score + totalRoll / diceRolls
else:
    score = score + totalRoll - diceRolls
if (diceRolls >= 150):
    score = -1000
    print ('Stop trying to get a crazy high score')
print (f'Your score is {score}')
if (score >= 85):
    score = score + 25
    print ('Congratulations, you beat the game!')
elif (score >= 74):
    print ('So Close')
elif (score >= 50):
    print ('Great Job')
elif (score >= 25):
    print ('Good Job')
elif (score >= 0):
    print ("Your score is positive, that's something")
else:
    print ('Try harder next time...')
if (score >= 85):
    game2 = input('Do you want to play game 2?: ')

if (game2 == 'no'):
    print ('Click clear to restart')
else:
    score = 0
    guesses = 10
    randomNum = random.randint(0, 10)

if (game2 == 'yes'):
    while (guesses > 0):
            userGuess = int(input('What number do you guess?: '))
            guesses = guesses - 1
   
            if (userGuess > randomNum):
                print ('Your guess is too high')
                print (f'Your score is {score}')
                print (f'You have {guesses} guesses left')
   
            elif (userGuess < randomNum):
                print ('Your guess is too low')
                print (f'Your score is {score}')
                print (f'You have {guesses} guesses left')
            else:
                score = score + 1
                print ('You guessed the number')
                print (f'Your score is {score}')
                print (f'You have {guesses} guesses left')
                randomNum = random.randint(0, 10)
                if (guesses == 0):
                    print (f'The number was {randomNum}')
            if (guesses == 0 and score == 10):
                print ('Dang')
            
            elif (guesses == 0 and score >= 5):
                print ('Good Job, you have amazing luck')
                
            elif (guesses == 0 and score >= 3):
                print ('Good job, you have moderate luck')
                
            elif (guesses == 0 and score < 3):
                print ("You don't have great luck")

if (score >= 3):
    game3 = input('Do you want to play game 3?: ')

if (game3 == 'no'):
    print ('Click clear to restart')
else:
    score = 0
    guesses = 10
    words = ['aback', 'abaft', 'abase', 'abate', 'abbey', 'abbot', 'abhor', 'abide', 'abler', 'abode', 'about', 'above', 'abuse', 'abyss', 'ached', 'aches', 'acids', 'acorn', 'acres', 'acrid', 'acted', 'actor', 'acute', 'adage', 'adapt', 'added', 'adder', 'adept', 'adieu', 'admit', 'adobe', 'adopt', 'adore', 'adorn', 'adult', 'aegis', 'aeons', 'affix', 'afire', 'afoot', 'after', 'again', 'agape', 'agate', 'agent', 'aging', 'aglow', 'agony', 'agree', 'ahead', 'aided', 'aides', 'ailed', 'aimed', 'aired', 'aisle', 'alarm', 'album', 'alder', 'alert', 'alias', 'alibi', 'alien', 'alike', 'alive', 'allay', 'alley', 'allot', 'allow', 'alloy', 'aloes', 'aloft', 'alone', 'along', 'aloud', 'amass', 'amaze', 'amber', 'amble', 'amend', 'amigo', 'amiss', 'amity', 'among', 'amour', 'ample', 'amply', 'amuse', 'angel', 'anger', 'angle', 'angry', 'angst', 'annoy', 'anvil', 'apace', 'apart', 'aping', 'appal', 'apple', 'apply', 'aptly', 'areas', 'avert', 'avoid', 'avows', 'await', 'awake', 'award', 'aware', 'awful', 'awoke', 'axiom', 'axles', 'azure', 'cabal', 'cabby', 'cabin', 'cable', 'cacao', 'cache', 'cadet', 'cadre', 'caged', 'cages', 'cairn', 'canal', 'candy', 'canes', 'canny', 'canoe', 'canon', 'cards', 'cared', 'cares', 'cargo', 'carol', 'carry', 'carts', 'carve', 'cased', 'cases', 'casks', 'caste', 'casts', 'catch', 'cater', 'cause', 'caved', 'caves', 'cavil', 'cease', 'cedar', 'ceded', 'cells', 'cents', 'chaos', 'chaps', 'charm', 'chart', 'chary', 'chase', 'chasm', 'chats', 'cheap', 'cheat', 'check', 'cheek', 'cheer', 'chefs', 'chess', 'chest', 'chick', 'chide', 'chief', 'child', 'chill', 'chime', 'china', 'chunk', 'civic', 'civil', 'clack', 'claim', 'cloak', 'clock', 'clods', 'clogs', 'close', 'cloth', 'cloud', 'clout', 'clove', 'clown', 'clubs', 'cluck', 'clues', 'clump', 'clung', 'coach', 'coals', 'coast', 'coats', 'cobra', 'cocoa', 'codes', 'coils', 'coins', 'colds', 'colic', 'colon', 'colts', 'combs', 'comer', 'comes', 'comet', 'comic', 'comma', 'conch', 'cones', 'conic', 'cooed', 'cooks', 'cools', 'copra', 'copse', 'coral', 'cords', 'cores', 'corks', 'corns', 'corps', 'costs', 'cotes', 'couch', 'cough', 'could', 'count', 'coupe', 'coups', 'court', 'cover', 'coves', 'covet', 'covey', 'cowed', 'cower', 'coyly', 'cozen', 'crabs', 'crack', 'craft', 'crags', 'cramp', 'crane', 'crank', 'crape', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craze', 'crazy', 'creak', 'cream', 'credo', 'creed', 'creek', 'creep', 'crepe', 'crept', 'cress', 'crest', 'crews', 'cribs', 'crick', 'cried', 'crime', 'crimp', 'crisp', 'croak', 'crock', 'crone', 'crony', 'crook', 'crops', 'cross', 'croup', 'crowd', 'crown', 'crows', 'crude', 'cruel', 'crumb', 'crush', 'crust', 'crypt', 'cubes', 'cubic', 'cubit', 'cuffs', 'cults', 'curds', 'cured', 'cures', 'curls', 'curly', 'curry', 'curse', 'curst', 'curve', 'cycle', 'cynic', 'daily', 'dairy', 'daisy', 'dales', 'dally', 'dames', 'damps', 'dazed', 'deals', 'dealt', 'deans', 'dears', 'death', 'debar', 'debit', 'debts', 'debut', 'decay', 'decks', 'decoy', 'decry', 'deeds', 'deems', 'deeps', 'defer', 'deign', 'deity', 'delay', 'dells', 'delta', 'delve', 'demon', 'demur', 'dense', 'dents', 'depot', 'depth', 'derby', 'desks', 'deter', 'deuce', 'devil', 'diary', 'diced', 'dices', 'dicta', 'diets', 'digit', 'dikes', 'dimes', 'dimly', 'dined', 'diner', 'dines', 'dingy', 'dirge', 'dirty', 'discs', 'disks', 'ditch', 'dizzy', 'docks', 'dodge', 'doers', 'dogma', 'doing', 'doled', 'dolls', 'domed', 'domes', 'donor', 'dooms', 'doors', 'dosed', 'doses', 'doted', 'dotes', 'doubt', 'dough', 'doves', 'dowdy', 'downs', 'downy', 'dowry', 'dozed', 'dozen', 'draft', 'drags', 'drain', 'drake', 'drama', 'drams', 'drank', 'drape', 'dread', 'dream', 'dregs', 'dress', 'dried', 'droll', 'drone', 'droop', 'drops', 'dross', 'drove', 'drown', 'drugs', 'drums', 'drunk', 'dryly', 'ducal', 'ducat', 'duchy', 'ducks', 'ducts', 'duels', 'dunce', 'dunes', 'duped', 'dupes', 'dusky', 'dusty', 'dwarf', 'dwell', 'dwelt', 'dying', 'eager', 'eagle', 'earls', 'early', 'earns', 'earth', 'eased', 'easel', 'eases', 'eaten', 'eater', 'eaves', 'ebbed', 'ebony', 'edged', 'edges', 'edict', 'edify', 'eerie', 'egged', 'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elegy', 'elfin', 'elite', 'elope', 'elude', 'elves', 'email', 'emits', 'empty', 'enact', 'ended', 'endow', 'enemy', 'enjoy', 'ennui', 'enrol', 'ensue', 'enter', 'entry', 'envoy', 'epics', 'epoch', 'equal', 'equip', 'erase', 'erect', 'erred', 'error', 'essay', 'ether', 'ethic', 'evade', 'event', 'every', 'evils', 'evoke', 'exalt', 'excel', 'exert', 'exile', 'exist', 'exits', 'expel', 'extol', 'extra', 'exult', 'eying', 'eyrie']
    randomWord = random.choice(words)
