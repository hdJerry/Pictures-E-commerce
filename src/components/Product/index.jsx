import React from 'react';
import { useDispatch } from 'react-redux';
import GlobalFunctions from '../../helpers/Global';
import { AddItem } from '../../store/Cart/actions';
import { ImageLoader } from '../GlobalStyles';
import { ProductWrapper } from './Product.style';

const Product = ({data}) => {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    let { formatMoney } = GlobalFunctions
    return (
        <ProductWrapper>
            <ImageLoader is_loading={loading} className="h-[30rem] lg:h-[22rem] relative overflow-hidden">
                {
                    data.bestseller && (
                        <div className="absolute top-0 left-0 text-black bg-white flex justify-center items-center py-1 px-2 text-sm">Best seller</div>
                    )
                }
                <img src={data.image.src} alt="specials" className="w-full h-full object-cover" onLoad={() => setLoading(false)} />

                <button 
                className="tracking-wider add_to_cart_btn w-full absolute bottom-0 left-0 right-0 flex justify-center items-center px-4 py-3 text-xl text-white bg-black font-bold"
                onClick={() => {
                    dispatch(AddItem({
                        id: data.id,
                        quantity: 1,
                        image: data.image.src,
                        price: data.price,
                        name: data.name
                    }))
                }}
                >
                    ADD TO CART
                </button>
            </ImageLoader>

            <p className="text-text text-lg font-bold mt-2 capitalize truncate">{data.category}</p>
            <p className="text-2xl font-bold capitalize truncate">{data.name}</p>
            <p className="text-text text-2xl"> <span className="mr-1">&#36;</span>{formatMoney(data.price)}</p>
            
        </ProductWrapper>
    );
}

export default Product;
