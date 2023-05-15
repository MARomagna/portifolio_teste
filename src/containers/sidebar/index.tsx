import Avatar from '../../components/Avatar/indes'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
