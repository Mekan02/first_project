import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navbar.module.css'

const navbar = [
    {
        id: 1,
        href: '/',
        txt: 'Baş sahypa',
    },
    {
        id: 2,
        href: '/products',
        txt: 'Dermanlar',
    },
    {
        id: 3,
        href: '/favourite',
        txt: 'Saylananlar',
    },
    {
        id: 4,
        href: '/contact',
        txt: 'Habarlaşmak',
    },
    {
        id: 5,
        href: '/about-us',
        txt: 'Biz barada',
    },
]

const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <>
            <ul className={s.nav}>
                {navbar.map(item => {
                    return (
                        <li
                            key={item.id}
                            className={pathname === item.href && s.item_active}
                        >
                            <NavLink to={item.href}>
                                {item.txt}
                            </NavLink>
                        </li>)
                })}

                {/* <li>
                    <NavLink to='/'>Baş sahypa</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Dermanlar</NavLink>
                </li>
                <li>
                    <NavLink to='/favourite'>Saylananlar</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Habarlaşmak</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutUs'>Biz barada</NavLink>
                </li> */}
            </ul>
        </>
    )
}

export default Navbar;