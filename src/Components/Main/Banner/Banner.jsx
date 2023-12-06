import React from 'react'
import s from './Banner.module.css';
import server from '../../../../server.json'

const Banner = ({ bannerData }) => {
    return (
        <>
            <section className={s.banner_main}>

                {/* ---------- FIRST BANNER -------------- */}
                <div className={s.banner_item}>
                    <div className={s.first_main}>
                        <img className={s.img} src={`${server.server}/${bannerData[0].image}`}
                            alt="bannerIMG" />
                        {/* <div className={s.text}>
                            <h1>{props.bannerData.firstBanner.desc} </h1>
                            <div className={s.link}>
                                <i className='fa fa-long-arrow-alt-right'></i>
                                <NavLink to={props.bannerData.firstBanner.href}>Buy now</NavLink>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* ------------ CENTER BANNERS ----------- */}
                <div className={s.second_item}>
                    <div className={s.second_main}>
                        <img className={s.img} src={`${server.server}/${bannerData[1].image}`}
                            alt="bannerIMG" />
                    </div>
                    <div className={s.second_main}>
                        <img className={s.img} src={`${server.server}/${bannerData[2].image}`}
                            alt="bannerIMG" />
                    </div>
                </div>

                {/* ---------- THIRD BANNER----------- */}
                <div className={s.banner_item}>
                    <div className={s.first_main}>
                        <img className={s.img} src={`${server.server}/${bannerData[3].image}`}
                            alt="bannerIMG" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Banner