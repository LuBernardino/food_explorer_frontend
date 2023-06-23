import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.colors.tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    height: 48px;
    border: 0;
    border-radius: 5px;
    /* padding: 12px 24px; */
    /* margin-top: 32px; */
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all .5s;

    
    &:hover {
        background: ${({ theme }) => theme.colors.tomato_200};
        transform: scale(1.1);
    }
    
    &:disabled {
        background: ${({ theme }) => theme.colors.tomato_400};
        width: 172px;
    }

    &:disabled:hover {
        background: #DB5863;
    }
    
    &.dark {
        background: ${({ theme }) => theme.colors.dark_900};
        width: 172px;

        @media (max-width: 768px) {

            &.dark {
                width: 100%;
            }
        }
    }

    &.dark:hover {
        border: 1px solid ${({ theme }) => theme.colors.light_100};
    }

    @media (max-width: 768px) {

        &:disabled {
            width: 100%;
        }
    }
`;