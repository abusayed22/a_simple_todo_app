import React from 'react'
import plus from '../images/plus.png'
import cancel from "../images/cancel.png"
import note from "../images/notes.png"
import double_tick from "../images/double-tick.png"
import Button_img from './utils/Button_img'

function Header_input() {

    return (
        <div>
            <div className='w-2/4 bg-slate-300 h-28 p-5 '>
                <div className='flex justify-around bg-white items-center'>
                    <img width={'30px'} className='h-[30px]  border-none text-black' src={note} placeholder={'type add todo'} alt="" />
                    <input className='w-[550px] h-16' type="" name="" value="" />
                    <Button_img wed={30} border_color={'slate-900'} button_font={plus} />
                </div>
                <div className='flex justify-between mt-2'>

                    <div className='cursor-pointer flex'>
                        <Button_img wed={30} border_color={'slate-900'} text={'complete all task'} button_font={double_tick} />
                        <span>complete all task</span>
                    </div>
                    <button type="">Clear Completed</button>
                </div>
            </div>
        </div>

    )
}

export default Header_input