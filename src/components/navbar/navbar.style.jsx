import tw, { styled } from 'twin.macro';



export const CartContainer = styled.button `

    ${tw `relative flex justify-between items-center`};
    & > svg {
        width: 34px;
        height: 34px;
    }

    @media (min-width: 768px){
        & > svg {
        width: unset;
        height: unset;
     }
    }
`;