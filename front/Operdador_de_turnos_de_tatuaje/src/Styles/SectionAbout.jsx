import styled from "styled-components";

export const SectonAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #cc9a5f;
    font-size: 5rem;
    font-family: "vanrott", sans-serif;
    font-style: oblique;
    margin-top: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
    div {
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
      flex-direction: row;
      background-color: #1f1e1e;
      box-shadow: none;
      img {
        width: 20rem;
        height: 20rem;
      }
      div {
        flex-direction: column;
        width: 70rem;
        border: none;
        h2 {
          color: #cc9a5f;
          font-size: 2rem;
          font-family: "vanrott", sans-serif;
          font-style: oblique;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        p {
          color: white;
          font-weight: 100;
          font-size: 1rem;
          font-family: "Poppins", sans-serif;
          margin: 1rem;
          margin-bottom: 2rem;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
