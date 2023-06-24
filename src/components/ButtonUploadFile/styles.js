import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    margin-top: 32px;
    cursor: pointer;
    
    > h1 {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light_500};
    }

    > input {
        display: none;
    }
    
    > Button {
        background-color: #0D1D25;
        color: #FFF;
        width: 100%;
        border: none;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
        font-family: 'Roboto',sans-serif;
    }

    > svg {
        margin-left: 16px;
    }
`;