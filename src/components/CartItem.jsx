import React from 'react';
// import { useSelector } from 'react-redux';
import GlobalFunctions from '../helpers/Global';

const Cartitem = ({data}) => {
    let { formatMoney } = GlobalFunctions;
    console.log(data);
    return (
        <div className="flex justify-between items-center py-2">
            <div>
                <p className="font-bold text-base">{data.name}</p>
                <p className="text-text text-2xl"> <span className="mr-1">&#36;</span>{formatMoney(data.price)}</p>
            </div>
            <div className="flex justify-center items-center w-32 h-20">
                <img src={data.image} alt="cartitem" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default Cartitem;
