import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { PrivacyQuery } from "../utils/queries/privacy"
import Page from "../Templates/Page";

const Container = styled.div`
    max-width: 600px;
    padding: 48px 16px 32px;
    margin: 0 auto;
    text-align: center;
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
