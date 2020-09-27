import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { useStaticQuery, graphql } from 'gatsby';
import pakkettenQuery from "../utils/queries/pakketten";

const Page = () => {
    const data = useStaticQuery(graphql`${pakkettenQuery}`);
    <Theme>
        <Img fluid={data.datoCmsHome.heroImage.fluid} />
    </Theme>
}