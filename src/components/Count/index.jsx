import { Container } from './styles';
import { FiMinus, FiPlus  } from 'react-icons/fi';

export function Count({ quantity, setQuantity, maxQuantity, ...rest }) {

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }

    const handleDecrement = () => { 
        if(quantity > 1)
            setQuantity(quantity - 1);
    }

    const handleIncrement = () => {
        if(quantity < maxQuantity)
            setQuantity(quantity + 1);
    }

    return(
        <Container {...rest}>
            <button onClick={handleDecrement}><FiMinus/></button>
            <h1>{minTwoDigits(quantity)}</h1>
            <button onClick={handleIncrement}><FiPlus/></button>
        </Container>
    )
}