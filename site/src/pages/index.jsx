import React from "react";
import styled from '@emotion/styled';
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Article from "../components/Article";
import Count from "../components/CountUp";
import Theme from "../utils/Theme";

const Background = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 200px;
  width: 100%;
  margin-top: -120px;
`;

const IndexPage = () => (
  <Theme>
    <Layout>
      <Hero />
      <Count />
      <Article></Article>
      <Background />
    </Layout>
  </Theme>
)

export default IndexPage
