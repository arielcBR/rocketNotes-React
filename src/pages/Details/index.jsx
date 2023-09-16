import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            suscipit, animi earum rerum expedita, cumque distinctio nobis est
            reprehenderit ducimus tenetur quas aut eos eligendi incidunt enim
            numquam voluptate. Adipisci dolorum ut perferendis quibusdam aut
            odio doloribus eaque exercitationem impedit sint aspernatur dolor at
            recusandae minus, in eos? Delectus dicta quos iure nam nemo itaque
            beatae accusantium mollitia natus! Magnam?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.rocketseat.com.br">Link 1</a>
              </li>
              <li>
                <a href="https://www.rocketseat.com.br">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
