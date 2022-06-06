import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./FavoriteProduct.css";

const FavoriteProduct = () => {
    // const [hover, setHover] = useState(0);
    return (
        <div className='containers'>
            <div className='title-container'>
                <p className='title-best-selling'>SẢN PHẨM YÊU THÍCH</p>
            </div>
            <div className='favorite-product-container'>
                <div className='favorite-product-card1'>
                    <div className='img-bg1'>
                        <img src='../../ImgProduct/Bg_1.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product1'>
                        <img src='../../ImgProduct/FavoriteProduct1.png' alt='Img favorite product'></img>
                    </div>

                </div>

                <div className='favorite-product-card2'>
                    <div className='img-bg2'>
                        <img src='../../ImgProduct/Bg_2.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product2'>
                        <img src='../../ImgProduct/FavoriteProduct2.png' alt='Img favorite product'></img>
                    </div>
                </div>

                <div className='favorite-product-card3'>
                    <div className='img-bg3'>
                        <img src='../../ImgProduct/Bg_3.png' alt='Img-bg'></img>
                    </div>
                    <div className='img-favorite-product3'>
                        <img src='../../ImgProduct/FavoriteProduct3.png' alt='Img favorite product'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};


FavoriteProduct.propTypes = {

};


export default FavoriteProduct;
