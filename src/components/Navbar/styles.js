import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 28px 100px;
    background-color: ${({ theme }) => theme.colors.dark_600};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    > img {
        display: none;
    }

    > Button {
        width: 216px;
    }

    .requests {
        display: none;
    }

    .menu {
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.dark_500};
        height: 0;
        opacity: 0;
        transition: 0.5s;
        display: none;
    }

    .menu.active {
        height: 100vh;
        opacity: 1;
        transition: 0.5s;
        visibility: visible;
    }

    @media (max-width: 768px) {
        
        padding: 56px 28px 24px 28px;

        > img {
            display: block;
            cursor: pointer;
        }
        
        > Button {
            display: none;
        }

        .requests {
            display: block;
            position: relative;

            p {
                background-color: ${({ theme }) => theme.colors.tomato_100};
                color: ${({ theme }) => theme.colors.light_100};
                border-radius: 50%;
                font-size: 14px;
                padding: 2px 6px;
                position: absolute;
                top: -4px;
                right: -4px;
            }
        }

        .out {
            display: none;
        }

        //MENU MOVEL
        .menu {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;

            h2 {
                font-size: 24px;
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                border-bottom: 2px solid ${({ theme }) => theme.colors.dark_1000};
                padding: 36px 28px 10px 28px;
                margin: 0 28px;
                color: ${({ theme }) => theme.colors.light_100};
                cursor: pointer;
            }

            header {
                display: flex;
                background-color: ${({ theme }) => theme.colors.dark_700};
                padding: 56px 28px 24px 28px;
                gap: 16px;
                align-items: center;

                > img {
                    height: 16px;
                }

                h1 {
                    font-size: 21px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                }
            }
        }
    }
`;