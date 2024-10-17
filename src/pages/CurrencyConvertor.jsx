import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import { Link } from 'react-router-dom'
import GithubLink from '../components/GithubLink'


function CurrencyConvertor() {
    let details = ["/currency1.png", "/currency2.png", "/currency3.jpg"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>Currency Convertor App</div>
            <ProjectsDetails details={details} />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>

                This code builds a currency converter web application. The major technology involves to build these are React including custom Hooks and <Link  to='https://tailwindcss.com' className="group text-red-500">Tailwind CSS <span className="absolute top-100 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                This utility-first CSS framework allows you to quickly style your components using predefined utility classes. It provides a flexible and efficient way to create custom styles.
                <b><u><i>Click here to know more.</i></u></b>
                        </span></Link>. Here's a detailed explanation: <br /> <br />

                <p>
                <b>Functionality:</b> <br />
                Users can enter an amount in a specific currency (e.g., USD).
                They can choose the currency they want to convert it to from a dropdown menu.
                The application fetches live currency exchange rates and displays the converted amount in the target currency using the currency APIs .
                Users can also swap the "From" and "To" currencies with a single click.
                </p> <br />
                
                <p>
                <b>Components:</b> <br />
                InputBox: This reusable component creates a text input field for the amount and a dropdown menu for selecting the currency.
                useCurrencyInfo Hook: This custom hook fetches exchange rate data for a specific currency from an external API.
                App: This is the main component that manages the application state (amount, currencies) and renders the UI elements.
                Breakdown of the App Component:
                </p> <br />

                <p>
                <b>State Management:</b> <br />
                amount: Stores the user-entered amount.
                from: Stores the "From" currency (e.g., USD).
                to: Stores the "To" currency (e.g., INR).
                convertAmount: Stores the calculated converted amount.
                </p> <br />

                <p>
                <b><u>Fetching Exchange Rates:</u></b> <br />
                The useCurrencyInfo hook is used to fetch real-time exchange rates for the selected "From" currency.
                The fetched data is stored in the currencyInfo state variable.
                UI Elements:
                </p> <br />

                <p>
                Two InputBox components are rendered:
                One for the "From" currency, allowing users to enter an amount and select the currency to convert from.
                One for the "To" currency, displaying the converted amount.
                A "swap" button is provided. Clicking this button swaps the "From" and "To" currencies and their values.
                A "Convert" button triggers the conversion calculation and updates the convertAmount state.
                </p> <br />

                <p>
                <u><b>Conversion Logic:</b></u> <br />
                The convert function is called when the user clicks the "Convert" button.
                It multiplies the entered amount by the exchange rate obtained from currencyInfo for the target currency.
                The converted amount is then stored in the convertAmount state.
                </p> <br />
            </div>
            <GithubLink link1={'c'}/>

        </div>
    )
}

export default CurrencyConvertor