import { useContext, useEffect, useMemo, useState } from "react";
import Header from "./Header";
import { UserActivityContext } from "../context/userActivityContext";

function Cart() {
    const [products, setProducts] = useState([]);
    const { selectedProducts } = useContext(UserActivityContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, 
    []);

    const totalCartValue = useMemo(() => {
        return Object.keys(selectedProducts).reduce((acc, itemId) => {
            const productDetail = products.find(product =>  {
                return product.id == itemId;
            });
            if (productDetail) {
                acc += productDetail.price;
            }
            return acc;
        }, 0);   
    }, [selectedProducts, products]);

    return (
        <>
            <div> Products in the cart</div>
            <div>Total cart value: {totalCartValue}</div>
        </>
    )
}

export default Cart;