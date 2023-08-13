import React from 'react'
import { categories, courses } from '../../../Data'
import Categories from './Categories'

const Courses = () => {
  return (
    <div className='section' id='courses'>
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className='text-Teal'>Categories</span>
        </div>
        <p className='text-sm text-gray leading-7 max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, officiis voluptate fugit eaque amet optio laudantium cupiditate nisi laboriosam deserunt officia fugiat. Ad ratione dolor sint sed, distinctio facere delectus?</p>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map(category => {
          return <Categories key={category.id} {...category}/>
        })}
      </div>
    </div>
  )
}

export default Courses