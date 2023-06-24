
import { FiX, FiPlus } from 'react-icons/fi';
import { Container } from './styles';
import { Input } from '../Input';

export function IngredientTag({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
        <label>
          <input
            type="text"
            value={value}
            readOnly={!isNew}
            placeholder="Adicionar"
            {...rest}
          />
          <button type="button" onClick={onClick}>
            {isNew ? <FiPlus /> : <FiX />}
          </button>
        </label>
    </Container>
  );
}