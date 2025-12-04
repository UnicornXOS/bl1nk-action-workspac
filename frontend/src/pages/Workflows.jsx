import React from 'react';
import Layout from '../components/common/Layout';
import WorkflowList from '../components/workflows/WorkflowList';

const Workflows = () => {
  // In a real app, you would fetch this data
  const workflows = [];

  return (
    <Layout>
      <h1>Workflows</h1>
      <WorkflowList workflows={workflows} />
    </Layout>
  );
};

export default Workflows;
