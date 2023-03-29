import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='Button' onClick={handleNewQuote}></button>
  )
};

export default Button

