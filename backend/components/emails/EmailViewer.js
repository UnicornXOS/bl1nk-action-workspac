import React from 'react';

const EmailViewer = ({ email }) => {
  return (
    <div className="email-viewer">
      <h2>{email.subject}</h2>
      <div>From: {email.from}</div>
      <div>To: {email.to}</div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: email.body }} />
    </div>
  );
};

export default EmailViewer;
