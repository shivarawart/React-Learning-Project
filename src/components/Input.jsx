import React ,{useId}from 'react'

const Input =React.forwardRef( function Input({
    label,
    type= "text",
    classNmae = "",
    ...prps
},ref){
return (
  <div>
    { label && <label 
    className='block mb-1' 
    htmlFor={props.id}>
        {label} 
    </label>}
    <inputt type={type}
    className= 'px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full &{className} ' ref={ref }
    {...prps} id={id} />
  </div>
)
}) 


export default Input
