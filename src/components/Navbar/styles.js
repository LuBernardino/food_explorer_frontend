import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 28px 100px;
    /* background-color: plum; */
    background-color: ${({ theme }) => theme.colors.dark_600};

    display: flex;
    flex-direction: row;
    /* gap: 32px; */
    justify-content: space-between;
    align-items: center;

    > img {
        display: none;
    }

    > Button {
        width: 216px;
    }

    @media (max-width: 600px) {
        
        padding: 56px 28px 24px 28px;

        > img {
            display: block;
            cursor: pointer;
        }
        
        > Button {
            display: none;
        }
    }
`;