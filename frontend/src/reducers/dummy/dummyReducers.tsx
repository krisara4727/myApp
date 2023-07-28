import { createReducer } from "../../utils/ReducerUtils";

const initialState = {
    data: "krishna chivte",
}

const dummyReducer = createReducer(initialState, {
    ["DUMMY_ACTION"]: (state: any) => {
      return { ...state, initialized: false };
    },
})

export default dummyReducer;