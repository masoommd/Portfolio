import React from 'react'
import Card from '../Card'

function MajorProjects() {
 
  return (
    <div className='h-screen min-h-screen flex flex-wrap items-center justify-evenly'>
        
        <Card src={'/wanderlust.png'} title={'Wanderlust'} path={'wanderlust'}/>
        <Card src={'/blogApp.png'} title={'Blog App'} path={'blog-app'}/>
        <Card src={'/portfolio.png'} title={'Portfolio'} path={'portfolio'}/>
        
        
    </div>
  )
}

export default MajorProjects