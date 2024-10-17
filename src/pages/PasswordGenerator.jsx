import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function PasswordGenerator() {
  let details = ["/password1.png", "/password2.png", "/password3.png", "/password4.png"]
  return (
    <div className='border flex flex-wrap'>
      <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>PASSWORD GENERATOR</div>
      <ProjectsDetails details={details} />
      <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
        <b><u>Functionality:</u></b> <br />
        <p>
          Users can set the desired length of their password using a slider.
          Users can choose to include numbers and special characters in their password by selecting checkboxes.
          The application generates a random password based on the user's selections and displays it in a read-only input field.
          Users can easily copy the generated password to their clipboard by clicking a "Copy" button.
        </p> <br />

        <u><b>Components:</b></u> <br />

        <p>
          The application uses HTML form elements like sliders, checkboxes, and buttons for user interaction.
          It leverages JavaScript to manage the state of the application (password length, character options) and handle functionalities like password generation and copying</p>. <br />

        <u><b>State Management:</b></u> <br />

        <p><u>length</u>: Stores the desired password length (default 8).
          <u>numberAllowed</u>: Indicates whether numbers are included (default true).
          <u>charAllowed</u>: Indicates whether special characters are included (default true).
          <u>password</u>: Stores the generated password string.
        </p> <br />
        <u><b>Password Generation:
        </b></u> <br />
        <p>
          The passwordGenerator function is responsible for creating a random password.
          It uses a useCallback hook to memoize the function, preventing unnecessary re-renders.
          Based on the numberAllowed and charAllowed flags, it builds a string containing characters from the desired sets (uppercase/lowercase letters, numbers, and special characters).
          It then generates a random password of the specified length by selecting characters from this string.
          Finally, the generated password is stored in the password state.</p> <br />
        <u><b>Copying to Clipboard:</b></u> <br />
        <p>
          The copyPasswordToClipboard function handles copying the generated password to the user's clipboard.
          It uses a useCallback hook to optimize performance.
          It utilizes the useRef hook to gain access to the password input element (passwordRef).
          The function selects the entire password text in the input field (or a specific range using setSelectionRange).
          It then uses the window.navigator.clipboard.writeText method to copy the selected text to the clipboard.</p> <br />
        <u><b>User Interface:</b></u> <br />

        <p>The application has a clear layout with:
          A heading "Password Generator".
          A read-only input field displaying the generated password.
          A "Copy" button to copy the password.
          A slider for setting the password length.
          Checkboxes for enabling numbers and special characters in the password.
          Overall, this code demonstrates the use of React hooks, state management, and event handling to create a user-friendly password generator application.</p> <br />
      </div>
      <GithubLink link1={'p'}/>

    </div>
  )
}

export default PasswordGenerator