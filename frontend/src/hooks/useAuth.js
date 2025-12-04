import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In a real app, you would check for a logged-in user here.
    setUser({ name: "John Doe" });
  }, []);

  return { user };
};

export default useAuth;
