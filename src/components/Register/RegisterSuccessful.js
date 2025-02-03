import React from 'react'

export default function RegisterSuccessful() {
  return (
    <div className='align-items-center'>  
      <h1 className='text-center bg-light text-success'> Registration Successful..!</h1><br/>
      <h5 className='text-center'>Now you can <a href='/login'>Login.</a></h5>
    </div>
  )
}
