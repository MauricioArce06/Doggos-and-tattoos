import styled from "styled-components";

export const CustomFooter = styled.header`
  display: flex;
  background: linear-gradient(0deg, rgb(25, 27, 28) 52%, rgb(41, 44, 46) 100%);
  justify-content: space-around;
  padding: 1.25rem 5.625rem;
  padding-left: 10rem;
  font-size: 1rem;
`;

export const FooterBotons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
