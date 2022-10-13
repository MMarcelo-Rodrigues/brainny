import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    name: string;
    data: string;
    hora: string;
}

const Card = ({name, data, hora}: Props) => {
  return (
    <>
        <Box 
            h={{base: '53px', md: '63px', lg: '73px'}} 
            w={'95%'} ml={{base: '12px', md: '16px', lg: '20px'}} 
            mt={'10px'} display={'flex'} 
            position="relative" borderRadius={'5px'} 
            border={'1px solid rgba(32, 41, 46, 0.3)'} 
            p={'15px'}  alignItems={'center'} bg='white.300'
            _before={{ position: 'absolute', content: '" "', 
            display: 'block', width: '5px', height: '80%', 
            background: '#8A53FF', 'border-radius': '5px' }} 
        >
            <Box 
                display={'flex'} alignItems={'center'} 
                ml={{base: '20px', md: '40px', lg: '50px'}} fontSize={{base: '12px', md: '16px', lg: '20px'}}
            >
                <Box fontSize={{base: '16px', md: '18px', lg: '22px'}} display={'block'}>
                    <Text fontWeight="bold">
                        {name}     
                    </Text>
                    <Text opacity={'60%'} fontSize={'16px'}>001</Text>
                </Box>
                <Box ml={{base: '50px', md: '110px', lg: '180px'}} opacity={'60%'}>
                    <Text>
                        {data}     
                    </Text>
                </Box>
                <Box opacity={'60%'} ml={{base: '50px', md: '90px', lg: '170px'}}>
                    <Text>
                        {hora}   
                    </Text>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Card