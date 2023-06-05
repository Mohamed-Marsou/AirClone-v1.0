import React from "react";
import bannerImg from "../assets/banner.jpg";
import  "../style/banner.css"
const Banner = ()=>{
    return(
        <div className="banner">
            <img src={bannerImg} alt="" />
            <div className="banner-text">
                <h1>Welcome to Your Dream Getaway: Unwind, Relax, and Feel at Home with Airbnb!</h1>
                <p>
                    Unlock the untapped potential of your home by renting it out with Airbnb. With millions of travelers seeking unique accommodations,
                    listing your home on Airbnb opens up a world of opportunities to earn extra income
                </p>
                <a href="#">
                    Discover more
                </a>
        </div>
        </div>
    )
}
export default Banner;