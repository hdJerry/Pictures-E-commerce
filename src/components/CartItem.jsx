import React from 'react';
// import { useSelector } from 'react-redux';
import GlobalFunctions from '../helpers/Global';
import { ImageLoader } from './GlobalStyles';

const Cartitem = ({data}) => {
    
    let { formatMoney } = GlobalFunctions;
    const [loading, setLoading] = React.useState(true);

    return (
        <div className="flex justify-between items-center py-2">
            <div>
                <p className="font-bold text-base">{data.name}</p>
                <p className="text-text text-2xl"> <span className="mr-1">&#36;</span>{formatMoney(data.price)}</p>
            </div>
            <ImageLoader is_loading={loading}  className="flex justify-center items-center w-32 h-20">
                <img src={data.image} onLoad={() => setLoading(false)} alt="cartitem" className="w-full h-full object-cover" />
            </ImageLoader>
        </div>
    );
}

export default Cartitem;
