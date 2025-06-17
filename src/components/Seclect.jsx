import React, {useId}from 'react'

function Seclect({
  option,
  label,
  className,
  ...props
},ref){
  const id = useId();
  return(
    <div className='w-full'>
      {label && <label htmlFor='id' className=''></label>}
      <Seclect {...props}
      id = {id}
      ref = {ref}
      className={'px-3  py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-300 drop-shadow-blue-200 border-green-300 w-full ${classNmae}'}>
        {options?.mp((option) =>{
          <option key={option} value={option}>
            {option}
          </option>
        })}
      </Seclect>

    </div>
  )
}

export default React.forwardRef(Seclect);
