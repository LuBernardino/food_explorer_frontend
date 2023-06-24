
import { FiX, FiPlus } from 'react-icons/fi';
import { Container, Main } from './styles';
import { Input } from '../Input';

export function AddIngredients({ title, isNew = false, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>

      <Main>
        <label>
          <input
            type="text"
            readOnly={!isNew}
            placeholder="Adicionar"
            {...rest}
          />
          <button type="button" onClick={onClick}>
            {!isNew ? <FiPlus /> : <FiX />}
          </button>
        </label>

      </Main>
    </Container>
  );
}