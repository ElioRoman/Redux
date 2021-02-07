import { ADDUSER, DELETEUSER } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.data),
      };

    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(data => data.id !== action.id),
      };

    default:
      return state;
  }
};
