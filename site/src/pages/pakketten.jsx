import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import Page from '../Templates/Page';
import PakkettenQuery from '../utils/queries/pakketten';
import Theme from '../utils/Theme';

const Container = styled.div`
    max-width: 1024px;
    padding: 24px 16px;

    @media (min-width: 1024px) {
        padding: 48px;
    }
`;

const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 25px 3px rgba(158,155,158,0.50);
    padding: 24px;
    margin-bottom: 48px;

    @media (min-width: 375px) {
        padding: 48px;
    }

    @media (min-width: 720px) {
        padding: 32px;
        flex-direction: row;
        align-items: center;
    }
`;

const Price = styled.div`

    @media (min-width: 720px) {
        min-width: 200px;
        text-align: center;

        p {
            margin: 0;
        }
    }
`;

const Description = styled.div`

    p {
        margin: 0;
        color: ${(props) => props.theme.colors.blackMedium};
    }

    table {
        margin: 0;
        border-left: 1px solid transparent;
        border-top: 4px solid ${(props) => props.theme.colors.primary};
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;

        td {
            padding: 24px 8px 0;
            border: none;

            @media (min-width: 720px) {
                padding: 8px 8px 8px 48px;
            }
        }

        @media (min-width: 720px) {
            border-left: 4px solid ${(props) => props.theme.colors.primary};
            border-top: 1px solid transparent;
        }
    }

    @media (min-width: 720px) {
        padding: 0 0 0 48px;
    }
`;

const PriceCard = ({ title, price, description }) => (
  <PricingContainer>
    <Price>
      <h2>{title}</h2>
      <p>{price}</p>
    </Price>
    <Description>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Description>
  </PricingContainer>
);

PriceCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

PriceCard.defaultProps = {
  title: null,
  price: null,
  description: null,
};

const IndexPage = () => {
  const {
    smallTitle,
    smallPrice,
    smallDescription,
    pageHeader,
    pageDescription,
    mediumTitle,
    mediumPrice,
    mediumDescription,
    largeTitle,
    largePrice,
    largeDescription,
    begeleidingTitle,
    begeleidingDescription,
    seo: {
      title,
      description,
    },
  } = PakkettenQuery();

  return (
    <Theme>
      <Layout>
        <SEO title={title} description={description} />
        <Page
          heading={pageHeader}
        >
          <Container>
            <p>{pageDescription}</p>
            <PriceCard
              title={smallTitle}
              price={smallPrice}
              description={smallDescription}
            />
            <PriceCard
              title={mediumTitle}
              price={mediumPrice}
              description={mediumDescription}
            />
            <PriceCard
              title={largeTitle}
              price={largePrice}
              description={largeDescription}
            />
            <h2>{begeleidingTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: begeleidingDescription }} />
          </Container>
        </Page>
      </Layout>
    </Theme>
  );
};

export default IndexPage;
