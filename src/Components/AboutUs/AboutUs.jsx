import React, { useEffect, useState } from 'react'
import s from './AboutUs.module.css'
import server from '../../../server.json'
import axios from 'axios';

const AboutUs = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`${server.server}/api/aboutUs`).then(response => {
            setData(response.data);

        })
    }, [])

    console.log(data, 'data')
    return (
        <>
            {data ?
                <div className="main">

                    <div key={data[0].id} className={s.about__block}>
                        <div className={s.about__info_A}>
                            <h1 className={s.title}>{data[0].title_tm}</h1>
                            <p className={s.text}>{data[0].description_tm}</p>
                        </div>
                        <div className={s.about__img}>
                            <img className={s.img} src={`${server.server}/${data[0].image}`} alt="image" />
                        </div>
                    </div>

                    <div className={s.about__block}>
                        <div className={s.about__img} >
                            <img className={s.img} src={`${server.server}/${data[1].image}`} alt="image" />
                        </div>
                        <div className={s.about__info_B} >
                            <h1 className={s.title}>{data[1].title_tm}</h1>
                            <p className={s.text}>{data[1].description_tm}</p>
                        </div>
                    </div>

                </div>
                : 'Loading...'}
        </>
    );
}


export default AboutUs;