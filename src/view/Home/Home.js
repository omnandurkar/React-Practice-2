import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


export default function Home() {


  function Button1({ btnName, btnFunction }) {
    return (
      <>
        <div class=" flex ">
          <div class=" z-10">
            <button
              type='button'
              onClick={{ btnFunction }}
              class="relative border-2 text-sm border-blue-600 bg-transparent rounded text-black py-2 hover:shadow-lg hover:drop-shadow px-5 font-semibold uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              {btnName}
            </button>
          </div>
        </div>
      </>
    )
  }

  function Button2({ btnName, btnFunction }) {
    return (
      <>
        <div class=" flex ">
          <div class=" z-10">
            <button
              type='button'
              onClick={{ btnFunction }}
              class="relative border-2 text-sm border-blue-600 hover:shadow-lg hover:drop-shadow rounded bg-transparent px-5 font-semibold  text-black py-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-blue-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">
              {btnName}
            </button>
          </div>
        </div>
      </>
    )
  }




  return (

    <>
      <Navbar />
      <h1>This Is Home Page</h1>

      <Button1 btnName="Button One" />
      <Button2 btnName="Button Two" />
    </>
  )
}


