import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import '../../components/pin/pin.scss'

function Pin({ item }) {

    return (

        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title} - <b>{item.address}</b> </Link>
                        <span className="bed">{item.bedRoom} Bedrooms</span>
                        <b>Ush. {item.price} /=</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin