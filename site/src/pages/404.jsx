import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import Page from '../Templates/Page';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Pagina niet gevonden" />
    <Page
      heading="404: Oeps, deze pagina bestaat niet!"
    />
  </Layout>
);

export default NotFoundPage;
