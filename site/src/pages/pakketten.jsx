import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Page from "../Templates/Page"
import { PakkettenQuery } from "../utils/queries/pakketten";

const IndexPage = () => {
    const { heroImage } = PakkettenQuery();

    return (
        <Layout>
            <SEO title="About" />
            <Page
                heading="Header"
            >
            </Page>
        </Layout>
    )
}

export default IndexPage
