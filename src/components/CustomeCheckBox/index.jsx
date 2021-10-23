import React from 'react';
import { CheckBox } from './checkbox.style';

const CustomeCheckBox = ({label, onchange, checked}) => {
    return (
        <CheckBox>
            <span className="text-text-color-a text-sm">{label}</span>
            <input type="checkbox" checked={checked} onChange={onchange}/>
            <span class ="checkmark"></span>
        </CheckBox>
    );
}

export default CustomeCheckBox;
