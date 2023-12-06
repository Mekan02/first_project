import React from "react"
import './DrugsMain.css'
import { connect } from "react-redux";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Products from '../Common/Productss/Products';
import server from '../../../server.json'
import { setCategory, setCategoryBrands, setDrugs, setSwiper } from "../../Redux/DrugsP-reducer";
import { useEffect } from "react";
import axios from "axios";
import Preloader from "../../Pictures/basePreloader.gif"



const DrugsMain = (props) => {
    useEffect(() => {
        axios.get(`${server.server}/api/drug`).then(response => {
            props.setCategory(response.data.ct)
            props.setCategoryBrands(response.data.br)
            props.setSwiper(response.data.swiper)
            props.setDrugs(response.data.drug)

        })
    }, [])
    const settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: '0px' }}> {dots} </ul>
        },
    }

    return (
        <>
            {props.drugs[0] ?
                <div className="main">
                    <div className="drugsMain">
                        <div className="category">
                            {/* ---------CATEGORY----------------- */}

                            <h3 className="category_title">Kategoriyalar</h3>
                            <div className="category_btn">
                                <h5 className="category_text">Lukmanyn tabsyryklary boyunca</h5>
                                <ul className="list">
                                    {
                                        props.categoryData.map((item) => {
                                            return (
                                                <li key={item.id} className="list_item">{item.category_tm}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="category_checkbox">
                                <h3 className="category_title">Markalar boyunca</h3>
                                <ul className="list">
                                    {
                                        props.categoryBrand.map((item, i) => {
                                            return (
                                                <li key={item.id} className="list_item">
                                                    <input className="checkbox" type="checkbox" name="checkbox" id={i} />
                                                    <label for={i} className="checkbox_span">{item.name_tm}</label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* ---------CATEGORY----------------- */}

                        <div className="content">
                            {/* ------------SLIDER------------------ */}
                            <Slider {...settings} className='drugs_slider' slide='drugs_slider' >
                                {props.swiper
                                    .map((item) => {
                                        return (
                                            <div className="main-slider__item" key={item.drugId}>
                                                <img className="main-slider__img" src={`${server.server}/${item.image}`} alt="img" />
                                            </div>
                                        )
                                    })}
                            </Slider>
                            {/* ------------SLIDER------------------ */}

                            {/* ------------DRUGS------------------ */}
                            <div className="main_products">
                                <Products productItems={props.drugs} />
                            </div>
                            {/* ------------DRUGS------------------ */}
                        </div>
                    </div>
                    {/* 
                <Banner bannerData={props.bannerData} />
                <DailySelling dailySelling={props.dailySelling} />
                <Brands brandsImg={props.brandsImg} />
                <HealthyProduct props.drug[0]={props.props.drug[0]} />
                <Status /> */}
                </div>
                : <img style={{width: '3vw'}} src={Preloader} alt='preloader' />
            }


        </>
    )

}



let mapStateToProps = (state) => {
    return {
        swiper: state.drugsPage.swiper,
        categoryData: state.drugsPage.ct,
        categoryBrand: state.drugsPage.br,
        // bannerData: state.mainPage.bannerData,
        // dailySelling: state.mainPage.dailySelling,
        // brandsImg: state.mainPage.brandsImg,
        drugs: state.drugsPage.drug,
    }
}

export default connect(mapStateToProps, { setCategory, setCategoryBrands, setSwiper, setDrugs })(DrugsMain);