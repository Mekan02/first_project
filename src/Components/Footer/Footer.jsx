import React from "react"
import logo from '../../Pictures/dermanhana.png'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.f__content}>

                    {/* ---------------------- START ---------------- */}
                    <div className={s.f_start}>
                        <img className={s.f_start__img} src={logo} alt="" />
                        <p className={s.f_start__text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, deserunt voluptatem a id sunt molestias deleniti consectetur fugiat quis! Molestiae praesentium repudiandae alias iure tempore veniam voluptates deleniti corporis illum?</p>
                    </div>

                    {/* ---------------------- START ---------------- */}
                    {/* ---------------------- CENTER ---------------- */}

                    <div className={s.f_center}>
                        <ul className={s.f_center_list}>
                            <li className={`${s.list_item} ${s.list_title}`}>Information</li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>

                        </ul>
                        <ul className={s.f_center_list}>
                            <li className={`${s.list_item} ${s.list_title}`}>Categories</li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                        </ul>
                        <ul className={s.f_center_list}>
                            <li className={`${s.list_item} ${s.list_title}`}>Our services</li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                        </ul>
                        <ul className={s.f_center_list}>
                            <li className={`${s.list_item} ${s.list_title}`}>Contact</li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                        </ul>
                    </div>

                    {/* ---------------------- CENTER ---------------- */}
                    {/* --------------------- END ------------------ */}

                    <div className={s.f_end}>
                        <ul className={s.f_center_list}>
                            <li className={`${s.list_item} ${s.list_title}`}>Information</li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                            <li className={s.list_item}>
                                <a className={s.list_link}>Lorem, ipsum dolor.</a>
                            </li>
                        </ul>
                    </div>
                    {/* --------------------- END ------------------ */}
                </div>
            </footer>
        </>
    )
}

export default Footer;