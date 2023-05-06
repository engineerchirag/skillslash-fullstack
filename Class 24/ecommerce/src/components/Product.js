import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserActivityContext } from "../context/userActivityContext";

const Product = ({ detail }) => {
    const { selectedProducts, updateCart} = useContext(UserActivityContext);

    const addProductToCart = () => {
        updateCart(detail.id);
    }
    return (
        <div className="product-wrapper">
            <div className="left-col">
                <img src={detail.image} />
            </div>
            <div className="right-col">
                <h2>{detail.title}</h2>
                <h5>Category: {detail.category}</h5>
                <p>{detail.description}</p>
                <p>Price: {detail.price}</p>
                <div className="product-buttons">
                    <Link to={`/product/${detail.id}`}><button>See Product</button></Link>
                    {
                        selectedProducts[detail.id] ? (
                            <Link to={`/cart`}><button>Go to Cart</button></Link>
                        ) : (
                            <button onClick={addProductToCart}>Add To Cart</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;