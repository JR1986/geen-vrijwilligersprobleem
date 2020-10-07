import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Form from "../components/Form"
import { ContactQuery } from "../utils/queries/contact"
import Page from "../Templates/Page";

const Container = styled.div`
    max-width: 600px;
    padding: 48px 16px 32px;
    margin: 0 auto;
    text-align: center;
`;

const IndexPage = () => {
    const { contactTitle, contactDescription, seo: { title, description } } = ContactQuery();

    return (
        <Layout>
            <SEO title={title} description={description} />
            <Page
                heading={contactTitle}
            >
                <Container>
                    <p>{contactDescription}</p>
                </Container>
                <Form></Form>
            </Page>
        </Layout>
    )
}

export default IndexPage
