import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'JetBrains Mono', monospace;
    --line-height: 1.5;
    --font-weight: 400;
    --font-synthesis: none;
    --text-rendering: optimizeLegibility;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
    --box-sizing: border-box;
    --background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    --color: ${({ theme }) => theme.colors.almostWhite};
  }

  *, *::before, *::after {
    box-sizing: var(--box-sizing);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    line-height: var(--line-height);
    font-weight: var(--font-weight);
    font-synthesis: var(--font-synthesis);
    text-rendering: var(--text-rendering);
    -webkit-font-smoothing: var(--webkit-font-smoothing);
    -moz-osx-font-smoothing: var(--moz-osx-font-smoothing);
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--background-color);
    color: var(--color);
  }
`;

export default GlobalStyles;
