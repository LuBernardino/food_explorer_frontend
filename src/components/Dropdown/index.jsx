import { Container } from './styles';

export function Dropdown({ id, icon, title, options, ...rest }) {
    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            { icon && <img src={icon}/>}
            <select 
                id={id}
                {...rest} 
            >
                {options.map(opt => (<option value={opt.id}>{opt.title}</option>))}
            </select>
        </Container>
    )
}