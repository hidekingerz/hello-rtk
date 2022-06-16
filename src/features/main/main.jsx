import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./mainSlice";


export function Main() {
  const count = useSelector((state) => state.main.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}
