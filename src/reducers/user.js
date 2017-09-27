const USER = 'USER';
const initialState = {};

const user = (state = initialState, action) => {
  switch(action.type) {
    case USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default user;
