import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = initialState, action) => { 
  switch (action.type) {
    case EMAIL_CHANGED:
      // นำ state และ email: action.payload มา merge 
      // แล้ว rewrite ลงไปใน object ใหม่เอี่ยม จากนั้นก็ return ออกมา
      return { ...state, email: action.payload }; 
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, 
        user: action.payload, 
        error: '',
        loading: false,
        email: '',
        password: ''
      };
    case LOGIN_USER_FAIL:
      return { ...state, 
        error: 'Authentication Failed.', 
        password: '',
        loading: false };  
    case LOGIN_USER:
        return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
