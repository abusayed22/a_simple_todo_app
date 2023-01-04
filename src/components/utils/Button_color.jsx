import React from "react";

function Button_color({ wid, bg_color }) {
  return (
    <div>
      {/* <div className={`rounded-full bg-white border-2 border-gray-400 w-${wid} h-${wid} flex flex-shrink-0 justify-center items-center mr-2 border-${'bg_color'} focus-within:border-${'bg_color'}`}>
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className={`hidden fill-current w-${wid} h-${wid} text-${'bg_color'} pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div> */}
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      
    </div>
  );
}

export default Button_color;
