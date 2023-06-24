import { Container } from './styles';
import { Button } from '../Button';
import { useRef } from "react";

export function ButtonUploadFile({ id, icon, title, ...rest }) {

    const inputFileHidden = useRef(null);
    const handleUploadImage = () => {
        inputFileHidden.current.click();
    };

    return(
        <Container>
            <label htmlFor={id}>{title}</label>
            <input type="file" title={title} id={id} {...rest} ref={inputFileHidden} />
            <Button onClick={handleUploadImage}
                {...rest}
                icon={icon}
                type="button"
                className="dark"
                title='Selecione imagem'
            />
        </Container>
    )
}