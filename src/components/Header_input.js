import React from 'react'
import plus from '../images/plus.png'
import cancel from '../images/cancel.png'
import note from '../images/notes.png'
import double_tick from '../images/double-tick.png'
import Button_img from './utils/Button_img'
import Todo from './all_todo/Todo'
import Footer from './footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, completeAll } from '../redux/todos/action'

function Header_input() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // all complete handler
  const allCompleteHandler = () => {
    dispatch(completeAll())
  };

  // complete clear
  const completeClear = () => {
    dispatch(clearCompleted())
  }

  return (
    <div>
      <div className="w-[700px] bg-slate-200 h-auto p-5 rounded-sm ">
        <div className="flex justify-around bg-white items-center rounded-sm shadow-2xl">
          <img
            width={'30px'}
            className="h-[30px]  border-none text-black"
            src={note}
            placeholder={'type add todo'}
            alt=""
          />
          <input
            className="outline-0 w-[550px] h-16"
            placeholder="Type todo here"
            type=""
            name=""
            value=""
          />
          <Button_img wed={30} border_color={'slate-900'} button_font={plus} />
        </div>
        <div className="flex justify-between mt-2">
          <div onClick={allCompleteHandler} className="cursor-pointer flex">
          <div className={`w-7 h-7 rounded-full `}>
      <img width={`30px`} className='p-1' src={double_tick} alt="" />
    </div>
            <span className=''>complete all task</span>
          </div>
          <button onClick={completeClear}>Clear Completed</button>
        </div>
        <br />
        <br />
        {/* all todo map for read */}
        {todos.map((todo) => (
          <Todo img={cancel} todo={todo} key={todo.id} />
        ))}

        <Footer />
      </div>
    </div>
  )
}

export default Header_input
