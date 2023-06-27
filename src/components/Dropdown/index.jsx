import { Container } from './styles';

export function Dropdown({ id, icon, title, options, selected = null, ...rest }) {
    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            { icon && <img src={icon}/>}
            <select 
                value={selected}
                id={id}
                {...rest} 
            >
                {options.map(opt => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
            </select>
        </Container>
    )
}