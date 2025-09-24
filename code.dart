import 'dart:io';
import 'dart:math';

int score9 = 0;
int score52 = 0;
int score30 = 0;
int score81 = 0;
int score = 0;

void main() {
  final random = Random();

  stdout.write('How many times would you like to roll? (Input an integer): ');
  int diceRolls = int.parse(stdin.readLineSync()!);
  int diceRollsScore = 0;
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

  String game2 = 'no';
  String game3 = 'no';
  int score2 = 0;
  int score3 = 0;

  stdout.write('What is your least favorite number? (Input an integer): ');
  int leastFavorite = int.parse(stdin.readLineSync()!);
  int leastFavoriteScore = leastFavorite >= 10 ? -50 : 0;

  stdout.write('6?: ');
  int sixtySomething = int.parse(stdin.readLineSync()!);
  int score;
  switch (sixtySomething) {
    case 0:
      score81 = 10;
      break;
    case 1:
      score81 = 5;
      break;
    case 2:
      score81 = 3;
      break;
    case 3:
      score81 = -10;
      print("You suck, here's your new score: $score81");
      break;
    case 4:
      score81 = 20;
      break;
    case 5:
      score81 = 15;
      break;
    case 6:
      score81 = -100;
      print("Your a horrible person, you don't even deserve to know how this affects your score");
      break;
    case 7:
      score81 = 12;
      print('Ok');
      break;
    case 8:
      score81 = 7;
      break;
    case 9:
      score81 = 30;
      print('Funny Number');
      break;
    default:
      score81 = 0;
      print('Your boring');
  }

  score81 += diceRollsScore;
  score81 += leastFavoriteScore;

  int roll = random.nextInt(6) + 1;
  int totalRoll = roll * diceRolls;

  print('The Dice Landed On $roll');
  print('The Final Roll Is $totalRoll');

  if (totalRoll == leastFavorite) {
    print('That Sucks');
  } else if (roll == leastFavorite) {
    print('Close Enough');
    score52 = score9 + totalRoll;
    score30 = score52 ~/ diceRolls;
    score = score30 + score81
  } else {
    score52 = score9 + totalRoll;
    score30 = score52 - diceRolls;
    score = score30 + score81;
  }

  if (diceRolls >= 150) {
    score81 = -1000;
    print('Stop trying to get a crazy high score');
  }

  print('Your score is $score81');

  if (score >= 85) {
    score += 25;
    print('Congratulations, you beat the game!');
  } else if (score >= 74) {
    print('So Close');
  } else if (score >= 50) {
    print('Great Job');
  } else if (score >= 25) {
    print('Good Job');
  } else if (score >= 0) {
    print("Your score is positive, that's something");
  } else {
    print('Try harder next time...');
  }

  if (score >= 85) {
    stdout.write('Do you want to play game 2?: ');
    game2 = stdin.readLineSync()!;
  }

  if (game2 == 'no') {
    print('Click clear to restart');
  } else {
    score2 = 0;
    int guesses = 10;
    int randomNum = random.nextInt(11);

    if (game2 == 'yes') {
      while (guesses > 0) {
        stdout.write('What number do you guess?: ');
        int userGuess = int.parse(stdin.readLineSync()!);
        guesses -= 1;
        game3 = 'no';
        if (userGuess > randomNum) {
          print('Your guess is too high');
          print('Your score is $score2');
          print('You have $guesses guesses left');
        } else if (userGuess < randomNum) {
          print('Your guess is too low');
          print('Your score is $score2');
          print('You have $guesses guesses left');
        } else {
          score2 += 1;
          print('You guessed the number');
          print('Your score is $score2');
          print('You have $guesses guesses left');
          randomNum = random.nextInt(11);
          if (guesses == 0) {
            print('The number was $randomNum');
          }
        }
        if (guesses == 0 && score2 == 10) {
          print('Dang');
        } else if (guesses == 0 && score2 >= 5) {
          print('Good Job, you have amazing luck');
        } else if (guesses == 0 && score2 >= 3) {
          print('Good job, you have moderate luck');
        } else if (guesses == 0 && score2 < 3) {
          print("You don't have great luck");
        }
      }
    }
  }
}
