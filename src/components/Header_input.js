import React from 'react'
import plus from '../images/plus.png'
import cancel from "../images/cancel.png"
import note from "../images/notes.png"
import double_tick from "../images/double-tick.png"
import Button_img from './utils/Button_img'
import Todo from './all_todo/Todo'
import Footer from './footer/Footer'

function Header_input() {

    return (
        <div>
            <div className='w-[700px] bg-slate-200 h-auto p-5 rounded-sm '>
                <div className='flex justify-around bg-white items-center rounded-sm shadow-2xl'>
                    <img width={'30px'} className='h-[30px]  border-none text-black' src={note} placeholder={'type add todo'} alt="" />
                    <input className='outline-0 w-[550px] h-16' placeholder='Type todo here' type="" name="" value="" />
                    <Button_img wed={30} border_color={'slate-900'} button_font={plus} />
                </div>
                <div className='flex justify-between mt-2'>

                    <div className='cursor-pointer flex'>
                        <Button_img wed={30} border_color={'slate-900'} text={'complete all task'} button_font={double_tick} />
                        <span>complete all task</span>
                    </div>
                    <button type="">Clear Completed</button>
                </div>
                <br/>
                <br/>
                <Todo img={cancel} />
                <Todo img={cancel} />
                <Footer/>
            </div>
        </div>

    )
}

export default Header_input