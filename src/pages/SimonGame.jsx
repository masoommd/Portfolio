import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function SimonGame() {
  let details = ["/game1.png", "/game2.png", "/game3.jpg"]
  return (
    <div className='border flex flex-wrap'>
      <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>SIMON SAYS GAME</div>
      <ProjectsDetails details={details} />
      <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
        <u><b>Functionality:</b></u>

        <p>The game starts when the user presses any key.
        A random sequence of colored buttons is displayed (flashes).
        The user must then repeat the sequence in the correct order.
        If the user succeeds, the game progresses to the next level with a longer sequence.
        If the user fails, the game ends, and the user's high score is displayed.</p> <br />
        <u><b>Components:</b></u>

        <p>The game uses HTML elements to create the visual interface, including buttons, a heading, and a container for the buttons.
        The CSS styles the buttons with different colors and shapes, adds a flashing effect, and handles responsiveness for mobile devices.
        The JavaScript code handles the game logic, including generating the random sequence, checking user input, updating the level, and managing the game state.</p> <br />

        <u><b>Initialization:</b></u>
<p>
        The gameSeq and userSeq arrays store the game sequence and the user's input sequence, respectively.
        HighScore keeps track of the user's best score.
        btns contains the button colors.
        started is a flag to indicate if the game has begun.
        level keeps track of the current level.
        Event listeners are added to the document and buttons to handle user interactions.</p> <br />
        <u>Game Start:</u>
        When the user presses any key, the started flag is set to true, and the levelUp function is called to start the first level. <br /> <br />
        <u>Level Up:</u>

        The level is incremented.
        The userSeq array is cleared.
        A random button is selected from the btns array.
        The selected button's color is added to the gameSeq array.
        The selected button flashes to indicate the correct sequence. <br /> <br />
        <u>User Input:</u>

        When the user clicks a button, its color is added to the userSeq array.
        The checkAns function compares the userSeq with the gameSeq at the current index.
        If they match, the game proceeds to the next level.
        If they don't match, the game ends, the high score is updated, and the game is reset. <br /> <br />
        <u>Game Over:</u>

        When the game ends, the started flag is set to false, the level and high score are displayed, and the game is reset. <br /> <br />
        <u>Additional Notes:</u>

        The code uses CSS classes to apply styles to the buttons, such as background colors, borders, and flashing effects.
        The querySelector is used to access the h2 element for updating the game status.
        The setTimeout function is used to create delays for the button flashes and game resets.
        The code includes media queries to make the game responsive on different screen sizes.
      </div>
      <GithubLink link1={'s'}/>

    </div>
  )
}

export default SimonGame