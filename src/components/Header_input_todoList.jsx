import React from 'react'
import cancel from '../images/cancel.png'
import double_tick from '../images/double-tick.png'
import Todo from './all_todo/Todo'
import Footer from './footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, completeAll } from '../redux/todos/action'
import Form from './form/Form'

function Header_input_todoList() {
  const todos = useSelector((state) => state.todos)
  const fillters = useSelector((state) => state.fillters)

  const { stataus, color } = fillters
  const dispatch = useDispatch()

  // all complete handler
  const allCompleteHandler = () => {
    dispatch(completeAll())
  }

  // complete clear
  const completeClear = () => {
    dispatch(clearCompleted())
  }

  // filter
  const filterByColor = (todo) => {
    if (color?.length > 0) {
      return color.includes(todo?.color)
    }
    return true
  }

  const filterByStataus = (todo) => {
    switch (stataus) {
      case 'complete':
        return todo.isComplete

      case 'Incomplete':
        return !todo.isComplete

      default:
        return true
    }
  }

  return (
    <div>
      <div className="w-[700px] bg-slate-200 h-auto p-5 rounded-sm ">
        <Form />
        <div className="flex justify-between mt-2">
          <div onClick={allCompleteHandler} className="cursor-pointer flex">
            <div className={`w-7 h-7 rounded-full `}>
              <img width={`30px`} className="p-1" src={double_tick} alt="" />
            </div>
            <span className="">complete all task</span>
          </div>
          <button onClick={completeClear}>Clear Completed</button>
        </div>
        <br />
        <br />
        {/* all todo map for read */}
        {todos
          .filter(filterByStataus)
          .filter(filterByColor)
          .map((todo) => (
            <Todo img={cancel} todo={todo} key={todo.id} />
          ))}

        <Footer />
      </div>
    </div>
  )
}

export default Header_input_todoList
