import { Box, Icon, Link } from '@chakra-ui/react'
import { MdOutlineDashboard } from "react-icons/md";
import React from 'react'


interface Props {
    href: string;
    // data: IconBaseProps;
    name: string;
}

const LinkMenu = ({href, name}: Props) => {
  return (
    <>
        <Box h="30px" fontWeight="bold" fontSize={{ base: '10px',md: '10px', lg: '14px',}} >
            <Link 
                href={href} 
                color={'primary.300'} margin="0 15px" 
                display={'flex'} justifyContent='center' 
                alignItems={'center'}
            >
                <Icon as={MdOutlineDashboard} color={'primary.300'} mr="6px" w="18px" h="18px" />
                {name}
            </Link>
        </Box>
    </>
  )
}

export default LinkMenu