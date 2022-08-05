import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import OverGeenVrijwilligersprobleem from '../utils/queries/overOns';
import Page from '../Templates/Page';
import Video from '../components/Video';

const Container = styled.div`
    padding: 24px 16px;

    @media (min-width: 1024px) {
        padding: 48px;
    }
`;

const IndexPage = () => {
  console.log(OverGeenVrijwilligersprobleem().edges[0].node)
  const {
        pageHeader,
        seo: {
          title,
          description,
        },
        pageDescription
  } = OverGeenVrijwilligersprobleem().edges[0].node;

  return (
    <Layout>
      <Seo title={title} description={description} />
      <Page
        heading={pageHeader}
      >
        <Container>
          <div
            dangerouslySetInnerHTML={{ __html: pageDescription }}
          />
          <Video />
        </Container>
      </Page>
    </Layout>
  );
};

export default IndexPage;
