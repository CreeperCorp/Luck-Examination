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

