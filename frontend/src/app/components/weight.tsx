"use client"
import React, { useState } from 'react'
import { Text, Input, ChakraProvider, FormControl, FormLabel, Stack, Box, Center, Select, useDisclosure } from '@chakra-ui/react'
import AlertResults from './alert'
import { Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

export default function Weight() {
  const [result, setResult] = useState([])
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  const handleSubmit = async (event: { preventDefault: () => void, target: any }) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const payload = JSON.stringify(Object.fromEntries(formData))
    const response = await fetch('http://localhost:5000/weight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin": "*"
      },
      body: payload,
    })
    setResult(await response.json())
    onOpen()
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
              name="weight"
              type='number'
            />
            <Input
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              placeholder="How's your height in CM"
              size='md'
              name="height"
              type='number'
            />
            <Input
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              placeholder="How old are you"
              size='md'
              name='age'
              type='number'
            />
            <Select
              name="phisicalAcitivityLevel"
              borderRadius={4}
              border='1px'
              mt={'5'}
              borderColor={'#276749'}
              size='md'
            >
                <option value={200}>Sedentário</option>
                <option value={600}>Atividade leve - 3x semana</option>
                <option value={1000}>Atividade moderada - 5x semana</option>
                <option value={1200}>Atividade pesada - 6x semana</option>
            </Select>
            <FormLabel mt={'5'} fontSize={'1xl'}>What is your birth gender?</FormLabel>
            <RadioGroup name="sex">
              <Stack direction='row'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
              </Stack>
            </RadioGroup>
            <Center>
              <Button type="submit" colorScheme='teal' mt={'5'} variant='outline' size='md'> Calculate</Button>
              <AlertResults results={result} isVisible={isVisible} onClose={onClose}/>
            </Center>
          </FormControl>
        </form>
      </Box>
    </ChakraProvider>
  )
} 