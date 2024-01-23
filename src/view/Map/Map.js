import React from 'react'
import CardPage from '../../components/CardPage/CardPage'
import ConfigData from '../../components/Data/ConfigData.json'
import Navbar from '../../components/Navbar/Navbar'

export default function Map() {
    console.log(ConfigData);
  return (
    <>
    <Navbar/>
    <div className='d-flex flex-row justify-content-around'>
        {
          ConfigData.map((data, index) => {
            return (
              <div className='CardPage-card p-5'>
                <CardPage img={data.img} name={data.name} info={data.info} img2={data.img2} starttime={data.starttime} price={data.price} detail={data.detail}/>
              </div>
            )

          })
        }
      </div>

    </>
  )
}
