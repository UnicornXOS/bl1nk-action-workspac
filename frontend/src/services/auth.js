import request from './api';

export const login = (email, password) => {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

export const logout = () => {
  return request('/auth/logout', {
    method: 'POST',
  });
};

export const getMe = () => {
  return request('/auth/me');
};
