import styled from "styled-components";

export const PasswordContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const PlaceHolderStyled = styled.p`
    color: ${({ theme }) => theme.colors.grey};
`;

export const ErrorStyled = styled.p`
    color: ${({ theme }) => theme.colors.red};
    opacity: 0.3;
    font-size: 0.85rem;
    word-break: normal;
`;

export const ClipboardStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const CopiedStyled = styled.p`
    color: ${({ theme }) => theme.colors.neonGreen};
    font-size: 0.75rem;
    margin-right: 0.5rem;

`

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.25rem;

    transition-property: transform;
    transition: 0.2s ease-in;

    svg {
        path {
            transition: fill 0.2s ease-in;
        }
    }
`
