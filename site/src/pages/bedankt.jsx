import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import Page from '../Templates/Page';

const Container = styled.div`
    max-width: 600px;
    padding: 48px 16px 32px;
    margin: 0 auto;
    text-align: center;
`;

const Card = styled.div`
    padding: 48px;
    box-shadow: 2px 2px 25px 3px rgba(158,155,158,0.50);
    min-height: 300px;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Bedankt voor je bericht" />
    <Page
      heading="Bedankt!"
    >
      <Container>
        <Card>
          <h2>Bedankt voor je bericht!</h2>
          <p>Geen Vrijwilligersprobleem neemt zo spoedig mogelijk contact met je op</p>
        </Card>
      </Container>
    </Page>
  </Layout>
);

export default IndexPage;
