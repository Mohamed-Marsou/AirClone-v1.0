import React from 'react';
import '../style/CardItems.css'
import * as Icons from "react-icons/all";
const CartItem = ({articles})=>{
    return (
        <div className="cardsContainer">
             {articles.map((article) => (
            <article key={article.id}>
                <a href="#">
                    <img src={article.image} alt="Article"/>
                </a>
                <a href="#">
                    <h4>Nantes , France</h4>
                </a>
                <p>Charming studio near the Eiffel Tower</p>
                <span>MAD 9525 total fee before tax</span>
                <small>
                    <Icons.AiFillStar/>
                    4.5
                </small>
                <a id='wishList' href="#">
                    <Icons.AiTwotoneHeart/>
                </a>
                <div className="ownerPicContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoDdyUGzcWTltc_HjeCVi7-2yGIOjHu3HsA&usqp=CAU" alt="" />
                </div>
            </article>
            ))}

            <div className="load_more">
                <form action="#" method="post">
                    <button>See more</button>
                </form>
            </div>
        </div>
    )
}
export default CartItem