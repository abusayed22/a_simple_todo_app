import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between mt-8'>
      <p>2 Task Left</p>
      <div className="flex items-center justify-end">
        <div className='flex space-x-1'>
          <p>All</p>
          <span>|</span>
          <p>Incomplete</p>
          <span>|</span>
          <p>complete</p>
        </div>
        <div className='flex ml-5'>
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2  border-green-500 hover:bg-green-500 transition-colors`}
          ></div>

          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-amber-400 hover:bg-amber-500 transition-colors`}
          ></div>
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-red-500 hover:bg-red-500 transition-colors`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Footer