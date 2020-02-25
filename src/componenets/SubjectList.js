import React from "react";
import styled from "styled-components";
import SubjectItem from "./SubjectItem";

const SubjectListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function SubjectList() {
  return (
    <SubjectListBlock>
      <SubjectItem text="알고리즘" done={true} />
      <SubjectItem text="자료구조" done={true} />
      <SubjectItem text="데이터베이스" done={false} />
      <SubjectItem text="운영체제" done={false} />
    </SubjectListBlock>
  );
}

export default SubjectList;
