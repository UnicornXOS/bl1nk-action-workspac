import React from 'react';

const WorkflowStatus = ({ status }) => {
  return (
    <div className={`workflow-status ${status}`}>
      {status}
    </div>
  );
};

export default WorkflowStatus;
