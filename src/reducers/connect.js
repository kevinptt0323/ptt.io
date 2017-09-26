import { CONNECTION } from '../actions/connect';
const initialState = {
};

const connect = (state = initialState, action) => {
  switch(action.type) {
    case CONNECTION:
      switch(action.status) {
        case 'connected':
          return {
            ptt: action.ptt,
          };
        default:
          return {
            ptt: null,
          };
      }
      break;
    default:
      return state;
  }
};

export default connect;
