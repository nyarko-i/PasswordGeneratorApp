import styled from "styled-components";

export const StrengthIndicatorStyled = styled.div`
    display: flex;
    background-color: $very-dark-grey;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;

    span{
        color: ${({ theme }) => theme.colors.grey};
    }


`



export const Strength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .bars {
    margin-left: 0.75rem;
    display: flex;
    gap: 0.5rem;

    .bar {
      height: 22px;
      width: 6px;
      background-color: ${({ theme }) => theme.colors.grey};
    }

    &.strong {
      .bar {
        background-color: ${({ theme }) => theme.colors.neonGreen};
        outline: 2px solid ${({ theme }) => theme.colors.neonGreen};
      }
    }

    &.medium {
      .bar:nth-child(1),
      .bar:nth-child(2),
      .bar:nth-child(3) {
        background-color: ${({ theme }) => theme.colors.yellow};
        outline: 2px solid ${({ theme }) => theme.colors.yellow};
      }

      .bar:nth-child(4) {
        background-color: transparent;
        outline: 2px solid ${({ theme }) => theme.colors.almostWhite};
      }
    }

    &.weak {
      .bar:nth-child(1),
      .bar:nth-child(2) {
        background-color: ${({ theme }) => theme.colors.orange};
        outline: 2px solid ${({ theme }) => theme.colors.orange};
      }

      .bar:nth-child(3),
      .bar:nth-child(4) {
        background-color: transparent;
        outline: 2px solid ${({ theme }) => theme.colors.almostWhite};
      }
    }

    &.too-weak {
      .bar {
        background-color: ${({ theme }) => theme.colors.red};
        outline: 2px solid ${({ theme }) => theme.colors.red};
      }

      .bar:nth-child(2),
      .bar:nth-child(3),
      .bar:nth-child(4) {
        background-color: transparent;
        outline: 2px solid ${({ theme }) => theme.colors.almostWhite};
      }
    }
  }
`
