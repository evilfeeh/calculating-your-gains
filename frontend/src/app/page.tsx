"use client";
import { Center, ChakraProvider, Grid, GridItem, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Weight from './components/weight';
import Image from 'next/image'
import logo from '../../public/imagens/emojii.svg'

export default function Home() {
  return (
    <ChakraProvider>
        <Grid templateAreas={`'header'`} gap={5} templateColumns='repeat(2, 1fr)'>
          <GridItem area={'header'} colSpan={4} rowSpan={1} h={'120'}>
          </GridItem>
          <GridItem h={700} colSpan={2} colEnd={2}>
            <Box h='500px' p={'5'} mt={'5'} >
              <Center>
                <Image src={logo} width={300} height={300} alt="double biceps"/>
              </Center>
              <Center>
                <Text textStyle={'bold'} fontSize={'5xl'} as='b' color={'black'}>CALCULATING YOUR GAINS</Text>
              </Center>
            </Box>
          </GridItem>
          <GridItem h={700} colSpan={2} colStart={2} colEnd={4} padding={4}>
            <Box p={'5'} mt={'5'}>
              <Box p={'5'} w='600px' h='500px' border='1px' borderRadius={10} borderColor={'#2D3748'} bgColor={'#171923'}>
                <Weight />
              </Box>
            </Box>
          </GridItem>
        </Grid>
    </ChakraProvider>
  )
}
