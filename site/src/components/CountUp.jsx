import React from 'react';
import styled from '@emotion/styled';
import Theme from '../utils/Theme';
import CijfersQuery from '../utils/queries/cijfers';
import FadeInSection from '../utils/FadeInSection';

const Container = styled.div`
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondaryBackground};

    @media (min-width: 720px) {
        padding: 72px 48px;
        flex-direction: row;
    }
`;

const CountContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 32px 16px;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
    border-radius: 4px;
    justify-content: center;
    height: 100%;
    max-height: 80%;
    border: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 1px 1px rgba(0,0,0,0.08), 
              0 2px 2px rgba(0,0,0,0.08), 
              0 4px 4px rgba(0,0,0,0.08), 
              0 8px 8px rgba(0,0,0,0.08),
              0 16px 16px rgba(0,0,0,0.08);

    h2,p {
        margin: 0;
    }

    @media (min-width: 720px) {
        padding: 32px;
        width: 320px;
        margin: 0 16px;
    }
`;

const Number = styled.span`
    padding: 24px 0;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};
`;

const SpacingContainer = styled.div`
    padding: 24px;

    @media (min-width: 720px) {
        display: none;
    }
`;

const Count = () => {
  const {
    aantalNieuweLeden,
    aantalNieuweVrijwilligers,
    aantalVerenigingenMetNieuweLeden,
    aantalVerenigingenMetNieuweVrijwilligers,
  } = CijfersQuery();

  return (
    <Theme>
      <Container>
        <FadeInSection>
          <CountContainer>
            <h2>Aantal nieuwe vrijwilligers: </h2>
            <Number>{aantalNieuweVrijwilligers}</Number>
            <p>
              Bij
              {' '}
              <span>
                {aantalVerenigingenMetNieuweVrijwilligers}
              </span>
              {' '}
              verenigingen
            </p>
          </CountContainer>
        </FadeInSection>
        <SpacingContainer />
        <FadeInSection>
          <CountContainer>
            <h2>Aantal nieuwe leden:</h2>
            <Number>
              {aantalNieuweLeden}
            </Number>
            <p>
              Bij
              {' '}
              <span>{aantalVerenigingenMetNieuweLeden}</span>
              {' '}
              verenigingen
            </p>
          </CountContainer>
        </FadeInSection>
      </Container>
    </Theme>
  );
};

export default Count;
