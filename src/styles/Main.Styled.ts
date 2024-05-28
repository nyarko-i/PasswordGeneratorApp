import styled from "styled-components";
 
export const MainStyled = styled.main`
    width: 540px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
    


    h1 {
      text-align: center;
      color: ${({ theme }) => theme.colors.grey};
      font-size: 1.5rem;
    
    }
`