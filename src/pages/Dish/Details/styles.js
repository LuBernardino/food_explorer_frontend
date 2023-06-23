import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 768px) {
        height: 100vh;

        > Footer {
            position: absolute;
            bottom: 0;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    gap: 45px;
    justify-content: center;
    align-items: center;
    margin-bottom: 55px;
    margin: 42px 0 35px 0;

    > img {
        height: 390px;
        width: 390px;
    }

    .dishinfo {
        display: flex;
        flex-direction: column;
        gap: 24px;

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
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 16px 56px;
    }
`;

export const Tags = styled.div`
    display: flex;

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        > Count {
            display: none;
        }

        > Button {
            margin-top: 32px;
        }
    }
`;