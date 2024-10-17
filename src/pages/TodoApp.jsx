import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function TodoApp() {
  let details = ["/todo1.png", "/todo2.png", "/todo3.jpg"]
  return (
    <div className='border flex flex-wrap'>
      <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>TODO APP</div>
      <ProjectsDetails details={details} />
      <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
        <u><b>Functionality:</b></u> <br />

        <p>Users can add new tasks (todos) by entering text in a form and clicking "Add."
        Each todo has a checkbox to mark it as completed or incomplete.
        Users can edit existing todos by clicking an "Edit" button and saving the changes.
        Completed todos are displayed with a strikethrough effect.
        Users can delete unwanted todos.
        The application persists the todo list in the user's browser localStorage, allowing them to revisit and manage their tasks even after refreshing the page.</p> <br />
        <u><b>Components:</b></u> <br />

        <p><u>TodoForm</u>:  This component handles user input for adding new todos. It includes an input field for entering the todo text and a button to submit the new task. <br />
        <u>TodoItem:</u> This component represents an individual todo item in the list. It displays the todo text, a checkbox for marking completion, "Edit" and "Delete" buttons, and applies a strikethrough effect for completed todos. <br />
        <u>TodoContext</u>: This context provides a way to share state and functionality related to todos across different parts of the application. It stores the current todo list data and functions for adding, updating, deleting, and marking todos as complete.</p> <br />
        

        <u><b>State Management:</b></u> <br />

        <p>The application uses the useState hook to manage the todo list data (todos).
        Each todo item is an object with properties like id (unique identifier), todo (text of the task), and completed (boolean flag indicating completion).</p> <br />
        <u>Adding Todos:</u> <br />

        The addTodo function adds a new todo object to the todos state array. It generates a unique id for the new todo using Date.now().
        <u>Updating Todos:</u> <br />

        The updateTodo function allows editing existing todos. It iterates through the todos array and replaces the matching todo object with the updated version. <br />
        <u>Deleting Todos:</u> <br />

        The deleteTodo function filters out the todo with the specified id from the todos array, effectively removing it from the list. <br />
        <u>Marking Todos as Complete:</u> <br />

        The toggleComplete function iterates through the todos array and toggles the completed flag for the todo with the matching id.
        <u>Persistence:</u> <br />

        The application uses localStorage to save the current todos state to the user's browser for persistence.
        On load, it checks for existing todo data in localStorage and sets the initial state accordingly.
        Any changes to the todos state are reflected in localStorage to maintain the list across page refreshes.
        Overall, this code demonstrates the use of React components, state management, context API, and localStorage to create a functional and user-friendly todo list application.
      </div>
      <GithubLink link1={'t'}/>

    </div>
  )
}

export default TodoApp