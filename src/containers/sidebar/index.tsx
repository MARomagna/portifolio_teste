import Avatar from '../../components/Avatar/indes'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = { trocaTema: () => void }
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Marco Romagna</Titulo>
      <Paragrafo fontSize={16} tipo='secundario'>
        MAromagna
      </Paragrafo>
      <Descricao tipo='principal' fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
