import styled from "styled-components";

export const CustomSchedule = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h2 {
    color: #cc9a5f;
    font-size: 2rem;
    margin: 1em;
    font-weight: bold;
    font-style: oblique;
  }

  label {
    color: #a26d42;
    font-size: 1.5rem;
    margin: 0.5em;
    font-weight: bold;
    font-style: oblique;
    text-align: center;

    input {
      justify-content: center;
      align-items: center;
      background-color: #242020;
      color: white;
      border-color: #cc9a5f;
      border-style: solid;
      border-width: 2px;
      border-radius: px;
      width: 20rem;
      height: 1.5rem;
      margin-top: 1em;
      padding: 0.5em;
    }
  }
  button {
    margin: 1em;
    padding: 0.5em;
    width: 10em;
    background-color: #383535;
    color: white;
    border-color: #cc9a5f;
    border-style: solid;
    border-width: 2px;
    font-style: oblique;
  }

  button:hover {
    background-color: #242020;
    color: wheat;
  }
`;
