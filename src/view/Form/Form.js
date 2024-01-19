import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function Form() {
    const [fullName , setFullName] = useState('');


  return (
    <>
    <Navbar/>
    <div>Form</div>

    <form className="form">
        <h3>Full Name = {fullName}</h3>
        <input
         type='text' 
         placeholder='Full Name'
         onChange={(e) => {
            setFullName(e.target.value )
         }}

         value={fullName}

        />
    </form>

    </>
  )
}
