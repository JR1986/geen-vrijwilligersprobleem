import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Article from '../components/Article';
import Count from '../components/CountUp';
import Theme from '../utils/Theme';

const IndexPage = () => (
  <Theme>
    <Layout>
      <Hero />
      <Count />
      <Article />
    </Layout>
  </Theme>
);

export default IndexPage;
