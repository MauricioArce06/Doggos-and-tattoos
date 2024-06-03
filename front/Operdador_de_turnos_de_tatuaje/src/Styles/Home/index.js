import styled from "styled-components";

export const CustomFirstSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 25rem;
    margin-left: 15rem;

    h2 {
      color: #cc9a5f;
      font-family: "vanrott", sans-serif;
      font-size: 4rem;
      font-weight: 400;
      font-style: italic;
      font-weight: 100;
      font-style: oblique;
      width: 30rem;
    }

    p {
      color: white;
      font-size: 1rem;
      font-weight: 100;
      letter-spacing: 1px;
      line-height: 1.2em;
      margin-top: 2rem;
    }

    button {
      font-family: "vanrott", sans-serif;
      font-weight: 100;
      margin-top: 2rem;
      margin-left: 8rem;
      padding: 0.5em;
      width: 10em;
      color: white;
      border-color: #cc9a5f;
      border-style: solid;
      border-width: 2px;
      background-color: #383535;
      cursor: pointer;
      letter-spacing: 1px;
    }

    button:hover {
      background-color: #242020;
      color: wheat;
    }
  }

  .imageGrande {
    width: 25rem;
    height: 30rem;
    margin-left: 10rem;
  }

  .imagePequeña {
    position: relative;
    color: 3;
    top: 12rem;
    right: 37rem;
    width: 15rem;
    height: 15rem;
  }
`;

export const CustomSecondSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 5rem;
  margin-left: 10rem;
  margin-left: 16rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-left: 5rem;
    margin-bottom: 5rem;
    a {
      text-align: center;
      font-family: "vanrott", sans-serif;
      padding: 0.5em;
      width: 13.9rem;
      color: white;
      border-color: #cc9a5f;
      border-style: solid;
      border-width: 2px;
      background-color: #383535;
      cursor: pointer;
      letter-spacing: 1px;
    }

    a:hover {
      background-color: #242020;
      color: wheat;
    }
    img {
      height: 15rem;
      width: 15rem;
    }
  }
`;
