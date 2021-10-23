import React from 'react';
import { useDispatch } from 'react-redux';
import { peopleAlso, photoOfTheDay } from '../../helpers/datas';
import { AddItem } from '../../store/Cart/actions';
import { Container, ImageLoader, Wrapper } from '../GlobalStyles';
import Contentspage from './ContentsPage';
const PhotoOfTheDay = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true);
    
    return (
        <Wrapper>
            <Container>
                <div className="px-4 lg:p-0 mb-4 mt-6">
                    {/* Heading */}
                    <div className="border-b-2 border-border py-2">

                        <div className="flex justify-between py-3">
                            <h3 className="font-bold text-2xl">
                                {photoOfTheDay.name}
                            </h3>

                            <button onClick={() => {
                                dispatch(AddItem({
                                    id: photoOfTheDay.id,
                                    quantity: 1,
                                    image: photoOfTheDay.image.src,
                                    price: photoOfTheDay.price,
                                    name: photoOfTheDay.name
                                }))
                            }} className="hidden md:flex justify-center items-center bg-black text-white font-medium text-lg px-8 py-2 leading-5">
                                ADD TO CART
                            </button>
                        </div>

                        {/* Image section */}

                        <ImageLoader is_loading={loading} className="flex justify-center items-center w-full h-[200px] md:h-[553px] relative">
                            <img src={photoOfTheDay.image.src} alt="imagine" onLoad={() => setLoading(false)} className="w-full h-full object-cover" />

                            <div className="absolute left-0 bottom-0 px-12 py-4 bg-white text-black text-lg font-bold">
                                Photo of the day
                            </div>
                        </ImageLoader>

                        <button onClick={() => {
                            dispatch(AddItem({
                                id: photoOfTheDay.id,
                                quantity: 1,
                                image: photoOfTheDay.image.src,
                                price: photoOfTheDay.price,
                                name: photoOfTheDay.name
                            }))
                        }} className="flex md:hidden justify-center items-center bg-black text-white font-light text-sm px-6 py-2 w-full my-5">
                            ADD TO CART
                        </button>

                        {/* Contents */}

                        <Contentspage peopleAlso={peopleAlso} photoOfTheDay={photoOfTheDay} />

                    </div>
                </div>

            </Container>
        </Wrapper>
    );
}

export default PhotoOfTheDay;
