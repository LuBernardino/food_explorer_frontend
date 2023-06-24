import styled from 'styled-components';

export const Container = styled.span`
    font-family: ${({ theme }) => theme.fonts.roboto_bold_big};
    font-size: 24px;
    margin-right: 6px;
    color: ${({ theme }) => theme.colors.light_300};
    background: transparent;
    display: flex;
    gap: 14px;

    > button {
        background: transparent;
        border: none;

        > svg {
            font-size: 24px;
            color: ${({ theme }) => theme.colors.light_100};
        }
    }
        
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.light_300};
    }

    @media (max-width: 768px) {
              
        > h1 {
        font-size: 16px;
       } 
    }
`;