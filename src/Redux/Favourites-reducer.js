
const intialState = {
    favouriteProducts: [
        {
            id: 1,
            cover: 'src/Pictures/9.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 10324,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
        {
            id: 2,
            cover: 'src/Pictures/8.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 13453,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
        {
            id: 3,
            cover: 'src/Pictures/7.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 6573,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
        {
            id: 4,
            cover: 'src/Pictures/6.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 1234,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
        {
            id: 5,
            cover: 'src/Pictures/5.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 5670,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
        {
            id: 6,
            cover: 'src/Pictures/9.jpg',
            name: 'Asetaminofen - dermanyn duzuminde D vitamine bay',
            price: 13460,
            star: 4.99,
            desc: 'Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar Lorem ipsum dolar'
        },
    ],
}


const favouriteReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default favouriteReducer;