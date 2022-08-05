import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Article from '../components/Article';
import Theme from '../utils/Theme';

const IndexPage = () => (
  <Theme>
    <Layout homeNavbar>
      <Hero />
      <Article />
    </Layout>
  </Theme>
);

export default IndexPage;
