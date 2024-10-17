import React from 'react'
import Card from '../Card'
import {Link} from 'react-router-dom'

function Projects() {
  let src = '/minor.png'
  let src1 = '/major.png'
  return (
    <div className='h-screen min-h-screen flex flex-wrap items-center justify-evenly'>
      <Card src={src} title={'Minor Project'} path={'minorprojects'}/>
      <Card src={src1} title={'Major Project'} path={'majorprojects'}/>
    </div>
  )
}

export default Projects