import React, { useState } from 'react';
import '../style/CardItems.css'
import * as Icons from "react-icons/all";
import africa from "../assets/map/africa--middle-east2x-50.jpg"
import america from "../assets/map/americas2x-50.jpg"
import asia from "../assets/map/asia-pacific-2x-50.jpg"
import europe from "../assets/map/europe2x-50.jpg"
import glob from "../assets/map/JrxsrQsrl8KD88mosyxQf_1wCL08hN9W.jpg"
const CartItem = ({ articles }) => {

    const handleOpen = () => {
        const body = document.body;
        
        window.scrollTo({
            top: document.getElementById('nav').offsetTop,
            behavior: 'smooth',
        });
        
        const filterBtn = document.querySelector('.Filter');
        const filterContainer = document.querySelector('.filter_container');
        
        setTimeout(() => {
            filterBtn.classList.toggle('hide');
            filterContainer.classList.toggle('hide');
            body.style.overflowY = 'hidden';
        }, 500);
      };

    const handleClose = () => {
        const filterBtn = document.querySelector('.Filter')
        const filterContainer = document.querySelector('.filter_container')
        const body = document.body;
        body.style.overflowY = 'scroll';

        setTimeout(() => {
            filterBtn.classList.toggle('hide')
            filterContainer.classList.toggle('hide')
        },100)
    }

    return (
        <div className="cardsContainer">
            {articles.map((article) => (
                <article key={article.id}>
                    <a href="#">
                        <img src={article.image} alt="Article" />
                    </a>
                    <a href="#">
                        <h4>Nantes , France</h4>
                    </a>
                    <p>Charming studio near the Eiffel Tower</p>
                    <span>MAD 9525 total fee before tax</span>
                    <small>
                        <Icons.AiFillStar />
                        4.5
                    </small>
                    <a id='wishList' href="#">
                        <Icons.AiTwotoneHeart />
                    </a>
                    <div className="ownerPicContainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoDdyUGzcWTltc_HjeCVi7-2yGIOjHu3HsA&usqp=CAU" alt="" />
                    </div>
                </article>
            ))}

            <div className="load_more">
                <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                    <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none">Previous</p>
                        </div>
                        <div className="sm:flex hidden">
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                        </div>
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <p className="text-sm font-medium leading-none mr-3">Next</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Filter" onClick={handleOpen}>
                <Icons.FiFilter />
                Filter
            </div>
            <div className="filter_container hide ">
                <div className="filter_options">
                    <h1 className="title">
                        Filter for the best results
                    </h1>
                    <div className="slot">
                        <p>Where</p>
                        <div className="mapContainer">
                            <img src={glob} title="I'm felxible" alt="felxible" />
                            <img src={africa} title="Africa" alt="Africa" />
                            <img src={america} title="America" alt="America" />
                            <img src={europe} title="Europe" alt="Europe" />
                            <img src={asia} title="Asia" alt="Asia" />
                        </div>
                    </div>
                    <div className="slot">
                        <p>Who</p>
                        <div className="boxes">
                            <div className="box active_bx">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                            <div className="box">7+</div>
                        </div>
                    </div>
                    <form action="#" method="post">
                        <button type="submit">
                            Search
                        </button>
                    </form>
                    <div className="close" onClick={handleClose}>
                        <Icons.MdClose />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem