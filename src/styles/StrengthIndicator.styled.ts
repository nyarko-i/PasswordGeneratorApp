import styled from "styled-components";



// Styled component for StrengthIndicator container
export const StrengthIndicatorStyled = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    padding: 0rem 1rem;
    justify-content: space-between;
    align-items: center;

    span{
        color: ${({ theme }) => theme.colors.grey};
    }


`





// Styled component for strength section
export const Strength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Styled component for individual bar
export const Bar = styled.div`
  height: 22px;
  width: 6px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

// Styled component for container of bars with dynamic styling based on strength level
export const BarsContainer = styled.div<{ strengthLevel: string }>`
  display: flex;
  gap: 0.5rem;
  margin-left: 0.75rem;

  ${Bar} {
    background-color: ${({ theme, strengthLevel }) => {
      switch (strengthLevel) {
        case "TOO WEAK!":
          return theme.colors.red;
        case "WEAK":
          return theme.colors.orange;
        case "MEDIUM":
          return theme.colors.yellow;
        case "STRONG":
          return theme.colors.neonGreen;
        default:
          return theme.colors.grey;
      }
    }};
    outline: ${({ theme, strengthLevel }) => {
      switch (strengthLevel) {
        case "TOO WEAK!":
          return `2px solid ${theme.colors.red}`;
        case "WEAK":
          return `2px solid ${theme.colors.orange}`;
        case "MEDIUM":
          return `2px solid ${theme.colors.yellow}`;
        case "STRONG":
          return `2px solid ${theme.colors.neonGreen}`;
        default:
          return `2px solid ${theme.colors.grey}`;
      }
    }};
  }

  ${({ strengthLevel, theme }) => {
    switch (strengthLevel) {
      case "MEDIUM":
        return `
          ${Bar}:nth-child(4) {
            background-color: transparent;
            outline: 2px solid ${theme.colors.almostWhite};
          }
        `;
      case "WEAK":
        return `
          ${Bar}:nth-child(3), ${Bar}:nth-child(4) {
            background-color: transparent;
            outline: 2px solid ${theme.colors.almostWhite};
          }
        `;
      case "TOO WEAK!":
        return `
          ${Bar}:nth-child(2), ${Bar}:nth-child(3), ${Bar}:nth-child(4) {
            background-color: transparent;
            outline: 2px solid ${theme.colors.almostWhite};
          }
        `;
      default:
        return ``;
    }
  }}
`;

