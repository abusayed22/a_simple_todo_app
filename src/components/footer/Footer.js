import React from 'react'
import Button_color from '../utils/Button_color'

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
          <Button_color wid={5} bg_color={"green_c"} />
          <Button_color wid={5} bg_color={"yellow_c"} />
          <Button_color wid={5} bg_color={"red_c"} />
          </div>
        </div>
    </div>
  )
}

export default Footer