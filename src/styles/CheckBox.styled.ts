import styled from 'styled-components';

export const CheckboxContainerStyled = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

`

export const CheckBoxStyled = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  cursor: pointer;
  padding-left: 2rem;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

`;



export const SpanStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  outline: 2px solid ${({ theme }) => theme.colors.almostWhite};

  transition-property: background-color, outline;
  transition: 0.2s ease-in;

  input:checked + & {
    background-color: ${({ theme }) => theme.colors.neonGreen};
    outline: 2px solid ${({ theme }) => theme.colors.neonGreen};
  }

  &::after {
    content: url("/check.svg");
    position: absolute;
    right: 1px;
    top: -1px;
    display: none;
  }

  input:checked + &::after {
    display: block;
  }
`;
