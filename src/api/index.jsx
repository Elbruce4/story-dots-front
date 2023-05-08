


export const getAllProducts = async () => {
    try {
        let products = await fetch('https://fakestoreapi.com/products').then(res=>res.json());
        return products;
    } catch (error) {
        return error;
    }
}