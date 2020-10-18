import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Form from "../components/Form"
import { ContactQuery } from "../utils/queries/contact"
import Page from "../Templates/Page";
import Theme from "../utils/Theme";

const Container = styled.div`
    max-width: 600px;
    padding: 48px 16px 32px;
    margin: 0 auto;
    text-align: center;
`;

const Background = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 200px;
  width: 100%;
  margin-top: -120px;
`;

const IndexPage = () => {
    const { contactTitle, contactDescription, seo: { title, description } } = ContactQuery();

    return (
        <Theme>
            <Layout>
                <SEO title={title} description={description} />
                <Page
                    heading={contactTitle}
                >
                    <Container>
                        <p>{contactDescription}</p>
                    </Container>
                    <Form />
                </Page>
                <Background />
            </Layout>
        </Theme>
    )
}

export default IndexPage
