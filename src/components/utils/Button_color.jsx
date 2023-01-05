import React from "react";

function Button_color(props) {
  const {wid, bg_color} = props;
  return (
    <div>
      <div className={`rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-${'green-500'} focus-within:border-${bg_color}`}>
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className={`hidden fill-current w-3 h-3 text-${bg_color} pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
    </div>
  );
}

export default Button_color;
