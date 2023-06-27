import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100vh;
  margin-left: 150px;

  #logo {
    -webkit-animation: focus-in-expand 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: focus-in-expand 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-left: 0;
    height: 0;
  }

  @-webkit-keyframes focus-in-expand {
    0% {
      letter-spacing: -5px;
      -webkit-filter: blur(100px);
      filter: blur(100px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -5px;
      -webkit-filter: blur(100px);
      filter: blur(100px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark_700};
  border: none;
  border-radius: 16px;
  padding: 32px 64px;
  margin: auto 100px;

  > form {
    -webkit-animation: tilt-in-tr 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: tilt-in-tr 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    h1 {
      /* width: 100%; */
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 32px;
      text-align: center;
    }

    Button {
        margin-top: 32px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    text-align: center;
    margin: 32px 0;
    color: ${({ theme }) => theme.colors.light_100};
  }

  @media (max-width: 768px) {
    background-color: transparent;
    padding: 70px 90px;

    > h1 {
      display: none;
    }
  }

  @-webkit-keyframes tilt-in-tr {
    0% {
      -webkit-transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px)
        skew(-12deg, -15deg);
      transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px)
        skew(-12deg, -15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-tr {
    0% {
      -webkit-transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px)
        skew(-12deg, -15deg);
      transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px)
        skew(-12deg, -15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
`;
