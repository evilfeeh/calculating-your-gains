"use client"
import React from 'react'
import { Text, Input, ChakraProvider, FormControl, FormLabel, Stack, Box, Center, Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

export default function Weight() {
  const [value, setValue] = React.useState('1')
  return (
    <ChakraProvider>
      <Text fontSize={'4xl'} textAlign={'center'} >Are You Eating Enough?</Text>
      <Text fontSize={'sm'} textAlign={'center'}>This Calc will help you to figure out</Text>
      <Box>
        <FormControl>
          <Input borderRadius={4} border='1px' mt={'5'} borderColor={'#276749'} placeholder="How`s your weight" size='md' id="weight" />
          <Input borderRadius={4} border='1px' mt={'5'} borderColor={'#276749'} placeholder="How's your height in CM" size='md' id="height" />
          <Input borderRadius={4} border='1px' mt={'5'} borderColor={'#276749'} placeholder="How old are you" size='md' id='age'></Input>
          <Select borderRadius={4} border='1px' mt={'5'} borderColor={'#276749'} size='md'>
            <option value="200">Sedentário</option>
            <option value="600">Atividade leve - 3x semana</option>
            <option value="1000">Atividade moderada - 5x semana</option>
            <option value="1200">Atividade pesada - 6x seman</option>
          </Select>
          <FormLabel mt={'5'} fontSize={'1xl'}>What is your birth gender?</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio value='1'>Female</Radio>
              <Radio value='2'>Male</Radio>
            </Stack>
          </RadioGroup>
          <Center>
            <Button colorScheme='teal' mt={'5'} variant='outline' size='md'> Calculate</Button>
          </Center>
        </FormControl>
      </Box>
    </ChakraProvider>
  )
}