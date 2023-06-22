import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    /* background-color: transparent; */
    /* margin-top: 32px; */
    background-color: ${({ theme }) => theme.colors.dark_900};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light_400};
    }

    > input {
        background-color: transparent;
        width: 100%;
        border: none;
        padding: 12px 14px;
        /* margin-top: 8px; */
        font-family: 'Roboto', sans-serif;
        border:  ${(props) => props.$border ? `1px solid ${props.theme.colors.light_100}` : `none`};
        color: ${({ theme }) => theme.colors.light_400};
        cursor: pointer;
    }

    > input::placeholder {
        color: ${({ theme }) => theme.colors.light_500};
    }

    > svg {
        margin-left: 100px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;