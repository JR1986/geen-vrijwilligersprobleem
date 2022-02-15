import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin-top: 32px;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Video = () => (
  <Container>
    <Iframe title="Geen vrijwilligersprobleem video" src="https://player.vimeo.com/video/672726178?h=9ac36bc4ce" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
  </Container>
);

export default Video;
