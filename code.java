import java.util.Random;
import java.util.Scanner;

public class DiceGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.print("How many times would you like to roll? (Input an integer): ");
        int diceRolls = scanner.nextInt();
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

        String game2 = "no";
        String game3 = "no";
        int score2 = 0;
        int score3 = 0;

        System.out.print("What is your least favorite number? (Input an integer): ");
        int leastFavorite = scanner.nextInt();
        int leastFavoriteScore = (leastFavorite >= 10) ? -50 : 0;

        System.out.print("6?: ");
        int sixtySomething = scanner.nextInt();
        int score;
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
                System.out.println("You suck, here's your new score: " + score);
                break;
            case 4:
                score = 20;
                break;
            case 5:
                score = 15;
                break;
            case 6:
                score = -100;
                System.out.println("Your a horrible person, you don't even deserve to know how this affects your score");
                break;
            case 7:
                score = 12;
                System.out.println("Ok");
                break;
            case 8:
                score = 7;
                break;
            case 9:
                score = 30;
                System.out.println("Funny Number");
                break;
            default:
                score = 0;
                System.out.println("Your boring");
                break;
        }

        score = score + diceRollsScore + leastFavoriteScore;

        int roll = random.nextInt(6) + 1;
        int totalRoll = roll * diceRolls;

        System.out.println("The Dice Landed On " + roll);
        System.out.println("The Final Roll Is " + totalRoll);

        if (totalRoll == leastFavorite) {
            System.out.println("That Sucks");
        } else if (roll == leastFavorite) {
            System.out.println("Close Enough");
            score += totalRoll / (double) diceRolls;
        } else {
            score += totalRoll - diceRolls;
        }

        if (diceRolls >= 150) {
            score = -1000;
            System.out.println("Stop trying to get a crazy high score");
        }

        System.out.println("Your score is " + score);

        if (score >= 85) {
            score += 25;
            System.out.println("Congratulations, you beat the game!");
        } else if (score >= 74) {
            System.out.println("So Close");
        } else if (score >= 50) {
            System.out.println("Great Job");
        } else if (score >= 25) {
            System.out.println("Good Job");
        } else if (score >= 0) {
            System.out.println("Your score is positive, that's something");
        } else {
            System.out.println("Try harder next time...");
        }

        if (score >= 85) {
            System.out.print("Do you want to play game 2?: ");
            scanner.nextLine(); // consume newline
            game2 = scanner.nextLine();
        }

        if ("no".equals(game2)) {
            System.out.println("Click clear to restart");
        } else {
            score2 = 0;
            int guesses = 10;
            int randomNum = random.nextInt(11);

            if ("yes".equals(game2)) {
                while (guesses > 0) {
                    System.out.print("What number do you guess?: ");
                    int userGuess = scanner.nextInt();
                    guesses--;
                    game3 = "no";
                    if (userGuess > randomNum) {
                        System.out.println("Your guess is too high");
                        System.out.println("Your score is " + score2);
                        System.out.println("You have " + guesses + " guesses left");
                    } else if (userGuess < randomNum) {
                        System.out.println("Your guess is too low");
                        System.out.println("Your score is " + score2);
                        System.out.println("You have " + guesses + " guesses left");
                    } else {
                        score2++;
                        System.out.println("You guessed the number");
                        System.out.println("Your score is " + score2);
                        System.out.println("You have " + guesses + " guesses left");
                        randomNum = random.nextInt(11);
                        if (guesses == 0) {
                            System.out.println("The number was " + randomNum);
                        }
                    }
                    if (guesses == 0 && score2 == 10) {
                        System.out.println("Dang");
                    } else if (guesses == 0 && score2 >= 5) {
                        System.out.println("Good Job, you have amazing luck");
                    } else if (guesses == 0 && score2 >= 3) {
                        System.out.println("Good job, you have moderate luck");
                    } else if (guesses == 0 && score2 < 3) {
                        System.out.println("You don't have great luck");
                    }
                }
            }
        }
        scanner.close();
    }
}
