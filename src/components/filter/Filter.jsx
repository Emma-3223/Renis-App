import React from 'react'
import '../../components/filter/filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>Search results <b>Kampala</b></h1>
            {/* top */}
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            {/* bottom */}
            <div className="bottom">


                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>




                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id='minPrice' name='minPrice' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id='maxPrice' name='maxPrice' placeholder='any' />
                </div>


                <div className="item">
                    <label htmlFor="bedroom">Bed Room</label>
                    <input type="text" id='bedroom' name='bedroom' placeholder='Bed Room' />
                </div>
                <div className="item">
                <label htmlFor="bedroom"></label>
                <button>
                    <img src="/search.png" alt="" />
                </button>
                </div>
               
            </div>
        </div>
    )
}

export default Filter