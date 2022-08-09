import React from 'react'
import { Link } from 'react-router-dom'

export const Navigations = () => {
  return (
	  <nav className='h-[50px] bg-gray-500 flex justify-between items-center px-5 text-yellow-400 shadow-md'>
		  <h3 className='text-white font-bold'>GitHub Search</h3>
		  <span>
			<Link to="/"           className='mr-2 hover:text-yellow-600'>Homepage</Link>
			<Link to="/favourites" className="hover:text-yellow-600">Favourit</Link>
		  </span>
	  </nav>
			  
  )
}
