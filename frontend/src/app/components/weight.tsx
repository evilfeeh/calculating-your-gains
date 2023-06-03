"use client"
import React, { useState } from 'react'
import { Text, Input, ChakraProvider, FormControl, FormLabel, Stack, Box, Center, Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

export default function Weight() {
  const [sex, setSex] = useState('1')
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [age, setAge] = useState()
  const [phisicalAcitivityLevel, setPhisicalAcitivityLevel ] = useState()
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log({
      sex,
      weight,
      height,
      age,
      phisicalAcitivityLevel
    })
  };
  return (
    <ChakraProvider>
      <Text fontSize={'4xl'} textAlign={'center'} >Are You Eating Enough?</Text>
      <Text fontSize={'sm'} textAlign={'center'}>This Calculator will help you to figure out</Text>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <Input 
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              placeholder="How`s your weight"
              size='md'
              id="weight"
              type='number'
              onChange={ event => setWeight(event.currentTarget.value as any) }
            />
            <Input
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              placeholder="How's your height in CM"
              size='md'
              id="height"
              type='number'
              onChange={ event => setHeight(event.currentTarget.value as any) }
            />
            <Input
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              placeholder="How old are you"
              size='md'
              id='age'
              type='number'
              onChange={ event => setAge(event.currentTarget.value as any) }
            />
            <Select
              id="phisicalAcitivityLevel"
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              size='md'
              onChange={ event => setPhisicalAcitivityLevel(event.currentTarget.value as any) }>
                <option value="200">Sedentário</option>
                <option value="600">Atividade leve - 3x semana</option>
                <option value="1000">Atividade moderada - 5x semana</option>
                <option value="1200">Atividade pesada - 6x semana</option>
            </Select>
            <FormLabel mt={'5'} fontSize={'1xl'}>What is your birth gender?</FormLabel>
            <RadioGroup
              onChange={setSex}
              value={sex}>
              <Stack direction='row'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
              </Stack>
            </RadioGroup>
            <Center>
              <Button type="submit" colorScheme='teal' mt={'5'} variant='outline' size='md'> Calculate</Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </ChakraProvider>
  )
}