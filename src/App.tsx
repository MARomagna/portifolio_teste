import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import temalight from './themes/light.'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)
  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }
  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temalight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
