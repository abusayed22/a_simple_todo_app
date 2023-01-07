import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChange, statausChange } from '../../redux/fillters/action'

function Footer() {
  const todos = useSelector((state) => state.todos)
  const fillters = useSelector((state) => state.fillters)

  const dispatch = useDispatch()

  const { stataus, color } = fillters

  // how much number of task
  const number_of_task = todos.filter((fillter) => !fillter.isComplete).length

  // how much task due
  const person = (number_of_task) => {
    switch (number_of_task) {
      case 0:
        return 'No Task!'

      case 1:
        return `${number_of_task} Task Left`

      default:
        return `${number_of_task} Tasks Left`
    }
  }

  // stataus change hander
  const statausHandler = (value) => {
    dispatch(statausChange(value))
  }

  // color change handler
  const colorChangeHander = (colorValue) => {
    if (color.includes(colorValue)) {
      dispatch(colorChange(colorValue, 'remove'))
    } else {
      dispatch(colorChange(colorValue, 'add'))
    }
  }

  return (
    <div className="flex justify-between mt-8">
      <p className="first-letter:text-purple-600 text-xl">
        {person(number_of_task)}
      </p>
      <div className="flex items-center justify-end">
        <div className="flex space-x-1">
          <p
            onClick={() => statausHandler('All')}
            className={`text-md cursor-pointer ${
              stataus === 'All' && 'text-purple-600'
            }`}
          >
            All
          </p>
          <span>|</span>
          <p
            onClick={() => statausHandler('Incomplete')}
            className={`text-md cursor-pointer ${
              stataus === 'Incomplete' && 'text-purple-600'
            }`}
          >
            Incomplete
          </p>
          <span>|</span>
          <p
            onClick={() => statausHandler('complete')}
            className={`text-md cursor-pointer ${
              stataus === 'complete' && 'text-purple-600'
            }`}
          >
            complete
          </p>
        </div>
        <div className="flex ml-5">
          <div
            onClick={() => colorChangeHander('green')}
            className={` rounded cursor-pointer bg-white border-2 w-5 h-5 flex flex-shrink-0 ${
              color.includes('green') && 'bg-green-500'
            } justify-center items-center mr-2  border-green-500 hover:bg-green-500 transition-colors`}
          ></div>
          <div
            onClick={() => colorChangeHander('red')}
            className={`rounded cursor-pointer border-2 w-5 h-5 flex flex-shrink-0 ${
              color.includes('red') && 'bg-red-500'
            } justify-center items-center mr-2  border-red-500 hover:bg-red-500 transition-colors`}
          ></div>

          <div
            onClick={() => colorChangeHander('yellow')}
            className={` rounded cursor-pointer bg-white border-2 w-5 h-5 flex flex-shrink-0 ${
              color.includes('yellow') && 'bg-amber-500'
            } justify-center items-center mr-2  border-amber-500 hover:bg-amber-500 transition-colors`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
