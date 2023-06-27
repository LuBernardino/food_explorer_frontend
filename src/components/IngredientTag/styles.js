import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;
  padding: 8px 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : `${theme.colors.cake_100}`};
  color: ${({ theme }) => theme.colors.light_100 };

  outline: none;

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.colors.light_500}` : 'none'};
  width: fit-content;

  > label {
    display: flex;

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
      color: ${({ theme }) => theme.colors.light_100 };
      background-color: transparent;
      border: none;
      outline: none;
      width: 100%;
      
      &::placeholder {
        color: ${({ theme }) => theme.colors.light_100 };
      }
    }
  
    > button {
      background: none;
      font-size: 20px;

      > svg {
        color: ${({ theme, isNew }) => isNew ? theme.colors.cake_200 : theme.colors.cake_200};
        
        &:hover {
          color: ${({ theme }) => theme.colors.light_100};
        }
      }
    }
  }
`;