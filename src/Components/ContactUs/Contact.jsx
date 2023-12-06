import React, { useState } from "react";
import s from './Contact.module.css'
import img from '../../Pictures/OguzMain.jpg'
import server from '../../../server.json'
import axios from "axios";
import st from '../SignUp/SignUp.module.css'


const Contact = () => {

    const [data, setData] = useState({ status: 0, errorMsg: '' })


    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        const data = e.currentTarget;
        const userData = {
            fullName: data[0].value,
            email: data[1].value,
            number: data[2].value,
            text: data[3].value,
        };
        axios.post(`${server.server}/api/contact`, userData)
            .then((response) => {
                setData({
                    status: response.status
                })
                debugger;
            })
            .catch((error) => {
                debugger
                setData({
                    status: error.response.status,
                    errorMsg: error.response.statusText || ''
                })
            });
    };

    return (
        <>
            <div className="main">
                <div className={s.contact__inner}>

                    <div className={s.contact__form_block}>
                        <h1 className={s.contact__form_title}>Biziň bilen habarlaşmak</h1>
                        <form noValidate='true' className={s.contact_form} onSubmit={handleSubmit}>
                            <input className={s.contact_input} placeholder="Doly adyňyz familýaňyz" type="text" />
                            <input className={s.contact_input} placeholder="Elektron salgyňyz" type="email" />
                            <input className={s.contact_input} maxLength={8} placeholder="Telefon belgiňiz" type="number" />
                            <textarea className={s.contact__textarea} placeholder="Ugratjak habaryňyz..." />

                            {data.status === 422 && <span className={st.error}>{data.errorMsg}</span>}
                            {data.status === 200 && <span className={st.success}>Habaryňyz ugradyldy!</span>}
                            {data.status === 500 && <span className={st.error}>Internal server error</span>}

                            <button className={s.contact_btn} type="submit">Habar iber</button>
                        </form>
                    </div>

                    <div className={s.contact__info_block}>
                        <span className={s.label}>Biziň salgymyz:</span>
                        <h3 className={s.text}>G.Ballyýewa 38, Aşgabat, Türkmenistan</h3>

                        <span className={s.label}>Elektron salgymyz:</span>
                        <h3 className={s.text}>dermanhana@gmail.com</h3>

                        <span className={s.label}>Telefon belgimiz:</span>
                        <h3 className={s.text}>79 18 16</h3>
                        <h3 className={s.text}>45 15 16</h3>

                        <img className={s.info_img} src={img} alt="img" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;