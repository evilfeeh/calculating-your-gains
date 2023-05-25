"use client";
import { Center, ChakraProvider, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Weight from './components/weight';
import Image from 'next/image'
import logo from '../../public/imagens/emojii.svg'

export default function Home() {
  return (
    <ChakraProvider>
      
        <Grid templateAreas={`'header'`} gap={5} templateColumns='repeat(2, 1fr)'>
          <GridItem area={'header'} colSpan={4} rowSpan={1} bg={'green'}>
            <Image src={logo} width={50} height={50} alt="double biceps" />
            <Text >Calculating your gains</Text>
          </GridItem>
          <GridItem h={700} colSpan={2} colEnd={2} bg={'red'}>
            <Center>
              esquerda
            </Center>
          </GridItem>
          <GridItem h={700} colSpan={2} colStart={2} colEnd={4}>
          <Tabs>
            <TabList>
              <Tab>Weight Calories Consume</Tab>
              <Tab>Water Daily Consume</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Weight />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          </GridItem>
          <GridItem colSpan={4} bg={'purple'} rowSpan={1}>footer</GridItem>
        </Grid>
    </ChakraProvider>
  )
}
