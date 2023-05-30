import React from "react"
import "../style/login.css"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Logo from "../assets/airbnb.png"

const Login = () => {
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
                                <div className="checkboxContainer">
                                    <input type="checkbox" id="RememberMe" className="checkbox" /> <label for="RememberMe">Remember
                                        me</label>
                                </div>
                                <a href="#" className="ForgotPasswordLink">Forgot Password?</a>
                            </div>
                            <button className="LoginButton">Login</button>
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

export default Login