import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 77px;
    padding: 28px 100px;
    background-color: peru;
    /* background-color: ${({ theme }) => theme.colors.dark_600}; */
    color: ${({ theme }) => theme.colors.light_700};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    align-self: end;

    > p {
        color: ${({ theme }) => theme.colors.light_200};
    }
    
    @media (max-width: 600px) {
        padding: 20px;
        align-items: center;
        
        > p {
            font-size: 12px;            
        }
    }

    /* @media (min-width: 1440px) {
        position: fixed;
    } */
`;