import React from 'react'
import { NextArrow, PrevArrow } from '../HealthyProduct/HealthyProduct'
import s from './Brands.module.css'
import Slider from 'react-slick'
import server from '../../../../server.json'

const Brands = ({ brandsImg }) => {
    const settings = {
        dots: false,
        infinity: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <>
            <section className={s.section__brands}>
                <h2 className={s.brands__title}> Brands </h2>
                <div className='brands__wrapper'>

                    <Slider {...settings} >
                        {brandsImg.map(item => (
                            <div className={s.brands__item} key={item.id}>
                                <a className={s.brands__link} href="#">
                                    <img className={s.brands__img} src={`${server.server}/${item.thumbnail}`} alt="#" />
                                    <span className={s.brands__logo}>{item.name_tm}</span>
                                </a>
                            </div>
                        ))}
                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Brands