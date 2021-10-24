import tw, { styled } from 'twin.macro';

export const CartDropDownWrapper = styled.div`
    ${tw `w-full border-b-2 border-border overflow-auto my-4`};
     max-height: 400px;
     min-height: 200px;
     overflow: auto;
`;