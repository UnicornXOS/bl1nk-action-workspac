import React from 'react';

const WorkflowCard = ({ workflow }) => {
  return (
    <div className="workflow-card">
      <h3>{workflow.name}</h3>
      <p>{workflow.description}</p>
      {/* In a real app, you might have a status component here */}
    </div>
  );
};

export default WorkflowCard;
