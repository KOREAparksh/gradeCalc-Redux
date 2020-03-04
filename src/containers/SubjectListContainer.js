import React from "react";
import SubjectList from "../componenets/SubjectList";
import { useSelector, useDispatch } from "react-redux";

function SubjectListContainer() {
  const state = useSelector(state => state.subject);
  const { subjects, input } = state;

  const dispatch = useDispatch();

  console.log(state);

  return <SubjectList input={input} subjects={subjects} />;
}

export default SubjectListContainer;
