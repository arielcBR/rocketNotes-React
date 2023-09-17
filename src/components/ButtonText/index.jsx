import { Container } from "./styles";

export function ButtonText({title, isactived = false, ...rest}){
    return (
        <Container type="button" $isactived={isactived.toString()} {...rest}>
            {title}
        </Container>
    );
}