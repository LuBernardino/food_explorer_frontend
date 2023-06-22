import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    > h1 {
        font-size: ${(props) => props.fontSize ?? '42px' };
    }

    &.dark {
        > img {
           filter: brightness(0) saturate(100%) invert(31%) sepia(23%) saturate(288%) hue-rotate(157deg) brightness(94%) contrast(81%);
        }
    }

    > img {
        width: 30px;
    }

    @media (max-width: 600px) {

        gap: 8px;
        
        > h1 {
            /* font-size: ${(props) => props.fontSize ?? '42px' }; */
            font-size: 16px;
        }

        > img {
            width: 20px;
        }
    }
`;