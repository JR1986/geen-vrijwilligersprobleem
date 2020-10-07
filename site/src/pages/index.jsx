import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Article from "../components/Article";
import Count from "../components/CountUp";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Count />
    <Article></Article>
  </Layout>
)

export default IndexPage
