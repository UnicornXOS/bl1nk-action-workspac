// A wrapper for making API calls to your backend.

const fetcher = async (url, options = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export const getWorkflows = () => fetcher('/api/workflows/list');
export const getTasks = () => fetcher('/api/tasks/list');
// Add other API functions here...
