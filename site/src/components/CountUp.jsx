import React from "react";
import { useInView } from 'react-intersection-observer';
import styled from "@emotion/styled";
import CountUp from 'react-countup';
import Theme from "../utils/Theme";
import { CijfersQuery } from "../utils/queries/cijfers";

const Container = styled.div`
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};

    @media (min-width: 720px) {
        padding: 72px 48px;
        flex-direction: row;
    }
`;

const CountContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 16px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 2px 2px 25px 3px rgba(158,155,158,0.50);
    justify-content: center;
    border: 3px solid ${props => props.theme.colors.secondary};

    h2,p {
        margin: 0;
    }

    @media (min-width: 720px) {
        padding: 32px;
        width: 320px;
        margin: 0 16px;
    }
`;

const StyledCountUp = styled(CountUp)`
    padding: 24px 0;
    font-size: 32px;
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
`;

const SpacingContainer = styled.div`
    padding: 24px;

    @media (min-width: 720px) {
        display: none;
    }
`;

const Count = () => {
  const [ref, inView] = useInView();
  const {
    aantalNieuweLeden,
    aantalNieuweVrijwilligers,
    aantalVerenigingenMetNieuweLeden,
    aantalVerenigingenMetNieuweVrijwilligers,
  } = CijfersQuery();

  return (
    <Theme>
      <Container ref={ref}>
        <CountContainer>
          <h2>Aantal nieuwe vrijwilligers: </h2>
          <StyledCountUp
            start={inView ? 0 : null}
            end={aantalNieuweVrijwilligers}
            duration={5}
          />
          <p>
            Bij{' '}
            <CountUp
              start={inView ? 0 : null}
              end={aantalVerenigingenMetNieuweVrijwilligers}
              duration={5}
            />
            {' '}verenigingen
        </p>
        </CountContainer>
        <SpacingContainer />
        <CountContainer>
          <h2>Aantal nieuwe leden:</h2>
          <StyledCountUp
            start={inView ? 0 : null}
            end={aantalNieuweLeden}
            duration={5}
          />
          <p>
            Bij{' '}
            <CountUp
              start={inView ? 0 : null}
              end={aantalVerenigingenMetNieuweLeden}
              duration={5}
            />
            {' '}verenigingen
        </p>
        </CountContainer>
      </Container>
    </Theme>
  )
};

export default Count;