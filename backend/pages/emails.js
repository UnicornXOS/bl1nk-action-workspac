import React from 'react';
import Layout from '../components/common/Layout';
import EmailList from '../components/emails/EmailList';

const Emails = () => {
  return (
    <Layout>
      <h1>Emails</h1>
      <EmailList />
    </Layout>
  );
};

export default Emails;
