import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/card';
import Menu from '../../components/menu';

const Dashboard = () => {

  const data = ["15/10", "16/10", "17/10", "18/10",]

  return (
    <>
      <Box maxW={'100%'}  display={'flex'} >
        <Menu />
        <Grid 
          gridTemplateColumns={['100% 1fr']} 
          h={'987px'} w={'100%'} 
          bg={'rgba(32, 41, 46, 0.3)'} 
          justifyContent='center' 
          display="block" mb='40px'
        >             
          <Box 
            fontSize={{base: '14px', md: '20px', lg: '22px'}} 
            fontWeight="bold" color={'grey.300'} display={'flex'} 
            ml={{base: '20px', md: '30px', lg: '40px'}} mt={'20px'} 
            gap={{base: '50px', md: '90px', lg: '170px'}}
          >
            <Text>Colaborador</Text>
            <Text>Data</Text>
            <Text>Hora</Text>
          </Box>           
          {data.map((data) => (
            <Card name='Sarada' data={data} hora='08:00h'/>
          ))}
        </Grid>
      </Box> 
    </>
  )
}

export default Dashboard