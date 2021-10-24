import tw, { styled } from 'twin.macro';

export const Logo = styled.a `

    & > svg {
            width: 124px;
            height: 19.67px;
        }

    @media (min-width: 768px){
        & > svg {
        width: unset;
        height: unset;
     }
    }
`;

export const CartContainer = styled.button `

    ${tw `relative flex justify-between items-center`};
    & > svg {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 768px){
        & > svg {
        width: unset;
        height: unset;
     }
    }
`;