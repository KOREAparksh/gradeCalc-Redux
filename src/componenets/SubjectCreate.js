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

function SubjectCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <div className="gradeAndCredit" style={gradeAndCreditStyle}>
              <Dropdown className="grade" style={gradeStyle} text="평점">
                <Dropdown.Menu>
                  <Dropdown.Item text="A+" description="4.5" />
                  <Dropdown.Item text="A0" description="4.0" />
                  <Dropdown.Item text="B+" description="3.5" />
                  <Dropdown.Item text="B0" description="3.0" />
                  <Dropdown.Item text="C+" description="2.5" />
                  <Dropdown.Item text="C0" description="2.0" />
                  <Dropdown.Item text="D+" description="1.5" />
                  <Dropdown.Item text="D0" description="1.0" />
                  <Dropdown.Item text="F" description="0.0" />
                </Dropdown.Menu>
              </Dropdown>
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
