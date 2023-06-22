import styled from 'styled-components';

export const Container = styled.span`
    font-family: ${({ theme }) => theme.fonts.roboto_bold_big};
    font-size: 24px;
    margin: 24px 120px;
    color: ${({ theme }) => theme.colors.light_300};
    background: transparent;
    display: flex;
    gap: 8px;
    cursor: pointer;

    @media (max-width: 650px) {
        margin: 32px 10px;
    }

    > button {
        background: transparent;
        border: none;
        
        > svg {
            font-size: 40px;
            color: ${({ theme }) => theme.colors.light_100};
        }
    }
    
    
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.light_300};
    }
`;