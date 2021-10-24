import React from 'react';
import Product from '../Product';

const Allproducts = ({ FilterProducts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-12">
            {
                FilterProducts && FilterProducts.map((res, index) => (
                    <Product data={res} key={index} />
                ))
            }
        </div>
    );
}

export default Allproducts;
