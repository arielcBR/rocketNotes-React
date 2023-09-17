import { Container, Form } from './styles.js';
import { Header } from '../../components/Header';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New(){

    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                    
                    <Section title="Links Úteis">
                        <NoteItem value="https://duckduckgo.com"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>


    );
}