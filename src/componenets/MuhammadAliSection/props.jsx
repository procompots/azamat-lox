import React from 'react'
import './props.css'
function Props(props) {
  return (
    <>
      <div className="cardus">
        <img src={props.img} alt="" />
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </div>
    </>
  )
}

export default Props
