import React from 'react';
import '../style/MobileNav.css'
import * as Icons from "react-icons/all";

const MobileNav = () => {
    const scrollToNavActions = () => {
        const navActionsElement = document.getElementById("navSearch");
        if (navActionsElement) {
            navActionsElement.scrollIntoView({ behavior: "smooth" });
            navActionsElement.focus();
        }
    };


    return (
        <ul className='mobileNav'>
            <li onClick={scrollToNavActions}>
                <a>
                    <Icons.BsSearch />
                </a>
                <a>
                    <p>Search</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <Icons.GiSelfLove />
                </a>
                <a href="#">
                    <p>wishlist</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <Icons.CgProfile />
                </a>
                <a href="#">
                    <p>Profile</p>
                </a>
            </li>
        </ul>
    )
}
export default MobileNav