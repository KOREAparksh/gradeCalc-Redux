import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "subject/CHANGE_INPUT";
const ADD = "subject/ADD";
const REMOVE = "subject/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const add = createAction(ADD, subject => ({
  id: id++,
  name: subject.name,
  credits: subject.credits,
  grade: subject.grade
}));

export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: "",
  subjects: [
    {
      id: 1,
      name: "자료구조",
      credits: 3,
      grade: 4.5
    },
    {
      id: 2,
      name: "알고리즘",
      credits: 4,
      grade: 3.5
    }
  ]
};

const subject = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
    [ADD]: (state, { payload: subject }) => ({
      ...state,
      subject: state.subjects.concat(subject)
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      subject: state.subjects.filter(subject => subject.id !== id)
    })
  },
  initialState
);

export default subject;
