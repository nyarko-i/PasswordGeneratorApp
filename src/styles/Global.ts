import { createGlobalStyle } from "styled-components"

const StyledGlobal = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap");

    :root {
    font-family: "JetBrains Mono", monospace;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

`

export default StyledGlobal