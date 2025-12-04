import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div className="task-filter">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default TaskFilter;
