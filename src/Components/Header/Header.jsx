import React, { useEffect, useRef } from 'react'
import s from './Header.module.css'
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../Pictures/dermanhana.png'
import shopping_bag from '../../Pictures/shopping_bag.svg'
import lang from '../../Pictures/geography.svg'

const Header = () => {
  
    return (
        <>
            <header className={s.parent_header}>
                <div className={s.header_content}>

                    <div className={s.h_start}>
                        <a href='/' className={s.logo}>
                            <img src={logo} alt="" />
                        </a>
                    </div>

                    <div className={s.h_center}>
                        {/* <Search /> */}

                        <section className={s.search}>
                            <div className={s.search_content}>
                                <input type="text" placeholder='Search and hit enter..' />
                                <button className={s.search_btn}>
                                    <i className='fa fa-search searchIcon'></i>
                                </button>
                            </div>
                        </section>
                        <Navbar />
                    </div>

                    {/* <div className={s.h_end}> */}
                        <div className={s.h_end_content}>
                            <NavLink to='/sign-up' className={s.sign_in}> SIGN IN / SIGN UP</NavLink>
                            <span className={s.shop_basket}><img src={shopping_bag} alt="" />0 manat</span>
                            <span className={s.lang}><img src={lang} alt="" />TM</span>
                        </div>
                    {/* </div> */}

                </div>
            </header>
        </>
    )
}

export default Header;


