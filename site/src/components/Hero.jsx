import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    gcms {
      heros {
        heroImage {
          url
        }
      }
    }
  }  
`)

  console.log(data);
  return (
    <>
      <Img fluid={data.gcms.heros[0].heroImage.url} />
    </>
  )
}

export default Drawer;