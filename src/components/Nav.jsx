import React, { useState } from "react";
import "../style/nav-footer.css";
import logo from "../assets/airbnb.png";
import FR from "../assets/france.png";
import EN from "../assets/royaume-uni.png";
import * as Icons from "react-icons/all";

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showLang, setShowLang] = useState(false);

    const handleProfileClick = () => {
        setShowLinks(!showLinks);
        if(showLang){
            setShowLang(false);
        }
    };
    const handleLangVis = () => {
        setShowLang(!showLang);
        if(setShowLinks){
            setShowLinks(false);
        }
    };

    return (
        <nav id="nav">
            <div className="navActions">
                <a href="/">
                    <img src={logo} alt="" />
                    <p>airClone</p>
                </a>
                <div className="searchInput">
                    <form action="#">
                        <input type="search" id="navSearch" name="navSearch" placeholder="Look it up ..." />
                        <div className="svgWrapper">
                            <button>
                                <Icons.FaSearchLocation />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="userWrapper">
                    <a href="#">Airbnb your home</a>
                    <div className="language" onClick={handleLangVis}>

                        <span id="lang" title="language" > 
                            <Icons.BsGlobe />
                        </span>
                       
                        <div className= {`lang_wrpper ${showLang ? "lanVisual" : ""}`} >
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={EN} alt="en" />
                                    </a>
                                   <a href="#">
                                        English
                                   </a>
                                </li>
                                <hr/>
                                <li>
                                    <a href="#">
                                        <img src={FR} alt="fr" />
                                    </a>
                                        <a href="#">
                                            French
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profileContainer" onClick={handleProfileClick}>
                        <Icons.GiHamburgerMenu />
                        <div className="userProfile">
                            <Icons.FaUserCircle />
                        </div>

                        <div className={`linksContainer ${showLinks ? "showMe" : ""}`}>
                            <ul>
                                <li>
                                    <a href="/login">Login</a>
                                </li>
                                <li>
                                    <a href="/register">Sign up</a>
                                </li>
                                <hr />
                                <li>
                                    <a href="">Airbnb your home</a>
                                </li>
                                <li>
                                    <a href="">Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories">
                <li>
                    <a href="#">
                        <Icons.MdBeachAccess/>
                        Beach
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.FaSwimmingPool/>
                        Pools
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.AiTwotoneFire/>
                        Trending
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.SiExpensify/>
                        Luxe
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.GiWoodCabin/>
                        Cabins
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.AiFillEye/>
                        views
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.MdBedroomParent/>
                        Rooms
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.IoBoatSharp/>
                        Boats
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icons.GiIsland/>
                        Island
                    </a>
                </li>
            </div>
        </nav>

    );
};

export default Nav;
