"use client";
import { ChakraProvider, Container, Grid, GridItem, Text } from '@chakra-ui/react';


import Image from 'next/image'
import logo from '../../public/imagens/emojii.svg'

export default function Home() {
  return (
    <ChakraProvider>
      
        <Grid templateAreas={`'header' 'content'`}>
          <GridItem area={'header'} p={5}>
            <Image src={logo} width={50} height={50} alt="double biceps" />
            <Text>Calculating your gains</Text>
          </GridItem>
          <GridItem area={'content'}>
            <Container maxW='container.lg' bg='green.400'>
              text
            </Container>
          </GridItem>
        </Grid>
    </ChakraProvider>
  )
}
