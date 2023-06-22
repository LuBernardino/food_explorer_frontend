import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: transparent;
    margin-top: 32px;
    cursor: pointer;
    
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light_500};
    }

    > input {
        background-color: ${({ theme }) => theme.colors.dark_900};
        color: ${({ theme }) => theme.colors.light_100};
        width: 100%;
        border: none;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
        
        &:placeholder {
            color: ${({ theme }) => theme.colors.light_500};
        }

        &:placeholder:focus {
            border: 1px solid ${({ theme }) => theme.colors.light_100};
        }

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.light_100};
        }

    }

    > svg {
        margin-left: 16px;
    }
`;