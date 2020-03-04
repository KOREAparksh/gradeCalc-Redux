import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

import { Dropdown, Input } from "semantic-ui-react";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const gradeAndCreditStyle = {
  display: "flex",
  alignItems: "center",
  padding: "12px"
};

const gradeStyle = {
  marginRight: "30px"
};

const friendOptions = [
  {
    key: "grade",
    text: "A+",
    value: 4.5
  },
  {
    key: "grade",
    text: "A0",
    value: 4.0
  },
  {
    key: "grade",
    text: "B+",
    value: 3.5
  },
  {
    key: "grade",
    text: "B0",
    value: 3.0
  },
  {
    key: "grade",
    text: "C+",
    value: 2.5
  },
  {
    key: "grade",
    text: "C0",
    value: 2
  },
  {
    key: "grade",
    text: "D+",
    value: 1.5
  },
  {
    key: "grade",
    text: "D0",
    value: 1
  },
  {
    key: "grade",
    text: "F",
    value: 0
  }
];

function SubjectCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <div className="gradeAndCredit" style={gradeAndCreditStyle}>
              <Dropdown
                style={gradeStyle}
                placeholder="평점"
                fluid
                selection
                options={friendOptions}
              />
              <Input placeholder="학점" />
            </div>
            <Input
              placeholder="과목명을 입력한 뒤, Enter을 누르세요"
              style={{ width: "100%" }}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default SubjectCreate;
