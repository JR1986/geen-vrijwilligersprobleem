import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
      query {
        datoCmsHome {
          teaser
          teaserDescription
        }
      }
    `}
      render={data => {

        return (
          <>
            <h1>{data.datoCmsHome.teaser}</h1>
            <p>{data.datoCmsHome.teaserDescription}</p>
          </>
        )
      }}
    />
  </Layout>
)

export default IndexPage
