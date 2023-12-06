import React from "react"
import s from './DailySelling.module.css'
import Products from '../../Common/Productss/Products';


const DailySelling = ({ dailySelling }) => {
    return (
        <section className={s.section__dailySelling}>
            <div className={s.dailySelling__caption}>
                <h2 className={s.caption_text}>
                    Gundelik alynyan dermanlar
                </h2>
                <a className={s.caption_link} href="#" >
                    All
                </a>
            </div>
            <div className={s.dailySelling__products}>
                <Products productItems={dailySelling} />
                {/* {dailySelling.map(item => (
                    <div className="box">
                        <div className="healthyProduct" key={item.id}>E
                            <div className="product-img">
                                <img src={item.cover} alt="" />
                                <button className="product-favorite">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <h6 className='product-name'>{item.name}</h6>
                            <p className='product-desc'>Lorem ipsum dolor sit..</p>
                            <span className='product-price'>{item.price} TMT</span>
                            <div className="product-details">
                                <div className="healthyProduct-rate">
                                    <img className="star" src="src/Pictures/star.svg" alt="" />
                                    <img className="star" src="src/Pictures/star.svg" alt="" />
                                    <img className="star" src="src/Pictures/star.svg" alt="" />
                                    <img className="star" src="src/Pictures/star.svg" alt="" />
                                    <img className="star" src="src/Pictures/star_half_empty.svg" alt="" />
                                    <span className='star-bal'>{item.star}</span>
                                </div>
                                <button className="btn-buy">
                                    <img src="src/Pictures/basket.svg" alt="" />
                                    <span>{item.price}.00</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </section>
    )
}

export default DailySelling;
