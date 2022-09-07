const addItem = [];
const addItems = (state = addItem, action) => {
    console.log(state);
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1,price:x.orgPrice*(x.qty + 1)} : x);
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                        orgPrice:product.price
                    }
                ] 
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== product.id)
            } else{
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1,price:x.price - x.orgPrice} : x);

            }
            break;

        default: return state
            break;
    }
}

export default addItems;