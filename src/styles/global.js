import { createGlobalStyle } from "styled-components";
// import theme from "./theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark_400};
        color: ${({ theme }) => theme.colors.light_100};

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
