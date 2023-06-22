
// import styled from 'styled-components';

// export const Container = styled.div``;

import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.colors.dark_900}; */
  border-radius: 8px;
  padding: 12px;
`;

export const Main = styled.div`
  /* width: 200px; */
  /* height: 32px; */
  padding: 8px 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  background-color: ${({ theme, isNew }) => !isNew ? 'transparent' : `${theme.colors.light_200}`};
  color: ${({ theme }) => theme.colors.light_500};

  outline: none;

  border: ${({ theme, isNew }) => !isNew ? `2px dashed ${theme.colors.light_500}` : 'none'};
  width: 130px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.tomato_100};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.tomato_100};
  }

  > input {
    color: ${({ theme }) => theme.colors.light_500};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  > button {
    background: none;
    /* font-size: 20px; */
    /* background-color: palegreen; */
    > svg {
      /* width: 100%;
      height: 100%; */
      color: ${({ theme, isNew }) => !isNew ? `${theme.colors.light_500}` : `${theme.colors.light_500}`};
      
      &:hover {
        color: ${({ theme }) => theme.colors.light_500};
      }
    }
  }
`;