import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Page from "../Templates/Page"
import { PakkettenQuery } from "../utils/queries/pakketten";
import Theme from "../utils/Theme";

const Container = styled.div`
    max-width: 1024px;
    padding: 24px 16px;
    
    @media (min-width: 1024px) {
        padding: 48px 48px 72px;
    }
`;

const PricingContainer = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 25px 3px rgba(158,155,158,0.50);
    padding: 48px;
    margin-bottom: 48px;
`;

const Border = styled.span`
    display: flex;
    align-items: stretch;
    border-right: 3px solid ${props => props.theme.colors.secondary};
`;

const Price = styled.div`
    text-align: center;
    padding-right: 48px;
    min-width: 200px;

    h1, p {
        margin: 0;
    }
`;

const Description = styled.div`
    padding-left: 48px;
    p {
        margin: 0;
    }
`;

const PriceCard = ({ title, price, description }) => (
    <PricingContainer>
        <Price>
            <h2>{title}</h2>
            <p>{price}</p>
        </Price>
        <Border />
        <Description>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </Description>
    </PricingContainer>
)

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
        largeDescription
    } = PakkettenQuery();

    return (
        <Theme>
            <Layout>
                <SEO title="Geen vrijwilligersprobleem - Pakketten" />
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

                    </Container>
                </Page>
            </Layout>
        </Theme>
    )
}

export default IndexPage
