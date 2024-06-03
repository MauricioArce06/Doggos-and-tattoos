import styled from "styled-components";

export const CustomCancelModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222121;
  border-color: #cc9a5f;
  border-style: solid;
  border-width: 2px;
  height: 20rem;

  img {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
  }

  h2 {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-style: oblique;
    color: white;
  }
  p {
    color: white;
    font-size: 0.5rem;
    font-style: oblique;
    margin-bottom: -2.5rem;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    h2 {
      color: white;
      font-size: 2rem;
      font-style: oblique;
    }
    button {
      font-family: "Poppins", sans-serif;
      margin: 1em;
      padding: 0.5em;
      width: 5em;
      color: white;
      border-color: #cc9a5f;
      border-style: solid;
      border-width: 2px;
      letter-spacing: 1px;
    }
  }
`;
