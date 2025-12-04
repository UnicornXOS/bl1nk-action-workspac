import React from 'react';
import WorkflowCard from './WorkflowCard';

const WorkflowList = ({ workflows }) => {
  return (
    <div className="workflow-list">
      {workflows && workflows.map(workflow => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
};

export default WorkflowList;
