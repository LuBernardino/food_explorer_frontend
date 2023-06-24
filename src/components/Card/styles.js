import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.dark_200};
    flex: 0 0 330px;
    height: ${(prop) => prop.isMobile ? '292px' : '462px'};
    width: ${(prop) => prop.isMobile ? '210px' : '304px'};

    padding: 20px;
    border: none;
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    transition: all .8s;

    &:hover {
        /* border: 1px solid ${({ theme }) => theme.colors.light_800}; */
        cursor: pointer;
        transform: scale(.98);
    }

    > svg {
        font-size: 24px;
        align-self: flex-end;
        position: absolute;
    }

    > img {
        width: ${(prop) => prop.isMobile ? '88px' : '176px'};
        align-self: center;
    }

    > h1 {
        font-size: ${(prop) => prop.isMobile ? '16px' : '24px'};
        font-family: 'Poppins', sans-serif;
    }

    > h2 {
        font-size: ${(prop) => prop.isMobile ? '16px' : '32px'};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.cake_200};
    }

    > p {
        font-size: ${(prop) => prop.isMobile ? '14px' : '24px'};
        font-family: 'Roboto', sans-serif;
        line-height: 22px;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;

        > Button {
            width: ${(prop) => prop.isMobile ? '160px' : '92px'};
            height: ${(prop) => prop.isMobile ? '32px' : '48px'};
        }
    }

    @media (max-width: 768px) {
        gap: 8px;

        .card-footer {
            gap: 0;
        }
    }
`;