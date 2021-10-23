import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
     ${tw `w-full px-0 lg:px-6 xl:px-10 2xl:px-20`};
`;

export const Container = styled.div`
    max-width: 1440px;
    @media (min-width: 1380px){
        margin-right: auto;
        margin-left: auto;
     }

`;