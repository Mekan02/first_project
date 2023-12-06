import React, { useEffect, useState } from "react"
import Products from '../Common/Productss/Products';
import { connect } from "react-redux";
import axios from "axios";
import server from '../../../server.json';


const Favourites = () => {
    const [prod,setProd] = useState(null);
    debugger;
    useEffect(() => {
        axios.get(`${server.server}/api/likes`).then(response => {
            setProd(response.data.err)
            debugger;
        })
    },[])
    return (
        <div className="main">
            <div className="favourites_main">
                {prod}
                {/* <Products productItems={favouriteProducts} /> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favouriteProducts: state.favouritesPage.favouriteProducts
    }
}

export default connect(mapStateToProps,{})(Favourites);