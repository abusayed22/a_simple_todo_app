/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import cancel from '../../images/cancel.png'
import { useDispatch } from 'react-redux'
import { colorChange, deleted, toggled } from '../../redux/todos/action'

function Todo({ todo }) {
  const { id, text, isComplete, color } = todo
  const dispatch = useDispatch()

  // handler function

  // deleteHandler
  const deleteHandler = (todoId) => {
    dispatch(deleted(todoId))
  }

  // toggledHandler
  const toggledHandler = (todoId) => {
    dispatch(toggled(todoId))
  }

  // colorChangHandler
  const colorChangeHandler = (todoId, color) => {
    dispatch(colorChange(todoId, color))
  }
  return (
    <div>
      <div className="flex justify-between bg-slate-200 border-b border-gray-400/20 py-2">
        <div
          className={`rounded-full  bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${isComplete && 'border-green-500 focus-within:border-green-500'
            }`}
        >
          <input
            type="checkbox"
            checked={isComplete}
            onChange={() => toggledHandler(id)}
            className="opacity-0 absolute rounded-full"
          />
          {isComplete && (
            <svg
              className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <p className={`${isComplete && 'line-through'}`}>{text}</p>
        <div className="flex items-center justify-end">
          <div
            onClick={() => colorChangeHandler(id, 'green')}
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'green' && 'bg-green-500'
              } border-green-500 hover:bg-green-500 transition-colors`}
          ></div>

          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'yellow' && 'bg-amber-500'
              } border-amber-400 hover:bg-amber-500 transition-colors`}
            onClick={() => colorChangeHandler(id, 'yellow')}
          ></div>
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'red' && 'bg-red-600'
              } border-red-500 hover:bg-red-500 transition-colors`}
            onClick={() => colorChangeHandler(id, 'red')}
          ></div>

          <button
            onClick={() => deleteHandler(id)}
            className={`w-30 h-wed rounded-full`}
          >
            <img width={`30px`} className="p-1" src={cancel} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
