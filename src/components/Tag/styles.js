import styled from 'styled-components';

export const Container = styled.span`
    font-size: ${({ theme }) => theme.colors.poppins_medium_100};;
    padding: 4px 12px;
    border-radius: 5px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.light_100};
    background: ${({ theme }) => theme.colors.dark_1000};

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.cake_100};
    }

`;