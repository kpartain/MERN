import React, {useState, useEffect} from 'react'
import ProductForm from "../components/ProductForm"
import ProductList from '../components/ProductList';
import axios from 'axios';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <h2>MAIN</h2>
            <ProductForm />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}