const SET_CATEGORY = "SET_CATEGORY"
const SET_CATEGORY_BRAND = "SET_CATEGORY_BRAND"
const SET_SWIPER = "SET_SWIPER"
const SET_DRUGS = "SET_DRUGS"



const intialState = {
    ct: [],
    br: [],
    drug: [null],
    swiper: []
}


let drugsReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_CATEGORY: {
            return {
                ...state,
                ct: action.category
            }
        }
        case SET_CATEGORY_BRAND: {
            return {
                ...state,
                br: action.brand
            }
        }
        case SET_SWIPER: {
            return {
                ...state,
                swiper: action.swiper
            }
        }
        case SET_DRUGS: {
            return {
                ...state,
                drug: action.drug
            }
        }
        default:
            return state;
    }
}

export default drugsReducer;




export const setCategory = (data) => ({ type: SET_CATEGORY, category: data })
export const setCategoryBrands = (data) => ({ type: SET_CATEGORY_BRAND, brand: data })
export const setSwiper = (data) => ({ type: SET_SWIPER, swiper: data })
export const setDrugs = (data) => ({ type: SET_DRUGS, drug: data })