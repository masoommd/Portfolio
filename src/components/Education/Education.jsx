import React from 'react'
import EducationBlock from '../EducationBlock'
import EducationPic from '../EducationPic'
function Education() {
  let content = [[`<b>Degree</b> : Bachelor of Technology (B.Tech) <br />
        <b>Institute</b> : Bhagalpur College of Engineering <br />
        <b>University</b> : Bihar Engineering University <br />
        <b>Field of Study</b>: Electronics and Communication Engineering <br />
        <b>Graduation Date</b>: August, 2024 <br />
        <b>GPA</b>: 8.09/10 CGPA <br />`, '../../../public/graduation.png'],
  [`<b>Degree</b> : Intermediate <br />
        <b>Institute</b> : S.R.P.S + School, Gardanibagh, Patna <br />
        <b>Board</b> : Bihar School Examination Board <br />
        <b>Field of Study</b>: Science(Physics, Chemistry, Maths) <br />
        <b>Passing Date</b>: March, 2020 <br />
        <b>Marks</b>: 76.6% <br />`, '../../../public/intermediate.png'],
  [`<b>Degree</b> : Matriculation <br />
        <b>Institute</b> : Park Mount Public School <br />
        <b>Board</b> : Central Board of Secondary Education <br />
        <b>Passing Date</b>: July,2018 <br />
        <b>Marks</b>: 86.6% <br />`, '../../../public/matric.png']]

  return (
    <div>
      <div className='bg-transparent flex flex-wrap justify-around min-h-screen'>
        <>
          <EducationPic src={content[0][1]} />
          <EducationBlock content={content[0][0]} />
        </>
        <>
          <EducationBlock content={content[1][0]} />
          <EducationPic src={content[1][1]} />
        </>
        <>
          <EducationPic src={content[2][1]} />
          <EducationBlock content={content[2][0]} />
        </>
      </div>
    </div>
  )
}

export default Education