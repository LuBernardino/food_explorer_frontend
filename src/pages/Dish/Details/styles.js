import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    gap: 45px;
    justify-content: center;
    margin-bottom: 55px;
    margin: 42px 0 35px 0;

    > img {
        height: 390px;
        width: 390px;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        padding: 16px 56px;
    }
`;

export const Container = styled.div`

    /* height: 100vh; */

    .dishinfo {
        width: 687px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;

        /* .info {
            display: flex;
            flex-direction: row;
        } */
        
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: 500;
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 400;
        }

        @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
            /* padding: 16px 56px; */
            width: 316px;

            h1 {
                font-size: 27px;
            }

            p {
                font-size: 16px;
                text-align: center;
                margin-bottom: 16px;
            }
        }
    }
`;

export const Tags = styled.div`
    display: flex;

    @media (max-width: 650px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;
    }
`;

export const Items = styled.div`
    display: flex;
    gap: 33px;
    width: 320px;

    @media (max-width: 650px) {
        > Count {
            display: none;
        }

        > Button {
            margin-top: 32px;
        }
    }
`;