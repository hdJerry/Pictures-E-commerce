import tw, { styled } from 'twin.macro';

import { css, keyframes } from 'styled-components';

const loading = keyframes`
    0% {
        background-position: 100% 100%;
    }
    
    100% {
        background-position: 0 0;
    }
`;

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

export const ImageLoader = styled.div`
    background: linear-gradient(90deg,  #f8f9fb, #e2e6f3, #f8f9fb, #e2e6f3);
    ${props => props.is_loading && css`
        animation: ${loading} 2s ease infinite;
        background-size: 300% 100%;
    `}
`;