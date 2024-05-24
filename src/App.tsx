import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme.styled"
import StyledGlobal from "./styles/Global"






function App() {
 

  return (
    <>
      <StyledGlobal/>
      <ThemeProvider theme={ theme}>

      </ThemeProvider>
    </>
  )
}

export default App
