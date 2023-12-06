import React from "react"
import s from './Status.module.css'


const Status = () => {
    return(
        <>
            <div className={s.status_main}>
                <div className={s.status_inner}>
                    <h2 className={s.status_title}>100%</h2>
                    <div className={s.status_text}>Lorem, ipsum dolor.</div>
                </div>
                <div className={s.status_inner}>
                    <h2 className={s.status_title}>100%</h2>
                    <div className={s.status_text}>Lorem, ipsum dolor.</div>
                </div>
                <div className={s.status_inner}>
                    <h2 className={s.status_title}>100%</h2>
                    <div className={s.status_text}>Lorem, ipsum dolor.</div>
                </div>
            </div>
        </>
    )
}

export default Status;