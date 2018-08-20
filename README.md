# Hang Man JavaScript game assignment

## An implementation of the classic 'Hang Man' Game

* A random word is selected from an array of secret words at the start of the game

* The player guesses a letter contained in the secret word

* If the guessed letter is in the secret word, the letter is revealed

* If the guessed letter is not in the secret word,  they receive a strike

* If the player receives 10 strikes (missed guesses) before the secret word is completed, they LOSE

* If the player guesses all the letters in secret word before getting 10 strikes, they WIN

* Provide a method for the player to guess letters

* If player guesses a letter already guessed, let them know and do not count as a strike

* Provide a method for the player to start over with a new game

---------------------------
### TIPS:

1. Use Math.random() to choose a secret word form your array of words when the player starts the game.

2. 10 simple images are provided to draw a simple hang man as the user makes incorrect guesses. You can use these images, or make your own. It's recommended that you name all 10 images with a sequence number so you can more easily display the next image from your code as you count the number of incorrect guesses.

    (e.g. hman0.png, hman1.png, hman2.png ... hman10.png)

3. You'll want to mask the letters in the secret word that haven't been guessed yet, using the character of your choice.

4. You will need to check if the entered letter is in the current secret word and if it is, display the character at that index location.

### EXTRA:

You can use free online image and sprite editors like these if you want:

Image Editor: http://www141.lunapic.com/editor/

Sprite Generator: http://gaurav.munjal.us/Universal-LPC-Spritesheet-Character-Generator/
