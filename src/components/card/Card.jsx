import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/card/card.scss'


function Card({ item }) {
  return (
    <div className="card">

      {/* IMAGE */}
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="" />
      </Link>

      {/* TEXT CONTAINER */}
      <div className='textContainer'>

        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">
          Ughs. <b className='boldness'>{item.price} /=</b>
        </p>


        {/* bottom */}
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt="" />
              <span>{item.bedroom} Bedroom</span>
            </div>

            <div className="feature">
              <img src="./bath.png" alt="" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>

          {/* icons */}
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>

            <div className="icon">
            <img src="/chat.png" alt="" />
          </div>
          </div>
          
        </div>

        {/* icons */}





      </div>
    </div>
  )
}

export default Card