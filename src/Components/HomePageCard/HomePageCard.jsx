import React from 'react'
import "../../Styles/Home_Page_Card/home_page_card.css";
import img from "../../assets/home_card_img.jpg"
const HomePageCard = () => {
  return <div className="home_page_card">
    <div className="card_img">
        <img src={img} alt={Date()} />
    </div>
  </div>
}

export default HomePageCard