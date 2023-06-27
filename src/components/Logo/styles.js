import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40px max-content;
  row-gap: 0;
  align-items: center;
  align-self: center;
  cursor: pointer;

  > h1 {
    font-size: ${(props) => props.fontSize ?? "42px"};
  }

  &.dark {
    > img {
      filter: brightness(0) saturate(100%) invert(31%) sepia(23%) saturate(288%)
        hue-rotate(157deg) brightness(94%) contrast(81%);
    }
  }

  > img {
    width: 30px;
  }

  > span {
    color: ${({ theme }) => theme.colors.cake_200};
    margin-top: -3px;
    grid-column-start: 2;
    justify-self: end;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    gap: 8px;

    > h1 {
      font-size: 20px;
    }

    > img {
      width: 20px;
    }
  }
`;
