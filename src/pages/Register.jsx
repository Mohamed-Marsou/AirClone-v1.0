import React from "react"
import "../style/login.css"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Logo from "../assets/airbnb.png"

const Register = () => {
    return (
        <>
        <Nav/>
        <div classNameName="LoginPageContainer">
            <div className="LoginPageInnerContainer">
                <div className="ImageContianer">
                    <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" />
                </div>
                <div className="LoginFormContainer">
                    <div className="LoginFormInnerContainer">
                        <div className="LogoContainer">
                            <img src={Logo}  className="logo" />
                        </div>
                        <header className="header">Log in</header>
                        <header className="subHeader">Welcome to <b>AirClone</b> Please Enter your Details</header>

                        <form>
                            <div className="inputContainer">
                                <label className="label" for="emailAddress"><i class="fa-regular fa-user p-2"></i><span>User Name*</span></label>
                                <input type="text" className="input" id="emailAddress" placeholder="Enter your Name" />
                            </div>
                            <div className="inputContainer">
                                <label className="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" /><span>Email
                                    Address*</span></label>
                                <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address" />
                            </div>
                            <div className="inputContainer">
                                <label className="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                    className="labelIcon" /><span>Password*</span></label>
                                <input type="password" className="input" id="emailAddress" placeholder="Enter your Password" />
                            </div>
                            <div className="OptionsContainer">
                                
                                <a href="/login" className="ForgotPasswordLink">Already with an account?</a>
                            </div>
                            <button className="LoginButton">register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <MobileNav/>
        </>
    )
}

export default Register