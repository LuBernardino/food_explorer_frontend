import styled from 'styled-components';

export const Container = styled.div`

    > img {
        padding: 0 124px 0 54px;
        width: 100%;
        margin-top: 24px;
    }

    .carrouselcards {
        padding: 48px 124px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        > h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 32px;
        }
    }

    .cards {
        display: flex;
        gap: 27px;
        position: relative;
        overflow: hidden;
        
        > svg {
            cursor: pointer;
            height: 450px;
            /* background-color: black; */
            /* width: 50px; */
        }
        
        > svg:first-child {
            background-color: violet;
            position: absolute;
            font-size: 40px;
            align-self: center;
        }
            
        > svg:last-child {
            background-color: darkcyan;
            font-size: 40px;
            position: absolute;
            right: 0;
            align-self: center;
        }

        .swiper-button-prev {
            background: linear-gradient(to right, #000, #000A0F, 60%, transparent);
            text-align: center;
            top: 0;
            left: 0;
            bottom: 0;
            height: 110%;
            width: 250px;
            justify-content: left;
            padding-left: 20px;
        }

        .swiper-button-next {
            background: linear-gradient(to left, #000, #000A0F, 60%, transparent);
            text-align: center;
            top: 0;
            right: 0;
            bottom: 0;
            height: 110%;
            width: 250px;
            justify-content: right;
            padding-right: 20px;
        }
    }

        @media (max-width: 650px) {

            > img {
                padding: 0 16px;
            }

            .carrouselcards {
            padding: 62px 24px;
            display: flex;
            gap: 24px;

            > h1 {
                font-size: 18px;
            }
        }

    }
`;