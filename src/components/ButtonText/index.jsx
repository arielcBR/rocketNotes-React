import { Container } from "./styles";

export function ButtonText({title, isActived = false, ...rest}){
    return (
        <Container type="button" $isactived={isActived.toString()} {...rest}>
            {title}
        </Container>
    );
}