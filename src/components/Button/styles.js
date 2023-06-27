import styled from 'styled-components';

export const Container = styled.button`
    width: ${(prop) => prop.width ? prop.width : '172px' };
    background: ${({ theme }) => theme.colors.tomato_100};
    color: ${({ theme }) => theme.colors.light_100};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    height: 48px;
    border: 0;
    border-radius: 5px;
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
    }

    &:disabled:hover {
        background: #DB5863;
    }
    
    &.dark {
        background: ${({ theme }) => theme.colors.dark_900};
        width: ${(prop) => prop.width ? prop.width : '172px' };

        @media (max-width: 768px) {

            &.dark {
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) {

        &:disabled {
            width: 100%;
        }
    }
`;