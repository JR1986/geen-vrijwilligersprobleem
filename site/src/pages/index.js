import React from "react"
import { Link } from "gatsby"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

        console.log(data)

        return (
          <>
            <h1>{data.gcms.algemeensConnection.edges[0].node.title}</h1>
            <p>{data.gcms.algemeensConnection.edges[0].node.description}</p>
          </>
        )
      }}
    />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
