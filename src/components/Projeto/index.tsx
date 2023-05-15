import Paragrafo from '../Paragrafo'
import Titulo from '../titulo'
import { Card, LinkBotao } from './styles'
const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo='secundario'>Lista de Tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
