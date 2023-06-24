import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: transparent;
    margin-top: 32px;
    cursor: pointer;
    
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light_500};
    }

    > select {
        background-color: ${({ theme }) => theme.colors.dark_900};
        color: ${({ theme }) => theme.colors.light_100};
        width: 100%;
        border: none;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
        font-family: 'Roboto', sans-serif;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjQ1NDUgNy44Mjk1QzQuODkzODQgNy4zOTAxNyA1LjYwNjE2IDcuMzkwMTcgNi4wNDU1IDcuODI5NUwxMiAxMy43ODRMMTcuOTU0NSA3LjgyOTVDMTguMzkzOCA3LjM5MDE3IDE5LjEwNjIgNy4zOTAxNyAxOS41NDU1IDcuODI5NUMxOS45ODQ4IDguMjY4ODQgMTkuOTg0OCA4Ljk4MTE2IDE5LjU0NTUgOS40MjA1TDEyLjc5NTUgMTYuMTcwNUMxMi4zNTYyIDE2LjYwOTggMTEuNjQzOCAxNi42MDk4IDExLjIwNDUgMTYuMTcwNUw0LjQ1NDUgOS40MjA1QzQuMDE1MTcgOC45ODExNiA0LjAxNTE3IDguMjY4ODQgNC40NTQ1IDcuODI5NVoiIGZpbGw9IiNDNEM0Q0MiLz4KPC9zdmc+Cg==');
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .85em auto, 100%;
        cursor: pointer;
        
        &:placeholder {
            color: ${({ theme }) => theme.colors.light_500};
        }

        &:placeholder:focus {
            border: 1px solid ${({ theme }) => theme.colors.light_100};
        }

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.light_100};
        }

    }

    > svg {
        margin-left: 16px;
    }
`;