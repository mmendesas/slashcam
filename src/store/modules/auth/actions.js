export function login(user) {
  return {
    type: '@auth/LOGIN',
    payload: user,
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
