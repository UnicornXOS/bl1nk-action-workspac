import request from './api';

export const getTasks = () => {
  return request('/tasks/list');
};

export const createTask = (data) => {
  return request('/tasks/create', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
