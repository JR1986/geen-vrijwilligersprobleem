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
        gcms {
          algemeensConnection {
          edges {
            node {
              title
              description
            }
          }
          }
        }
      }
    `}
      render={data => {

        return (
          <>
            <h1>{data.gcms.algemeensConnection.edges[0].node.title}</h1>
            <p>{data.gcms.algemeensConnection.edges[0].node.description}</p>
          </>
        )
      }}
    />
  </Layout>
)

export default IndexPage
