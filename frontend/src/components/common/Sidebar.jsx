import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/workflows">Workflows</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/emails">Emails</a></li>
        <li><a href="/calendar">Calendar</a></li>
        <li><a href="/logs">Logs</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
