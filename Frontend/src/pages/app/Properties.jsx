import React from "react";
import Nav from "../../components/Nav.jsx";
import MobileNav from "../../components/MobileNav.jsx"
import Footer from "../../components/Footer.jsx"
// import Swiper 
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
import "../../style/Properties.css"
//date picker 
import { DatePicker, FlexboxGrid, InputGroup } from 'rsuite';
//dropdown menu
import { Dropdown } from 'rsuite';



const Properties = () => {
    return (<>
        <Nav />
        <MobileNav />
        <div className="container">
            <div className="prop-title">
                <h1 className="color">T2 Sea front Quarteira Algarve. 30 m2 terrace</h1>
                <div>
                    <div className="review">
                        <i class="fa-solid fa-star"></i>
                        <h2>4.9  .</h2>
                        <a href="">280 reviews .</a>
                        <i class="fa-solid fa-medal"></i> 
                        <h2>superhost  .</h2>
                        <a href="">Quarteira, Faro, Portugal</a>
                    </div>
                    <div className="share">
                        <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                        <h2>share</h2>
                        <i class="fa-regular fa-heart"></i>
                        <h2>save</h2>
                    </div>
                </div>
                
            </div>
            <div class="angry-grid">
                <div id="item-0">
                    <img src="./src/assets/prop images/1.jpg" alt="" />
                </div>
                <div id="item-1">
                    <img src="./src/assets/prop images/2.jpg" alt="" />
                </div>
                <div id="item-2">
                    <img src="./src/assets/prop images/3.jpg" alt="" />
                </div>
                <div id="item-3">
                    <img src="./src/assets/prop images/4.jpg" alt="" />
                </div>
                <div id="item-4">
                    <img src="./src/assets/prop images/5.jpg" alt="" />
                </div>
            </div>
            <div className="description">
                <div className="description-info">
                    <div>
                        <div>
                            <h1 className="color">Entire home hosted by Ruralidays</h1>
                            <p>15 guests . 6 bedrooms. 10 beds . 3 baths</p>
                        </div>
                        <img src="./src/assets/prop images/logo.jpg" alt="" />
                    </div>
                    <div>
                        <div>
                            <i class="fa-solid fa-stairs color"></i>
                            <div>
                                <h1 className="color">Dive right in</h1>
                                <p>This is one of the few places in the area with a pool.</p>
                            </div>
                        </div>
                        <div>
                            <i class="fa-regular fa-star color"></i>
                            <div>
                                <h1 className="color">Experienced host</h1>
                                <p>Ruralidays has 342 reviews for other places.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Holiday House for 15 people in Prado del Rey, in the province of Cádiz, Andalusia.</p>
                        <b>The space</b>
                        <p>Located between the Jerez countryside and the Serranía de Grazalema, it is a municipality included in the Ruta de los Pueblos Blancos de Cádiz.</p>
                        <p>...</p>
                        <div>
                            <b><a className="color" href="">show more</a></b>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="swipper">
                        <h1 className="color">Where you'll sleep</h1>
                        <Swiper
                        className="mySwiper"
                        modules={[Navigation]}
                        navigation
                        slidesPerView={3}
                        spaceBetween={15}
                        freeMode
                        >
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <i class="fa-solid fa-bed color"></i>
                                <p className="title color">bedroom 1</p>
                                <p>1 double bed</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="offer">
                        <h1 className="color">What this place offers</h1>
                        <div className="offers-container">
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                            <div className="offer-container">
                                <i class="fa-solid fa-kitchen-set color"></i>
                                <p>kitchen</p>
                            </div>
                        </div>
                        <button className="btn">show all 24 amenities</button>
                    </div>
                    <div className="date">
                        <div>
                        <h1 className="color">choose your date</h1>
                        <h5 className="color">Select check-in date</h5>
                        <p>Add your travel dates for exact pricing</p>
                        </div>
                        <InputGroup style={{ width: 428 }}>
                            <DatePicker format="yyyy-MM-dd" block appearance="subtle" style={{ width: 230 }} />
                            <InputGroup.Addon>至</InputGroup.Addon>
                            <DatePicker format="yyyy-MM-dd" block appearance="subtle" style={{ width: 230 }} />
                        </InputGroup>
                        <div className="date-actions">
                            <i class="fa-regular fa-keyboard date-actions-hover"></i>
                            <a className="date-actions-hover" href=""> clear dates</a>
                        </div>
                    </div>
                </div>
                <div className="priceContainer">
                    <div className="price">
                        <div className="pr">
                            <div>
                            <h4>MAD867</h4>
                            <p>night</p>
                            </div>
                            <div className="star">
                                <i class="fa-solid fa-star"></i>
                                <p>4.9 .</p>
                                <h4>20 reviews</h4>
                            </div>
                        </div>
                        <div>
                            <InputGroup
                                style={{
                                width: 290,
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin: 0,
                                border: '1px solid #d3d3d3',
                                }}
                            >
                                <div
                                style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRight: '1px solid #ccc',
                                    paddingLeft: '10px',
                                    margin: 0,
                                }}
                                >
                                <p
                                    style={{
                                    marginTop: '5px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    alignSelf: 'flex-start',
                                    paddingLeft: '0.2rem',
                                    marginBottom: '0',
                                    }}
                                >
                                    Check-in
                                </p>
                                <DatePicker format="yyyy-MM-dd" block appearance="subtle" style={{ width: '100%', marginTop: '0' }} />
                                </div>
                                <div
                                style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderLeft: '1px solid #ccc',
                                    paddingLeft: '10px',
                                    margin: 0,
                                }}
                                >
                                <p
                                    style={{
                                    marginTop: '5px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    alignSelf: 'flex-end',
                                    paddingRight: '0.5rem',
                                    marginBottom: '0',
                                    }}
                                >
                                    Checkout
                                </p>
                                <DatePicker format="yyyy-MM-dd" block appearance="subtle" style={{ width: '100%', marginTop: '0'}} />
                                </div>
                            </InputGroup>
                        </div>
                        <div className="dpd">
                            <Dropdown className="dropdown" title="GUESTS">
                                <Dropdown.Item>
                                    <div className="drp-cont">
                                        <div className="guest">
                                            <h6>adults</h6>
                                            <p>age 13+</p>
                                        </div>
                                        <div className="drp-content">
                                            <i class="fa-solid fa-minus"></i>
                                            <p>0</p>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <div className="drp-cont">
                                        <div className="guest">
                                            <h6>children</h6>
                                            <p>age 2-12</p>
                                        </div>
                                        <div className="drp-content">
                                            <i class="fa-solid fa-minus"></i>
                                            <p>0</p>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <div className="drp-cont">
                                        <div className="guest">
                                            <h6>infants</h6>
                                            <p>under 2</p>
                                        </div>
                                        <div className="drp-content">
                                            <i class="fa-solid fa-minus"></i>
                                            <p>0</p>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <button className="check-btn">check availability</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>)
}

export default Properties