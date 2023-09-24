import React from 'react'

const Button = ({btnText, gradient, buttonClasses, onClick}) => {

  const handleClick = () => {
    onClick();
  }  

  return (
    <button type="button" className={`${gradient}
      ${buttonClasses}
      uppercase
      h-fit
      hover:bg-gradient-to-br 
      focus:ring-4 
      focus:outline-none 
      shadow-lg 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  )
}

export default Button