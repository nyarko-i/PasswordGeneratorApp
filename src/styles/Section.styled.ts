import styled from "styled-components";

export const SectionStyled = styled.section`
    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`