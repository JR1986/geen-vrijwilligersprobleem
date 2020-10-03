import React from 'react';
import styled from '@emotion/styled';
import {
  Label,
  Input,
  Textarea,
} from '@rebass/forms';
import { Flex, Box, Button, } from "rebass";
import Theme from "../utils/Theme";

const Background = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0;
  z-index: -1;
`;

const RelativeContainer = styled.div`
  position: relative;
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
            <Label>Voornaam</Label>
            <Input
              type='text'
              name='voornaam'
            />
          </Box>
          <Box p={16}>
            <Label>Achternaam</Label>
            <Input
              type='text'
              name='achternaam'
            />
          </Box>
          <Box p={16}>
            <Label>Emailadres</Label>
            <Input
              type='e-mail'
              name='email'
            />
          </Box>
          <Box p={16}>
            <Label>Bericht</Label>
            <Textarea
              name='bericht'
            />
          </Box>
          <Box p={16}>
            <Button
              sx={{
                width: "100%",
                color: "rgba(0,0,0,0.87)",
                backgroundColor: "#FFED00",
                cursor: "pointer"
              }}
              width={1}
              type="submit"
            >
              Verstuur
        </Button>
          </Box>
        </Flex>
      </Box>
      <Background />
    </RelativeContainer>
  </Theme>
);

export default Form;