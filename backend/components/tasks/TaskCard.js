import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.notes}</p>
    </div>
  );
};

export default TaskCard;
