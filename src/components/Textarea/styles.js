import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: transparent;
    margin-top: 32px;
    

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light_400};
    }

    > input {
        background-color: ${({ theme }) => theme.colors.dark_900};
        color: ${({ theme }) => theme.colors.light_100};
        width: 100%;
        height: 170px;
        border: none;
        border-radius: 8px;
        padding: 14px;
        margin-top: 16px;
        font-family: 'Roboto', sans-serif;
        border:  ${(props) => props.$border ? `1px solid ${props.theme.colors.light_100}` : `none`};
        margin-bottom: 32px;

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.light_100}
        }
    }

    > input::placeholder {
        color: ${({ theme }) => theme.colors.light_500};
        position: absolute;
        top: 14px;
    }

`;