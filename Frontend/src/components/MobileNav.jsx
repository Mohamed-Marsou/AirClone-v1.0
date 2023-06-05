import React from 'react';
import '../style/MobileNav.css'
import { BsSearch } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';


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
                    <BsSearch />
                </a>
                <a>
                    <p>Search</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <GiSelfLove />
                </a>
                <a href="#">
                    <p>wishlist</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <CgProfile />
                </a>
                <a href="#">
                    <p>Profile</p>
                </a>
            </li>
        </ul>
    )
}
export default MobileNav