import React from 'react';
import styled from '@emotion/styled';
import {
  Label,
  Input,
  Textarea,
} from '@rebass/forms';
import { Flex, Box, Button, } from "rebass";
import Theme from "../utils/Theme";
import { theme } from "../utils/Theme";

const RelativeContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled(Label)`
  display: flex;
  flex-direction: column;
`;

const Form = () => (
  <Theme>
    <RelativeContainer>
      <Box
        as='form'
        name="contact"
        method="POST"
        data-netlify="true"
        action='/bedankt/'
        data-netlify-honeypot="bot-field"
        sx={{
          padding: "48px 16px",
          backgroundColor: '#f8f8f8',
          maxWidth: "375px",
          margin: "16px auto 0",
          boxShadow: "2px 2px 25px 3px rgba(158,155,158,0.50)"
        }}>
        <Flex flexDirection="column">
          <input type="hidden" name="form-name" value="contact" />
          <Box p={16}>
            <StyledLabel htmlFor='voornaam'>Voornaam
            <Input
                type='text'
                name='voornaam'
              />
            </StyledLabel>
          </Box>
          <Box p={16}>
            <StyledLabel htmlFor='achternaam'>Achternaam
            <Input
                type='text'
                name='achternaam'
              />
            </StyledLabel>
          </Box>
          <Box p={16}>
            <StyledLabel htmlFor='email'>Emailadres
            <Input
                type='e-mail'
                name='email'
              />
            </StyledLabel>
          </Box>
          <Box p={16}>
            <StyledLabel htmlFor='bericht'>Bericht
            <Textarea
                name='bericht'
              />
            </StyledLabel>
          </Box>
          <Box p={16}>
            <Button
              sx={{
                width: "100%",
                color: `${theme.colors.black}`,
                backgroundColor: `${theme.colors.white}`,
                border: `2px solid ${theme.colors.primary}`,
                cursor: "pointer",
                height: '50px',
                marginTop: "24px",
              }}
              width={1}
              type="submit"
              aria-label="Verstuur"
            >
              Verstuur bericht
        </Button>
          </Box>
        </Flex>
      </Box>
    </RelativeContainer>
  </Theme>
);

export default Form;