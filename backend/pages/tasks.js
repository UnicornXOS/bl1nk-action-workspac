import React from 'react';
import Layout from '../components/common/Layout';
import TaskList from '../components/tasks/TaskList';

const Tasks = () => {
  return (
    <Layout>
      <h1>Tasks</h1>
      <TaskList />
    </Layout>
  );
};

export default Tasks;
