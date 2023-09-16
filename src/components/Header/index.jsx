import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout} from "./styles";

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/arielcBR.png" alt="Foto do usuário" />

                <div>
                    <span>Bem Vindo</span>
                    <strong>Ariel Campos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}