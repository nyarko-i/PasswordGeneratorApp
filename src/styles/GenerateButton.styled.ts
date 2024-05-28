import styled from "styled-components";

export const GenerateButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.neonGreen};
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  padding: 1rem;
  font-weight: 600;
  font-size: 0.85rem;
 
  transition: background-color 0.2s ease-in, color 0.2s ease-in, outline 0.2s ease-in;

  svg {
    margin-left: 1rem;
    transition: margin-left 0.2s ease-in;

    path {
      transition: fill 0.2s ease-in;
    }
  }

  &:active {
    outline: 2px solid ${({ theme }) => theme.colors.almostWhite};
    color: ${({ theme }) => theme.colors.almostWhite};

    svg {
      margin-left: 1rem;

      path {
        fill: ${({ theme }) => theme.colors.almostWhite};
      }
    }
  }
`;
