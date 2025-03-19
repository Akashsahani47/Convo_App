import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-2xl mx-auto container px-6 md:px-40 shadow-lg py-3 h-16 fixed' >
      <div className='flex justify-between'>
       <h1 className='text-2xl cursor-ponter font-bold'>Word <span className='text-3xl text-green-500'>To</span>PDF</h1>
       <h1 className=' mt-1 text-2xl cursor-ponter font-bold hover:scale-125 duration-300' >HOME</h1>
      </div>
    </div>
  )
}

export default Navbar