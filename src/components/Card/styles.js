import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.dark_200};
    /* background-color: crimson; */
    flex: 0 0 330px;
    padding: 20px;
    border: none;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    transition: all .8s;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.light_100};
        cursor: pointer;
        transform: scale(.98);
    }

    > svg {
        font-size: 24px;
        align-self: flex-end;
        position: absolute;
    }

    > img {
        width: 176px;
        align-self: center;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
    }

    > h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.cake_200};
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 22px;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        > Button {
            width: 92px;
        }
    }

    /* @media (max-width: 650px) {
    } */
    
`;