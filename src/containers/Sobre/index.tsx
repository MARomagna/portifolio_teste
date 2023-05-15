import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo='secundario'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum
      reiciendis mollitia, dolorum aut distinctio cupiditate, nostrum vel enim
      exercitationem officia quae quo laboriosam repellendus sed dolor et quia
      dolores.
    </Paragrafo>
    <GithubSecao>
      <img src='https://github-readme-stats.vercel.app/api?username=MARomagna&show_icons=true&theme=dracula&include_all_commits=true&count_private=true' />
      <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=MARomagna&layout=compact&langs_count=7&theme=dracula' />
    </GithubSecao>
  </section>
)
export default Sobre
