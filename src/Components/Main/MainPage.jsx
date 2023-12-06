import React from 'react'
import Banner from './Banner/Banner';
import SliderCard from './Slider/SliderCard';
import { connect } from 'react-redux';
import HealthyProduct from './HealthyProduct/HealthyProduct';
import Brands from './Brands/Brands';
import DailySelling from './DailySelling/DailySelling';
import Status from './Status/Status';
import axios from 'axios'
import { useEffect } from 'react';
import { setDailySelling, setSliderData, setBanner, setBrand, setHealthyProduct } from '../../Redux/MainP-reducer';
import server from "../../../server.json"
import Preloader from "../../Pictures/basePreloader.gif"   /* Preloader.gif */

const MainPage = (props) => {
    const { sliderData, bannerData, dailySelling, brandsImg, productItems } = props;
    const { setSliderData, setBanner, setDailySelling, setBrand, setHealthyProduct } = props;
    useEffect(() => {
        axios.get(`${server.server}/api/main`).then(response => {
            // console.log(response.data)
            setSliderData(response.data.swiper)
            setBanner(response.data.banners)
            setDailySelling(response.data.drug)
            setBrand(response.data.brand)
            setHealthyProduct(response.data.drug)
        })
    }, [])
    return (
        <>
            {sliderData[0] ?
                <div className="main">
                    <div class='large-font text-center top-20'>
                        <ion-icon name="heart">
                            <div class='red-bg'></div>
                        </ion-icon>
                    </div>
                    <SliderCard data={sliderData} />
                    <Banner bannerData={bannerData} />
                    <DailySelling dailySelling={dailySelling} />
                    <Brands brandsImg={brandsImg} />
                    <HealthyProduct productItems={productItems} />
                    <Status />
                </div>
                : <img style={{ width: '3vw' }} src={Preloader} alt='preloader' /* style={{width: "50px", height: "50px"}} */ />
            }

        </>
    )

}


let mapStateToProps = (state) => {
    return {
        sliderData: state.mainPage.sliderData,
        bannerData: state.mainPage.bannerData,
        dailySelling: state.mainPage.dailySelling,
        brandsImg: state.mainPage.brandsImg,
        productItems: state.mainPage.productItems,
    }

}
export default connect(mapStateToProps, { setSliderData, setBanner, setDailySelling, setBrand, setHealthyProduct })(MainPage);