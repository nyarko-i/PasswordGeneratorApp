import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme.styled"

import GlobalStyles from "./styles/Global"







function App() {
 

  return (
    <>
      <ThemeProvider theme={ theme }>
        <GlobalStyles/>
        


      </ThemeProvider>
    </>
  )
}

export default App
