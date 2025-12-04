import { useState, useEffect } from 'react';
import { getTasks } from '../services/tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data.tasks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
};

export default useTasks;
