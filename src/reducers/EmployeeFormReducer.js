import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE, 
  EMPLOYEE_SAVE_SUCCESS, 
  EMPLOYEE_CLEAR 
} from '../actions/types';

const initialState = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default (state = initialState, action) => { 
  console.log(`action: ${JSON.stringify(action)}`);
  switch (action.type) { 
    case EMPLOYEE_UPDATE: 
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEE_SAVE_SUCCESS:
      return initialState;
    case EMPLOYEE_CLEAR:
      return initialState;
    default:
      return state;
    }
};
