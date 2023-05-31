"use client"
import React from 'react'
import { Text, Input, ChakraBaseProvider, FormControl, FormLabel, Stack, Box, Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

export default function Weight() {
  const [value, setValue] = React.useState('1')
  return (
    <ChakraBaseProvider>
      <Text fontSize={'4xl'} textAlign={'center'} >Are You Eating Enough?</Text>
      <Text fontSize={'sm'} textAlign={'center'}>This Calc will help you to figure out</Text>
      <Box mt={'5'}>
        <Center>
          <FormControl>
            <FormLabel fontSize={'1xl'}>What is your birth gender?</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='row'>
                <Radio value='1'>Female</Radio>
                <Radio value='2'>Male</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Center>
        <Center mt={'4'}>
          <FormControl>
            <Input padding={2} borderRadius={4} border='1px' borderColor={'#276749'} placeholder="How`s your WEIGHT" size='md' id="weight" />
          </FormControl>
        </Center>
        <Center mt={'4'}>
          <FormControl>
            <Input padding={2} borderRadius={4} border='1px' borderColor={'#276749'} placeholder="How's your HEIGHT in CM" size='md' id="height" />
          </FormControl>
        </Center>
        <Center mt={'4'}>
          <FormControl>
            <Input padding={2} borderRadius={4} border='1px' borderColor={'#276749'} placeholder="How old are you" size='md' id='age'></Input>
          </FormControl>
        </Center>
        <Center mt={'4'}>
          <FormControl>
            <Select placeholder='How`s level week activity' variant='outline' border='1px' borderColor={'#276749'} size='lg'>
              <option value="200">Sedentário</option>
              <option value="600">Atividade leve - 3x semana</option>
              <option value="1000">Atividade moderada - 5x semana</option>
              <option value="1200">Atividade pesada - 6x semana</option>
            </Select>
          </FormControl>
        </Center>
        <Center mt={'4'}>
          <Button colorScheme='teal' variant='solid' size='xs' name="Calcular" id="calculate"> Calculate</Button>
        </Center>

      </Box>
    </ChakraBaseProvider>
  )
}