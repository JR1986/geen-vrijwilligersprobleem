import React from "react";
import Layout from "../components/layout";
import SEO from "../components/Seo";
import Hero from "../components/Hero";
import Article from "../components/Article";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Article></Article>
  </Layout>
)

export default IndexPage
