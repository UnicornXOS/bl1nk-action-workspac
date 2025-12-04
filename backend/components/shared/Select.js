import React from 'react';

const Select = ({ children, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
