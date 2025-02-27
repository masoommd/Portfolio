import React from 'react'
import Card from '../Card'

function MinorProjects() {
  return (
    <div className='h-screen min-h-screen flex flex-wrap items-center justify-evenly overflow-y-auto m-4 '>
        
        <Card src={'/weatherApp.png'} title={'Weather App'} path={'weather-app'}/>
        <Card src={'/simonSaysGame.png'} title={'Simon Says Game'} path={'simon-game'}/>
        <Card src={'/todo.png'} title={'Todo App'} path={'todo-app'}/>
        <Card src={'/passwordGenerator.png'} title={'Password Generator'} path={'password-generator'}/>
        <Card src={'/currencyConvertor.png'} title={'Currency Convertor'} path={'currency-convertor'}/>
        <Card src={'/amazon.png'} title={'Amazon Clone(CSS)'} path={'amazon-clone'}/>
        <Card src={'/unsplash-logo.png'} title={'Image Search App'} path={'image-search'}/>
        
    </div>
  )
}

export default MinorProjects