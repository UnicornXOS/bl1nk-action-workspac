import React from 'react';
import WorkflowStatus from './WorkflowStatus';

const WorkflowCard = ({ workflow }) => {
  return (
    <div className="workflow-card">
      <h3>{workflow.name}</h3>
      <p>{workflow.description}</p>
      <WorkflowStatus status={workflow.status} />
    </div>
  );
};

export default WorkflowCard;
