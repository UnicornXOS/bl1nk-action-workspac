import React from 'react';

const EmailCard = ({ email }) => {
  return (
    <div className="email-card">
      <h3>{email.subject}</h3>
      <p>From: {email.from}</p>
    </div>
  );
};

export default EmailCard;
