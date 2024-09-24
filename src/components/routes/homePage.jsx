import React from 'react'
import './homePage.scss'
import SearchBar from '../searchBar/SearchBar';

function HomePage() {
  return (
    <div className="homePage">
      {/* left side  */}
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className='title'>Home Sweet Home <br/><i className='rent'>RENT</i>  or <i className='buy'>BUY</i></h1>

          <p className="description">
            your ultimate app for discovering the perfect rental.
            With an intuitive interface, you can easily browse
            listings tailored to your lifestyle. Whether you're
            seeking a cozy apartment or a spacious house, our
            extensive database has something for everyone
          </p>
          <SearchBar />
          <div className="boxes">
            {/* box 1 */}
            <div className="box">
              <h1>15,000</h1>
              <h2>Ready Property Listings</h2>
            </div>

            {/* box 2 */}
            <div className="box">
              <h1>10,000+</h1>
              <h2>Clients</h2>
            </div>

            {/* box 3 */}
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Operations</h2>
            </div>


          </div>
        </div>
      </div>

      {/* right side */}
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage;