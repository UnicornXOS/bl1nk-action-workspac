import React from 'react';
import EmailCard from './EmailCard';

const EmailList = ({ emails }) => {
  return (
    <div className="email-list">
      {emails && emails.map(email => (
        <EmailCard key={email.id} email={email} />
      ))}
    </div>
  );
};

export default EmailList;
