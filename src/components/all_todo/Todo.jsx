/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Button_color from "../utils/Button_color";
import Button_img from "../utils/Button_img";

function Todo({ img, todo }) {
  const { id, text, isComplete, color } = todo;
  return (
    <div>
      <div className="flex justify-between bg-slate-200 border-b border-gray-400/20 py-2">
        <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
          <input type="checkbox" class="opacity-0 absolute rounded-full" />
          {isComplete && (
            <svg
              class=" fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <p className={`${isComplete && "line-through"}`}>{text}</p>
        <div className="flex items-center justify-end">
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
              color === "green" && "bg-green-500"
            } border-green-500 hover:bg-green-500 transition-colors`}
          ></div>

          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
              color === "yellow" && "bg-amber-500"
            } border-amber-400 hover:bg-amber-500 transition-colors`}
          ></div>
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
              color === "red" && "bg-red-500"
            } border-red-500 hover:bg-red-500 transition-colors`}
          ></div>

          <Button_img wed="30" border_color="slate-900" button_font={img} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
