import { useState, useEffect } from 'react';
import { getWorkflows } from '../services/workflows';

const useWorkflows = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const data = await getWorkflows();
        setWorkflows(data.workflows);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflows();
  }, []);

  return { workflows, loading, error };
};

export default useWorkflows;
