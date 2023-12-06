import React, { useState } from "react"
import './Products.css'
import server from '../../../../server.json'
import { NavLink } from "react-router-dom"
import start_half from '../../../Pictures/star_half.svg'


const Products = ({ productItems }) => {
    const [like, setLike] = useState(false);

    return (
        // <div className="box">
        <>
            {productItems.map(item => (
                <NavLink to={`/products/${item.id}`} className="healthyProduct" key={item.id}>
                    <div className="healthyProduct__inner">
                        <div className="product-img">
                            <img src={`${server.server}/${item.thumbnail}`} alt="" />
                            <button
                                onClick={() => {
                                    setLike((l) => !l);
                                    <NavLink to={`/products`} ></NavLink>                                   /// NEED FIX
                                }}
                                className="product-favorite">
                                <i className="fa-regular fa-heart heart_i">
                                    <div className={like ? 'heart_fill fill' : 'heart_fill'}></div>
                                </i>
                            </button>
                        </div>
                        <h4 className='product-name'>{item.title_tm}</h4>
                        <p className='product-desc'>{item.description_tm}</p>
                        <span className='product-price'>{item.price} TMT</span>
                        <div className="product-details">
                            <div className="healthyProduct-rate">
                                <img className="star" src="src/Pictures/star.svg" alt="" />
                                <img className="star" src="src/Pictures/star.svg" alt="" />
                                <img className="star" src="src/Pictures/star.svg" alt="" />
                                <img className="star" src="src/Pictures/star.svg" alt="" />
                                <img className="star" src={start_half} alt="" />
                                <span className='star-bal'>{item.star}</span>
                            </div>
                            <button className="btn-buy">
                                <img src="src/Pictures/basket.svg" alt="" />
                                <span>Sebede goş</span>
                            </button>
                        </div>
                    </div>
                </NavLink>
            ))}
        </>
        // </div >
    )
}

export default Products;