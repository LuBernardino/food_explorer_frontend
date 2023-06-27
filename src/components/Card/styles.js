import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.dark_200};
    height: ${(prop) => prop.isMobile ? '292px' : 'auto'};
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
        height: ${(prop) => prop.isMobile ? '88px' : '176px'};
        align-self: center;
        border-radius: 50%;
    }
        
    h1 {
        font-size: ${(prop) => prop.isMobile ? '16px' : '24px'};
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.light_100};

        //Deixar nome do prato em uma única linha.
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
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
        font-size: 14px;
        padding: 0 24px;
        line-height: 22px;
        height: 45px;
        
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
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
            flex-direction: column;
        }
    }
`;