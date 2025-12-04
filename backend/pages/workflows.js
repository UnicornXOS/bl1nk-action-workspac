import React from 'react';
import Layout from '../components/common/Layout';
import WorkflowList from '../components/workflows/WorkflowList';

const Workflows = () => {
  return (
    <Layout>
      <h1>Workflows</h1>
      <WorkflowList />
    </Layout>
  );
};

export default Workflows;
