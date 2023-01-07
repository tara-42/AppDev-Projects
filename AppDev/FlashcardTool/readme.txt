README

Goal of this app:
This is an educational app that improves studying. While the user is practicing their vocabulary with flashcards they have the option of playing soft background music that will help the brain focus.
The user would load vocabulary into an excel file, save it as a csv in the correct directory for the app to use. The app takes the information from the csv file and creates the on screen flashcards

Languages Used:
I used python to convert a csv file into a JSON file. A foreign function call from JavaScript to Python reads the JSON file and passes the information to PORT 3001. Then my JavaScript code takes that information and uses it to fill the contents of the flashcards.
I used go programming language to incorporate music. The go program takes files from the music folder and creates a playlist and passes the information to my index.html file which incorporates it into the web app.


Methods used:
I used a foreign function call from JavaScript to Python. See cards.js in the API folder.
I used a Server to communicate between Golang and Javascript via HTML see function “audioPlayer” in main_player.go.

Steps to run app:
Clone files
Docker-compose build
Docker-compose up

