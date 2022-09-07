//For add items to cart
export const addItem = (product) =>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//For Delete items to cart
export const delItem = (product) =>{
    return{
        type:"DELITEM",
        payload:product
    }
}