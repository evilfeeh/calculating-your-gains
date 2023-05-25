"use client";
import React from 'react'
import { Text, Input, ChakraBaseProvider, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

export default function Weight () {
  const [value, setValue] = React.useState('1')
  return (
    <ChakraBaseProvider>
      <Text>First of all.</Text>
      <Text>We need understand how much calories do you need to ingest per day.</Text>
      <FormControl>
        <Text>Complete the current form before we move on</Text>
        <FormLabel>What is your birth gender?</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio value='1'>Female</Radio>
            <Radio value='2'>Male</Radio>
          </Stack>
        </RadioGroup>
        <Input placeholder="How's your weight" size='md' id="weight" />
        <Input placeholder="How's your height" size='md' id="height" />
        <Input placeholder="How old are you" size='md' id='age'></Input>
        <Select>
          <option value="200" selected>Sedentário</option>
          <option value="600">Atividade leve - 3x semana</option>
          <option value="1000">Atividade moderada - 5x semana</option>
          <option value="1200">Atividade pesada - 6x semana</option>
        </Select>
        <Button name="Calcular" id="calculate"> Calculate</Button>
      </FormControl>
    </ChakraBaseProvider>
  )
}