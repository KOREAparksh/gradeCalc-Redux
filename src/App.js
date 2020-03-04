import React from "react";
import { createGlobalStyle } from "styled-components";
import CalcTemplate from "./componenets/CalcTemplate";
import CalcHead from "./componenets/CalcHead";
import SubjectList from "./componenets/SubjectList";
import SubjectCreate from "./componenets/SubjectCreate";
import SubjectListContainer from "./containers/SubjectListContainer";
import CalcHeadContainer from "./containers/CalcHeadContainer";

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
        <CalcHeadContainer />
        <SubjectListContainer />
        <SubjectCreate />
      </CalcTemplate>
    </div>
  );
}

export default App;
