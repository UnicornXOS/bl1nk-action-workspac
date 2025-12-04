const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

export default request;
