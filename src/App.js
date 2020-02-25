import React from "react";
import { createGlobalStyle } from "styled-components";
import CalcTemplate from "./componenets/CalcTemplate";
import CalcHead from "./componenets/CalcHead";
import SubjectList from "./componenets/SubjectList";
import SubjectCreate from "./componenets/SubjectCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <CalcTemplate>
        <CalcHead />
        <SubjectList />
        <SubjectCreate />
      </CalcTemplate>
    </div>
  );
}

export default App;
