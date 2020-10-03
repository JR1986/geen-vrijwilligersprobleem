import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Page from "../Templates/Page";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pagina niet gevonden" />
    <Page
      heading="404: Oeps, deze pagina bestaat niet!"
    >
    </Page>
  </Layout>
)

export default NotFoundPage
