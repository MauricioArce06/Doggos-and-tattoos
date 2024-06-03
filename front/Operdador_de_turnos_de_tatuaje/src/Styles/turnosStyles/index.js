import styled from "styled-components";

export const FlexDivrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vh;
  h2 {
    color: #cc9a5f;
    font-size: 2rem;
    margin: 1em;
    font-weight: bold;
    font-style: oblique;
  }
`;

export const CustomTurn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  border: 2px solid #cc9a5f;
  border-radius: 10px;
  background-color: #222121;
  width: 60em;
  padding: 1em;
  p {
    color: #cc9a5f;
    margin-right: 1em;
  }

  #status {
    font-weight: bold;
  }
`;
