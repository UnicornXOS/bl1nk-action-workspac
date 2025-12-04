import request from './api';

export const getWorkflows = () => {
  return request('/workflows/list');
};

export const createWorkflow = (data) => {
  return request('/workflows/create', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
