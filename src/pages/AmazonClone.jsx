import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function AmazonClone() {
  let details = ["/amazon1.png", "/amazon2.png", "/amazon3.png"]
  return (
    <div className='border flex flex-wrap'>
      <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>AMAZON CLONE (HTML + CSS)</div>
      <ProjectsDetails details={details} />
      <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
        <u><b>HTML Structure:</b></u>
        <p>The code defines the basic structure of the webpage using HTML tags.
        It creates sections for the header, hero section, shop section, and footer.
        Within these sections, it creates elements like navigation bar, search bar, product boxes, logo, and copyright information.</p> <br />
        <u><b>Navigation Bar:</b></u>

        <p>The header section includes a navigation bar with various functionalities.</p> <br />
        It has sections for: <br />
        <u>Logo</u>: An image representing the brand. <br />
        <u>Delivery address</u>: Displays the user's delivery location. <br />
        <u>Search bar</u>: Allows users to search for products. <br />
        <u>Flag and language selection</u>: Lets users choose their preferred language and country. <br />
        <u>Sign-in and account options</u>: Provides access to user accounts. <br />
        <u>Shopping cart</u>: Displays the cart with purchased items. <br />
        Hovering over some elements like the search bar or cart icon changes their appearance. <br />
        <u>Hero Section:</u>

        This section displays a hero image (likely a banner) and a message.
        The message might highlight promotions or encourage users to visit another Amazon store (e.g., Amazon India). <br />
        <u>Shop Section:</u>

        This section showcases various product categories.
        Each category is represented by a box containing: <br />
        <u>Product image</u>: A background image representing the category (e.g., clothing, electronics). <br />
        <u>Category title</u>: A heading displaying the category name (e.g., Clothing). <br />
        <u>Shop Now button</u>: A button that likely redirects to a product listing page (not implemented in this mockup). <br /> <br />
        <u><b>Footer:</b></u>

        <p>The footer contains information about the company and navigation links.
        It includes sections for:</p>
        <u>Get to Know Us</u>: Links to learn more about the company, careers, and blogs. <br />
        <u>Make Money with Us</u>: Information on how to sell products on the platform. <br />
        <u>Amazon Payment Products</u>: Links to services like Amazon credit cards.
        Let Us Help You: Links to customer service sections, FAQs, and return policies. <br />
        <u>Language and currency selection</u>: Allows users to choose their preferences. <br />
        Company information and copyright.
        <u><b>CSS Styling:</b></u>

        <p>The CSS code styles the HTML elements to create the visual appearance of the webpage.
        It defines styles for:
        Fonts, colors, and background colors for various sections.
        Borders and hover effects for interactive elements like buttons and navigation links.
        Layouts and positioning of elements on the page.
        Responsive behavior to adjust the layout for different screen sizes (not extensively implemented here).</p>
      </div>
      <GithubLink link1={'a'}/>

    </div>
  )
}

export default AmazonClone