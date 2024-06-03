import styled from "styled-components";
import { ErrorMessage } from "formik";

export const Modal = styled.div`
  position: absolute;
  top: 10.5rem;
  right: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: #222121;
  border-color: #cc9a5f;
  border-style: solid;
  border-width: 2px;
  h2 {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-style: oblique;
    color: white;
  }
  p {
    color: white;
    font-size: 0%.5;
    font-style: oblique;
    margin-bottom: -2.5rem;
    text-align: center;
  }
  div {
    button {
      font-family: "Poppins", sans-serif;
      margin: 1em;
      padding: 0.5em;
      width: 10em;
      color: white;
      border-color: #cc9a5f;
      border-style: solid;
      border-width: 2px;
      letter-spacing: 1px;
    }
  }

  .UserModalStyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 1em;
    margin-top: -5rem;
  }
`;
export const ButtonsModal = styled.div`
  position: relative;
  bottom: 5rem;
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
`;

export const CustomRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  label {
    color: #a26d42;
    font-size: 1rem;
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
      border-radius: 10px;
      width: 15em;
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

export const CustomErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 0.5em;
  font-size: 0.8em;
  text-align: center;
`;
