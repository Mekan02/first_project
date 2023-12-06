const SET_SLIDER_DATA = "SET_SLIDER_DATA";
const SET_BANNER = "SET_BANNER";
const SET_DAILY_SELLING = "SET_DAILY_SELLING";
const SET_BRAND = "SET_BRAND";
const SET_HEALTHY_PRODUCT = "SET_HEALTHY_PRODUCT"


const intialState = {
    sliderData: [null],
    bannerData: [null
        // {
        //     href: '#',
        //     image: 'src/Pictures/2.jpg',
        //     alt: 'banner Img',
        //     desc: 'The best medicine for you'
        // },
        // {
        //     href: '#',
        //     image: 'src/Pictures/6.jpg',
        //     alt: 'banner Img',
        //     desc: 'The best medicine for you'
        // },
        // {
        //     href: '#',
        //     image: 'src/Pictures/7.jpg',
        //     alt: 'banner Img',
        //     desc: 'The best medicine for you'
        // },
        // {
        //     href: '#',
        //     image: 'src/Pictures/3.jpg',
        //     alt: 'banner Img',
        //     desc: 'The best medicine for you'
        // }
    ],
    brandsImg: [null
        // {
        //     id: 2,
        //     href: '#',
        //     thumbnail: 'src/Pictures/2.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 3,
        //     href: '#',
        //     thumbnail: 'src/Pictures/3.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 4,
        //     href: '#',
        //     thumbnail: 'src/Pictures/4.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 5,
        //     href: '#',
        //     thumbnail: 'src/Pictures/5.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 6,
        //     href: '#',
        //     thumbnail: 'src/Pictures/6.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 7,
        //     href: '#',
        //     thumbnail: 'src/Pictures/7.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 7,
        //     href: '#',
        //     thumbnail: 'src/Pictures/8.jpg',
        //     alt: '#'
        // },
        // {
        //     id: 9,
        //     href: '#',
        //     thumbnail: 'src/Pictures/9.jpg',
        //     alt: '#'
        // }
    ],
    dailySelling:[null
        // {
        //     id: 1,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 2,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // }
    ],
    productItems: [null
        // {
        //     id: 1,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 2,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 3,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 4,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 5,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 6,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 7,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 8,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 9,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // },
        // {
        //     id: 10,
        //     thumbnail: 'src/Pictures/9.jpg',
        //     title_tm: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
        //     price: 10324,
        //     star: 4.99,
        //     description_tm: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        // }
    ]
}
let mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_SLIDER_DATA: {
            return {
                ...state,
                sliderData: action.swiper
            }
        }
        case SET_BANNER: {
            return {
                ...state,
                bannerData: action.banner
            }
        }
        case SET_DAILY_SELLING: {
            return {
                ...state,
                dailySelling: action.dailySelling
            }
        }
        case SET_BRAND: {
            return {
                ...state,
                brandsImg: action.brand
            }
        }
        case SET_HEALTHY_PRODUCT: {
            return {
                ...state,
                productItems: action.healthyProduct
            }
        }

        default:
            return state;
    }
}
export default mainReducer;

export const setSliderData = (data) => ({ type: SET_SLIDER_DATA, swiper: data })
export const setBanner = (data) => ({ type: SET_BANNER, banner: data })
export const setDailySelling = (data) => ({ type: SET_DAILY_SELLING, dailySelling: data })
export const setBrand = (data) => ({ type: SET_BRAND, brand: data })
export const setHealthyProduct = (data) => ({ type: SET_HEALTHY_PRODUCT, healthyProduct: data })