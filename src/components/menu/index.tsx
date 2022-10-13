import { Box, Grid, Link, Icon, Image, Text } from '@chakra-ui/react'
import { MdOutlineDashboard } from "react-icons/md";
import { RiBookletLine } from "react-icons/ri";
import React from 'react'
import LinkMenu from '../link';

const Menu = () => {
  return (
    <>
        <Grid gridTemplateColumns={['100% 1fr','50% 1fr']}  display={'block'} w={'180px'}>
            <Box h={'102px'} w={'100%'} display={'flex'} justifyContent='center' alignItems={'center'}>
                <Box display={'flex'} color={'primary.300'} fontSize= '16px'>
                    <Image src='./img/Group 2.png' alt='logo' w={'95px'} h={'40px'} />
                </Box>
            </Box>
            <Box 
                h={'102px'} w={'100%'} display={'flex'} 
                borderLeft={'4px solid #330693'}  
                borderBottom={'1px solid rgba(32, 41, 46, 0.3)'} 
                borderTop={'1px solid rgba(32, 41, 46, 0.3)'} 
                justifyContent='center' alignItems={'center'}
            >
                <LinkMenu href='http://localhost:3000/dashboard' name='Dashboard' />               
            </Box>
            <Box h={'102px'} w={'100%'} display={'flex'} justifyContent='left' alignItems={'center'} bg='white.300'>
                <Box h="30px" fontWeight="bold"  fontSize='16px' mt={{base: '1200px', md: '1200px', lg: '1100px',}}>
                    <Link 
                        href='http://localhost:3000/' color={'#000'}  
                        display={'flex'} justifyContent='left' 
                        alignItems={'center'}
                    >
                    <Image src='/img/Vector.png' alt='Imagem' w="20px" h="20px" ml={'10px'} />
                        Sair
                    </Link>
                </Box>
            </Box>
        </Grid>
    </>
  )
}

export default Menu