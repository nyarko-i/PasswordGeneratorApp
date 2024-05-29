import { CharacterLengthStyled } from './CharacterLength.styled';
import { createGlobalStyle } from 'styled-components';
import { PasswordContainerStyled, ClipboardStyled, ButtonStyled } from './PasswordContainer.styled';
import { SectionStyled } from './Section.styled';
import { CheckBoxStyled, CheckboxContainerStyled, SpanStyled } from './CheckBox.styled';
import { GenerateButtonStyled } from './GenerateButton.styled';

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


  /* Desktop */
  @media (min-width: 800px) {
    #root {
      main {
        ${PasswordContainerStyled} {
          ${ClipboardStyled} {
            ${ButtonStyled} {
              &:hover {
                transform: scale(1.1);

                svg {
                  path {
                    fill: ${({ theme }) => theme.colors.almostWhite};
                  }
                }
              }
            }
          }
        }

        ${SectionStyled} {
          ${CharacterLengthStyled} {
            input[type="range"] {
              &::-webkit-slider-thumb {
                &:hover {
                  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
                  outline: 2px solid ${({ theme }) => theme.colors.neonGreen};

                  + ::-webkit-slider-runnable-track {
                    background-size: var(--thumb-percentage) 100%, 100% 100%;
                  }
                }
              }
            }
          }

          ${CheckboxContainerStyled} {
            ${CheckBoxStyled} {
              ${SpanStyled} {
                &:hover {
                  outline: 2px solid ${({ theme }) => theme.colors.neonGreen};
                }
              }
            }
          }

          ${GenerateButtonStyled} {
            &:hover {
              background-color: transparent;
              color: ${({ theme }) => theme.colors.neonGreen};
              outline: 2px solid ${({ theme }) => theme.colors.neonGreen};

              svg {
                margin-left: 1.5rem;

                path {
                  fill: ${({ theme }) => theme.colors.neonGreen};
                }
              }
            }
          }
        }
      }
    }
  }

  /* Medium Mobile / Small Tablet */
  @media (max-width: 580px) {
    body {
      overflow: hidden;
      overflow-x: hidden;
    }

    #root {
      overflow: hidden;
      overflow-x: hidden;
      width: 100vw;

      main {
        width: 95vw;
        padding: 1rem;
      }
    }
  }

  /* Small Mobile */
  @media (max-width: 380px) {
    #root {
      main {
        ${PasswordContainerStyled} {
          min-width: 100%;
          max-width: 100%;

          > p {
            font-size: 0.9rem;
            word-break: break-all;
          }

          ${ClipboardStyled} {
            margin-left: 3rem;
          }
        }

        ${SectionStyled} {
          ${CharacterLengthStyled} {
            div {
              label {
                font-size: 0.9em;
              }
            }
          }

          ${CheckboxContainerStyled} {
            ${CheckBoxStyled} {
              font-size: 0.85em;
            }
          }

          .strength-indicator-container {
            font-size: 0.8em;
          }
        }
      }
    }
  }

  /* Active states for touch devices */
  @media (max-width: 800px) {
    #root {
      main {
        ${PasswordContainerStyled} {
          ${ClipboardStyled} {
            ${ButtonStyled} {
              &:active {
                transform: scale(1.1);

                svg {
                  path {
                    fill: ${({ theme }) => theme.colors.almostWhite};
                  }
                }
              }
            }
          }
        }

        ${SectionStyled} {
          ${CharacterLengthStyled} {
            input[type="range"] {
              &::-webkit-slider-thumb {
                &:active {
                  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
                  outline: 2px solid ${({ theme }) => theme.colors.neonGreen};

                  + ::-webkit-slider-runnable-track {
                    background-size: var(--thumb-percentage) 100%, 100% 100%;
                  }
                }
              }
            }
          }

          ${CheckboxContainerStyled} {
            ${CheckBoxStyled} {
              ${SpanStyled} {
                &:active {
                  outline: 2px solid ${({ theme }) => theme.colors.neonGreen};
                }
              }
            }
          }

          .strength-indicator-container {
            .strength-indicator {
              .bars {
                .bar {
                  &:active {
                    background-color: ${({ theme }) => theme.colors.grey};
                    outline: 2px solid ${({ theme }) => theme.colors.grey};
                  }
                }
              }
            }
          }

          ${GenerateButtonStyled} {
            &:active {
              background-color: transparent;
              color: ${({ theme }) => theme.colors.neonGreen};
              outline: 2px solid ${({ theme }) => theme.colors.neonGreen};

              svg {
                margin-left: 1.5rem;

                path {
                  fill: ${({ theme }) => theme.colors.neonGreen};
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GlobalStyles;
