import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { PrivacyQuery } from "../utils/queries/privacy"
import Page from "../Templates/Page";

const Container = styled.div`
    max-width: 600px;
    padding: 48px 16px 32px;

    @media (min-width: 1024px) {
        padding: 48px 48px 32px;
    }
`;

const IndexPage = () => {
    const { privacyStatement, seo: { title, description } } = PrivacyQuery();

    return (
        <Layout>
            <SEO title={title} description={description} />
            <Page
                heading="Privacy Statement"
            >
                <Container>
                    <p dangerouslySetInnerHTML={{ __html: privacyStatement }} />
                </Container>
            </Page>
        </Layout>
    )
}

export default IndexPage
