import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    
    height: 100vh;
    margin-left: 150px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px;
        margin-left: 0;
        height: 0;
    }
`;

export const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.dark_700};
    border: none;
    border-radius: 16px;
    padding: 64px;
    margin: auto 100px;

    > form h1 {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 32px;
        text-align: center;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        text-align: center;
        margin: 32px 0;
        color: ${({ theme }) => theme.colors.light_100};
    }

    > form Button {
        margin-top: 32px;
    }

    @media (max-width: 768px) {
        background-color: transparent;
        padding: 70px 90px;

        > h1 {
            display: none;
        }
    }

    @media (max-width: 400px) {
        background-color: transparent;
        padding: 70px 110px;

        > h1 {
            display: none;
        }
    }

`;