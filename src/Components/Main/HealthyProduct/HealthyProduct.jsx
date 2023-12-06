import React from 'react'
import Slider from 'react-slick'
import '../../Common/Productss/Products.css'
import s from './HealthyProduct.module.css'
import server from '../../../../server.json'
import { NavLink } from 'react-router-dom'
import star from '../../../Pictures/star.svg'
import star_half from '../../../Pictures/star_half.svg'

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

const HealthyProduct = ({ productItems }) => {
    const settings = {
        dots: false,
        infinity: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <>
            <section className={s.section__healthyProduct}>
                <h2 className={s.healthy_caption}>Healthy Product</h2>
                <div className="products">
                    <Slider {...settings} >
                        {/* <Products productItems={productItems} /> */}
                        {productItems.map(item => (
                            // <div className="box">
                            <NavLink to={`/products/${item.id}`} className="healthyProduct" key={item.id}>
                                <div className="healthyProduct__inner">
                                    <div className="product-img">
                                        <img src={`${server.server}/${item.thumbnail}`} alt="" />
                                        <button className="product-favorite">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>
                                    <h6 className='product-name'>{item.title_tm}</h6>
                                    <p className='product-desc'>{item.description_tm}</p>
                                    <span className='product-price'>{item.price} TMT</span>
                                    <div className="product-details">
                                        <div className="healthyProduct-rate">
                                            <img className="star" src={star.svg} alt="" />
                                            <img className="star" src={star.svg} alt="" />
                                            <img className="star" src={star.svg} alt="" />
                                            <img className="star" src={star.svg} alt="" />
                                            <img className="star" src={star_half.svg} alt="" />
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
                    </Slider>
                </div>
            </section >
        </>
    )
}

export default HealthyProduct;