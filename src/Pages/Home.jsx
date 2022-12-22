import React from 'react'
import HomePageCard from '../Components/HomePageCard/HomePageCard'

const Home = () => {
  return <header>
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-10">
          <HomePageCard />
        </div>
      </div>
    </div>
  </header>
}

export default Home