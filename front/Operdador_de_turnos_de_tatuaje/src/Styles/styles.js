import styled from "styled-components";

const CustomHeader = styled.header`
  display: flex;
  background: linear-gradient(
    180deg,
    rgb(25, 27, 28) 52%,
    rgb(41, 44, 46) 100%
  );
  justify-content: space-between;
  padding: 1.25rem 5.625rem;
  padding-left: 10rem;
  font-size: 1rem;
`;

const ButtonCustom = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: white;
  a {
    padding: 10px;
    display: flex;
    border-color: #ffd700;
    flex-direction: row;
    list-style: none;
    margin-left: 15px;
    color: white;
    font-style: italic;
  }

  a:hover {
    color: #ac7434;
  }
`;

const LogoTitulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-right: 1em;
  }

  h1 {
    font-family: "vanrott", sans-serif;
    font-size: 3rem;
    font-weight: 100;
    font-style: italic;
    color: #cc9a5f;
  }
`;

const CustomNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    display: flex;
  }
`;

const CustomUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  button {
    position: static;
    background: none;
    border: none;
    cursor: pointer;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
    }
  }
`;

export { CustomNavBar, ButtonCustom, CustomHeader, LogoTitulo, CustomUser };
