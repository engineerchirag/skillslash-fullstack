import { useEffect, useState } from "react";

const ProductFilter = ({ filterProducts }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleChange = (ev) => {
        filterProducts(ev.target.value);
    }

    return (
        <select onChange={handleChange}>
            {
                categories.map(category => (
                   <option key={category} value={category}>{category.toUpperCase()}</option>
                ))
            }
            
        </select>
    )
}

export default ProductFilter;