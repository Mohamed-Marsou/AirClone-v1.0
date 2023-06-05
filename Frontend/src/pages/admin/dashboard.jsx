import React, { useState } from "react";
import "../../style/dashboard.css"
import Logo from "../../assets/airbnb.png"
import { BiArrowToLeft } from 'react-icons/bi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiFileList3Line } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { BiMessageSquareDots } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import MainView from "../../components/dashboard/Main"
import AporoveListings from "../../components/dashboard/AporoveListings"
import Admins from "../../components/dashboard/admins"
import Listings from "../../components/dashboard/Listings"
import Messages from "../../components/dashboard/messages"
import Users from "../../components/dashboard/Users"

const Dashboard = () => {
    const [closed, setClosed] = useState(true);
    const handleClick = () => {
        const aside = document.querySelector('.aside');
        const mainBox = document.querySelector('.mainBox');
        const chartsContainer = document.querySelectorAll('.chartsContainer > div');

        setClosed(() => {
            setClosed(!closed);
        })
        aside.classList.toggle('closedAside');
        mainBox.classList.toggle('activeMain');
        chartsContainer.forEach(chart => {
            if (closed) {
                chart.style.width = "35vw";
                chart.style.hieght = "35vh";
            } else {
                chart.style.width = "40vw";
                chart.style.hieght = "40vh";
            }
        })
    }

    const [selectedComponent, setSelectedComponent] = useState("MainView");

    const handleItemClick = (component) => {
      setSelectedComponent(component);
    };
    return (
        <>
            <main className="mainContainer">
                <aside className="aside closedAside" >
                    <div className="logoWrapper">
                        <div className="img-w">
                            <a href="/">
                                <img className="logo" src={Logo} alt="logo" />
                            </a>
                            airClone
                        </div>
                        {closed ? (
                            <GiHamburgerMenu onClick={handleClick} />
                        ) : (
                            < BiArrowToLeft onClick={handleClick} />
                        )}
                    </div>

                    <div onClick={() => handleItemClick('MainView')} className="slot fs">
                        <a>
                            <BiHomeAlt2 title="Main" />
                        </a>
                        <a>
                            main
                        </a>
                    </div>
                    <div onClick={() => handleItemClick('AporoveListings')} className="slot">
                        <a>
                            <AiOutlineFileSearch title="Aprove Listings" />
                        </a>
                        <a>
                            Aprove listings
                        </a>
                    </div>
                    <div onClick={() => handleItemClick('Listings')} className="slot">
                        <a>
                            <RiFileList3Line title="Listings" />
                        </a>
                        <a>
                            Listings
                        </a>
                    </div>
                    <div onClick={() => handleItemClick('Users')} className="slot">
                        <a>
                            <FiUsers title="Users" />
                        </a>
                        <a>
                            Users
                        </a>
                    </div>
                    <div onClick={() => handleItemClick('Messages')} className="slot">
                        <a>
                            <BiMessageSquareDots title="Messages" />
                        </a>
                        <a>
                            Messages
                        </a>
                    </div>
                    <div onClick={() => handleItemClick('Admins')} className="slot">
                        <a>
                            <MdOutlineAdminPanelSettings title="admins" />
                        </a>
                        <a>
                            Admins
                        </a>
                    </div>

                    <div className="logOut">
                        <a href="#"><AiOutlineLogout title="Logout" /></a>
                        <a href="#">Logout</a>
                    </div>
                </aside>
                <div className="mainBox">
                    <header>
                        <AiOutlineSearch />
                        <div className="adminContainer">
                            <div className="nw">
                                <div className="noti">
                                    <a href="#">
                                        <IoMdNotifications />
                                        <p>2</p>
                                    </a>
                                </div>
                                <div className="msgs">
                                    <a href="#">
                                        <TbMessageCircle2Filled />
                                        <p>5</p>
                                    </a>
                                </div>
                            </div>
                            <div className="admin">

                                <div className="pw">
                                    <p>Welecom MTM </p>
                                    <img src="https://images.bfmtv.com/Gu2qrv-LRcjY8eKjoCU5QKGsC6Y=/0x40:768x472/768x0/images/Pierre-Person-en-2017-a-Paris-399285.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="globalBox">
                    {selectedComponent === 'MainView' && <MainView />}
                    {selectedComponent === 'AporoveListings' && <AporoveListings />}
                    {selectedComponent === 'Admins' && <Admins />}
                    {selectedComponent === 'Listings' && <Listings />}
                    {selectedComponent === 'Users' && <Users/>}
                    {selectedComponent === 'Messages' && <Messages/>}
                    </div>
                </div>
            </main>
        </>
    )
}
export default Dashboard