import styled from 'styled-components';

export const Container = styled.div`
    /* > Input {
        
    } */
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
    flex-direction: row;
    justify-content: space-between;
    > label {
        width: 100%;
    }

    #image-upload {
        display: none;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const Ingredient = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;

    .add-new-ingredients {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        margin-top: 32px;
        width: 100%;
    }

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

// export const Description = styled.div``;
