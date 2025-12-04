import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks && tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
