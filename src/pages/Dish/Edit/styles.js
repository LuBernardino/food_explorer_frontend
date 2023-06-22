import styled from 'styled-components';

export const Container = styled.div`

`;

export const Main = styled.div`
    margin: 0 90px 0 150px;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 32px;
        font-weight: 500;
    }

    @media (max-width: 650px) {
        margin: 0 32px;
    }

`;

export const Dish = styled.div`
    display: flex;
    gap: 32px;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const Ingredient = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 32px;
    margin-bottom: 64px;

    @media (max-width: 650px) {
        justify-content: center;
    }
`;

// export const Description = styled.div``;
