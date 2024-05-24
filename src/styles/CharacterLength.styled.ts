import styled from 'styled-components';

export const CharacterLengthStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin-bottom: 1rem;

  .p {
    color: ${({ theme }) => theme.colors.neonGreen};
  }
`;

export const StyledLabel = styled.label`
  margin: 0;
`;

// export const StyledPar = styled.p`
//   color: ${({ theme }) => theme.colors.neonGreen};
// `;

export const StyledInput = styled.input`
  margin-bottom: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  display: flex;
  align-items: center;

  &::-webkit-slider-runnable-track {
    height: 8px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.neonGreen} var(--thumb-percentage),
      ${({ theme }) => theme.colors.veryDarkGrey} var(--thumb-percentage)
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.colors.almostWhite};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px; /* Center the thumb in relation to the track */
    transition: background-color 0.2s ease-in, outline 0.2s ease-in;
  }
`;
