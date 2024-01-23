import React from 'react'


function CardPage({ img, name, info, img2, starttime, price, detail }) {
  return (
    <div>
      <center>
        <div ClassName="card" style={{ width: '400px' }}>
          <img src={img} ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h3 ClassName="card-title">{name}</h3>
            <p ClassName="card-text">{info}</p>
            <div className="d-flex flex-row">
              <img src={img2} className="h-25" />
              <p className="card-text">
                {starttime}
              </p>
            </div>
            <p className="fs-2">
              Only at {price}
            </p>
          </div>
          <b>{detail}</b>
          <hr/>
          <button className="btn bg-dark text-white ">Know More</button>
          
        </div>
      </center>
    </div>
  )
}

export default CardPage
