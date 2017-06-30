# tic-tac-toe

Link to play:
https://bradleyden.github.io/tic-tac-toe/

Demo sign in:
email: demo@email.com
password: a

Objective:
To create a single page Tic Tac Toe game that can be played by
two players and that tracks user registration data and tracks
stats for each unique user.

Technologies Used:
HTML, CSS, JavaScript, Bootstrap, AJAX, scss

Process:
First, I built a prototype game engine using just JavaScript and
node. I ended up with a playable version of tic-tac-toe in my
terminal.

Next I built a basic webpage to host the application and built a
simple game grid using Bootstrap. Then, I used jQuery to link
user actions (such as clicking a cell on the grid) to my game
engine. I was eventually able to create a playable version
of my terminal prototype in the browser with visual feedback
for the viewer.

The final step was to connect my page to the API using AJAX to
  1. Create and store new user profiles and allow users to sign in
     to existing profiles.
  2. Create new game data for each game a player creates, and PATCH
     in updates each time a player makes a move.

Once that was in place, I built a function to iterate through the
previous game data and pick out wins and losses, which I was
then able to display to the user using jQuery.

What's Next:
I would eventually like to add online multiplayer functionality and
the ability to load previous games, so a user could have several
ongoing games at once with several online opponents and freely
switch between them between turns.
