import React from 'react';

function Button_img({wed, button_font,border_color,deleteHandler}) {

  
  return (
    <button className={`w-${wed} h-${wed} rounded-full border-${border_color}`}>
      <img width={`${wed}px`} className='p-1' src={button_font} alt="" />
    </button>
  )
}

export default Button_img