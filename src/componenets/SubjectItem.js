import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const SubjectItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Credit = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
`;

const Grade = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
`;
const Text = styled.div`
  flex: 3;
  font-size: 19px;
  font-weight: bold;
  color: #495057;
`;

function SubjectItem({ id, done, text }) {
  return (
    <SubjectItemBlock>
      <Credit>3학점</Credit>
      <Grade>A+</Grade>
      <Text>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </SubjectItemBlock>
  );
}

export default SubjectItem;
