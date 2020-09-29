import React from 'react';
import styled from '@emotion/styled';
import {
  Label,
  Input,
  Textarea,
} from '@rebass/forms';
import { Flex, Box, Button, } from "rebass";

const Form = () => (
  <Box
    as='form'
    onSubmit={e => e.preventDefault()}
    sx={{
      padding: "48px 16px",
      backgroundColor: '#f8f8f8',
      maxWidth: "375px",
      margin: "16px auto",
      boxShadow: "2px 2px 25px 3px rgba(158,155,158,0.50)"
    }}>
    <Flex flexDirection="column">
      <Box p={16}>
        <Label htmlFor='voornaam'>Voornaam</Label>
        <Input
          id='voornaam'
          name='voornaam'
        />
      </Box>
      <Box p={16}>
        <Label htmlFor='achternaam'>Achternaam</Label>
        <Input
          id='achternaam'
          name='achternaam'
        />
      </Box>
      <Box p={16}>
        <Label htmlFor='email'>Emailadres</Label>
        <Input
          id='email'
          name='email'
        />
      </Box>
      <Box p={16}>
        <Label htmlFor='email'>Bericht</Label>
        <Textarea
          id='bericht'
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
        >
          Verstuur
        </Button>
      </Box>
    </Flex>
  </Box>
);

export default Form;