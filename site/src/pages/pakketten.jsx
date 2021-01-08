import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Button } from 'rebass';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import Page from '../Templates/Page';
import PakkettenQuery from '../utils/queries/pakketten';
import Theme, { theme } from '../utils/Theme';

const PricingContainer = styled.div`
    box-shadow: 2px 2px 25px 3px rgba(158,155,158,0.50);
    padding: 0 0 24px;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
    margin: 0 16px 48px;
    width: 100%;

    @media (min-width: 600px) {
      width: 300px;
    }

    @media (min-width: 1280px) {
      width: 350px;
    }
`;

const Price = styled.div`
  text-align: center;

  p {
      margin: 0;
      font-weight: 700;
      font-size: 40px;
  }

  h2 {
    margin: 0 0 48px;
    color: ${(props) => props.theme.colors.white};
    padding: 24px;
    font-size: 32px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const PriceCard = ({ title, price }) => (
  <PricingContainer>
    <Price>
      <h2>{title}</h2>
      <p>{price}</p>
    </Price>
    <Box p={16}>
      <Link to="/contact/">
        <Button
          sx={{
            width: '100%',
            color: `${theme.colors.black}`,
            backgroundColor: `${theme.colors.white}`,
            border: `2px solid ${theme.colors.primary}`,
            cursor: 'pointer',
            height: '50px',
            marginTop: '24px',
          }}
          width={1}
          type="submit"
          aria-label="Verstuur"
        >
          Vrijblijvende kennismaking
        </Button>
      </Link>
    </Box>
  </PricingContainer>
);

PriceCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};

PriceCard.defaultProps = {
  title: null,
  price: null,
};

const CardsContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 48px 0;
`;

const Description = styled.p`
  margin: 24px;

  @media (min-width: 1024px) {
    margin: 48px;
  }
`;

const IndexPage = () => {
  const {
    smallTitle,
    smallPrice,
    pageHeader,
    pageDescription,
    mediumTitle,
    mediumPrice,
    largeTitle,
    largePrice,
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
          <Description>{pageDescription}</Description>
          <CardsContainer>
            <PriceCard
              title={smallTitle}
              price={smallPrice}
            />
            <PriceCard
              title={mediumTitle}
              price={mediumPrice}
            />
            <PriceCard
              title={largeTitle}
              price={largePrice}
            />
          </CardsContainer>
          <Description>
            <h2>{begeleidingTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: begeleidingDescription }} />
          </Description>
        </Page>
      </Layout>
    </Theme>
  );
};

export default IndexPage;
