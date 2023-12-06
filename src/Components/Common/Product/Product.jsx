import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import star from '../../../Pictures/star.svg'
import star_half from '../../../Pictures/star_half.svg'
import basket from '../../../Pictures/basket.svg'
import axios from "axios"
import server from '../../../../server.json'
import s from './Product.module.css'




const Product = () => {
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${server.server}/api/drug/${id}`).then(response => {
            setData(response.data.drug)
        })
    }, []);

        
    console.log(data)
    return (
        <div className="main">

            <section className={s.product_main}>
                <div className={s.photo_side}>
                    <img className={s.img} src={`${server.server}/${data.thumbnail}`} alt="" />
                    <div className={s.slider_photo}></div>
                </div>
                <div className={s.details_side}>    
                    <h1 className={s.product_name}>{data.title_tm}</h1>
                    <span style={{fontSize: '25px',marginBottom: '20px', display: "block" }} className='product-price'>{data.price} TMT</span>
                    <div style={{marginBottom: '20px'}} className="healthyProduct-rate">
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star} alt="" />
                        <img className="star" src={star_half} alt="" />
                        <span className='star-bal'>4.99</span>
                    </div>
                    <div className={s.desc}>{data.description_tm}</div>
                    <button style={{padding: '5px', bottom: '30px', position: 'absolute'}} className="btn-buy">
                        <img style={{width: '20px'}} src={basket} alt="" />
                        <span style={{fontSize: '14px'}}>Sebede goş</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Product