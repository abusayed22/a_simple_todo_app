/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Button_color from "../utils/Button_color";
import Button_img from "../utils/Button_img";


function Todo({ img }) {
  return (
    <div>
      <div className="flex justify-between bg-slate-200 border-b border-gray-400/20 py-2">
        <Button_color wid={5} bg_color={"green-500"} />
        <p className="line-through">hello test todo</p>
        <div className="flex items-center justify-end">
          <Button_color wid={5} bg_color={'green_c'} />
          <Button_color wid={5} bg_color="orange-500" />
          <Button_color wid={5} bg_color="red-500" />
          <Button_img wed='30' border_color="slate-900" button_font={img} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
