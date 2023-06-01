import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MobileNav from "../../components/MobileNav";
import "../../style/contact.css";
const Contact = () => {
    return (
        <div className="myMain">
            <Nav />
            <div className="c-u-container">
                <h1>Get in touch</h1>

                <p>
                    We're here for you, and we're wearing our thinking caps.
                    But first swing by our fantastic
                    <span>
                        Help Center
                    </span> for all your InVision product
                    and technical needs!
                </p>
            </div>
            <div className="myFormConatiner">
                <form >
                    <div className="mb-4">
                        <label htmlFor="fname" className="block text-gray-700 text-sm font-bold mb-2"> First Name</label>
                        <input id="fname" type="text" className="border border-gray-400 p-2 w-full rounded" placeholder="Enter your First Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2"> Last Name</label>
                        <input id="lname" type="text" className="border border-gray-400 p-2 w-full rounded" placeholder="Enter your Last Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input id="email" type="email" className="border border-gray-400 p-2 w-full rounded" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2"> Last Name</label>
                        <select name="topic" id="topic">
                            <option value="" disabled selected>Select a topic</option>
                            <option value="booking">Booking Inquiry</option>
                            <option value="cancellation">Cancellation</option>
                            <option value="payment">Payment Issue</option>
                            <option value="listing">Listing Inquiry</option>
                            <option value="account">Account Assistance</option>
                            <option value="feedback">Feedback or Suggestions</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea id="message" className="border border-gray-400 p-2 w-full rounded" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>

            <MobileNav />
            <Footer />
        </div>
    )
}

export default Contact;