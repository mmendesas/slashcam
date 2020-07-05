const INITIAL_STATE = {
  auth: {
    signed: false,
    user: null,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN':
      return {
        auth: {
          ...state.auth,
          signed: true,
          user: action.payload,
        },
      };

    case '@auth/LOGOUT':
      return {
        auth: {
          ...state.auth,
          signed: false,
          user: null,
        },
      };

    default:
      return state;
  }
}

export const authStore = INITIAL_STATE;
