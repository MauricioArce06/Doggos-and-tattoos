import styled from "styled-components";

export const SectionGalery = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    color: #cc9a5f;
    font-size: 5rem;
    font-family: "vanrott", sans-serif;
    font-style: oblique;
    margin-top: 4rem;
  }
`;

export const CustomGaleria = styled.div`
  display: flex;
  margin: 6rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222121;
  border-color: #cc9a5f;
  border-style: solid;
  border-width: 2px;
  width: 20rem;
  height: 25rem;
  padding: 1em;
  text-align: start;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  img {
    display: flex;
    align-items: center;
    width: 15rem;
    height: 18rem;
  }

  h1 {
    color: #cc9a5f;
    font-size: 1.5rem;
    margin: 0.5em;
  }

  p {
    color: white;
    font-size: 1rem;
  }

  &&:hover {
    margin: 5rem;
    transform: scale(1.2);
  }
`;
