import React, { useState } from "react";
import note from "../../images/notes.png";
import plus from "../../images/plus.png";
import { useDispatch } from "react-redux";
import { added } from "../../redux/todos/action";

function Form() {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    // input controller
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    // submit handler 
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput('');
    };
    return (
        <div className="flex justify-around bg-white items-center rounded-sm shadow-2xl">
            <img
                width={"30px"}
                className="h-[30px]  border-none text-black"
                src={note}
                placeholder={"type add todo"}
                alt=""
            />
            <form onSubmit={submitHandler} action="">
                <input
                    className="outline-0 w-[550px] h-16"
                    placeholder="Type todo here"
                    onChange={inputHandler}
                    type="text"
                    name=""
                    required
                    value={input}
                />
            </form>
            <img
                width={"30px"}
                className="h-[30px]  border-none text-black"
                src={plus}
                placeholder={"type add todo"}
                alt=""
            />
        </div>
    );
};

export default Form;
