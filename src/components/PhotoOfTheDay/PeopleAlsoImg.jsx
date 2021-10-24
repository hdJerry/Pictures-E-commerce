import React from 'react';
import { ImageLoader } from '../GlobalStyles';

const Peoplealsoimg = ({image}) => {
    const [loading, setLoading] = React.useState(true);
    return (
        <ImageLoader is_loading={loading} className="h-44 md:h-48 lg:h-36 bg-border">
            <img src={image} onLoad={() => setLoading(false)} alt="artwork" className="w-full h-full object-cover" />
        </ImageLoader>
    );
}

export default Peoplealsoimg;
