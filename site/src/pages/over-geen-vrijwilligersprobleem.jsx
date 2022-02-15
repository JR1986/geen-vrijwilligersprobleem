import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import OverGeenVrijwilligersprobleem from '../utils/queries/overOns';
import Page from '../Templates/Page';
import Video from '../components/Video';

const Container = styled.div`
    max-width: 700px;
    padding: 24px 16px;

    @media (min-width: 1024px) {
        padding: 48px;
    }
`;

const IndexPage = () => {
  const {
    pageHeader,
    pageDescription,
    seo: {
      title,
      description,
    },
  } = OverGeenVrijwilligersprobleem();

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Page
        heading={pageHeader}
      >
        <Container>
          <p>{pageDescription}</p>
          <Video />
        </Container>
      </Page>
    </Layout>
  );
};

export default IndexPage;
