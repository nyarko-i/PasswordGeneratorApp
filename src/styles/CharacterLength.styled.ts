import styled from 'styled-components';

export const CharacterLengthStyled = styled.div`
 

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    margin-bottom: 1rem;
  }

  label {
    margin: 0;
  }



  p {
    color: ${({ theme }) => theme.colors.neonGreen};
    font-size: 1.25rem;
  }

  input[type="range"] {
    margin-bottom: 1rem;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};

    display: flex;
    align-items: center;

    &::-webkit-slider-runnable-track {
      height: 8px;
      background: linear-gradient(to right, ${({ theme }) => theme.colors.neonGreen} var(--thumb-percentage), ${({ theme }) => theme.colors.veryDarkGrey} var(--thumb-percentage));
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-color: ${({ theme }) => theme.colors.almostWhite};
      height: 20px;
      width: 20px;
      border-radius: 50%;
      cursor: pointer;

      margin-top: -6px; 

      transition-property: background-color, outline;
      transition: 0.2s ease-in;
    }
  }
`;
