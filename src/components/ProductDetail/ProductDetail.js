import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h3>Your Product Details</h3>
            <Product showAddToCard={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;