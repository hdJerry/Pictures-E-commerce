import tw, { styled } from 'twin.macro';

export const ProductWrapper = styled.div `
    ${tw `relative cursor-pointer`};
    transition: all 0.5s ease-in-out;
    
    & .add_to_cart_btn {
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
    &:hover .add_to_cart_btn {
        opacity: 1;
    }
`;