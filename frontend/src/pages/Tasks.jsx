import React from 'react';
import Layout from '../components/common/Layout';
import TaskList from '../components/tasks/TaskList';

const Tasks = () => {
  // In a real app, you would fetch this data
  const tasks = [];

  return (
    <Layout>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default Tasks;
