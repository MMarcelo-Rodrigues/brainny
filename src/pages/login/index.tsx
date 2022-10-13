import { Box, Button, Container, Grid, Heading, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

  return (
    <>
        <Container 
            maxW={'100%'} maxH={'100%'} bg={'white.300'}
            display={['block','block','flex','flex']} 
            justifyContent='center' alignItems={'center'}
        >
            <Grid gridTemplateColumns={['100% 1fr','50% 1fr']} display={['block','block','block','block']}>
                <Box marginTop={['3px','13px','55px','23px']} display={'flex'} justifyContent='center' alignItems={'center'} >
                    <Image 
                        src='./img/loginImae.png' 
                        alt='Logo' w={['200px','385px','385px','485px']} 
                        h={['220px','363px','363px','563px']}                       
                    />
                </Box>
                <Box w='100%' textAlign='center' color={'primary.300'} mt={{ base: '10px', md: '20px',lg: '30px', xl: '40px'}} >
                    <Heading fontSize={{ base: '30px', md: '20px',lg: '40px', xl: '40px'}}>
                        Bem vindo ao PontoGo    
                    </Heading>
                    <Heading as='h2' fontSize={{ base: '20px', md: '20px', lg: '25px',}} >
                        Aqui você fará toda gestão do<br/> seu sistema de pontos.
                    </Heading>
                </Box>
            </Grid>           
            <Grid gridTemplateColumns={['100% 1fr','50% 1fr']} display="block" mb='40px'>
                <Box 
                    display={'flex'} justifyContent={'center'} 
                    alignItems={'center'}  color={'primary.300'} 
                    marginTop={['56px','56px','116px','116px']} 
                >
                    <Box display={'block'} >
                        <Box display={'flex'} fontSize={{ base: '30px', md: '40px',lg: '40px', xl: '40px'}}>
                            <Image src='/img/Group 2.png' alt='Imagem' w="260px" h="75px" ml={'10px'} />
                        </Box>
                        <Box fontWeight="bold" display={'flex'} color={'primary.300'} mt={['8px','30px','30px','30px']} >
                            <Text fontSize={{ base: '20px', md: '40px', lg: '40px',}} >
                                Faça login
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box 
                    w='100%' marginTop={['23px','23px','23px','23px']} 
                    color={'primary.300'} display={'flex'}
                    justifyContent='center' alignItems={'center'} 
                >
                    <Box display={'block'}>
                        <Text fontSize={'20px'} color={'grey.300'}>Email</Text>
                            <Input 
                                variant='outline' placeholder='exemplo@email.com' 
                                w={['300px','400px','400px','400px']}
                                h={'45px'} borderRadius={'5px'} 
                            /> 
                        <Text fontSize={'20px'} color={'grey.300'} mt={'20px'}>Senha</Text> 
                        <InputGroup>
                            <Input 
                                w={['300px','400px','400px','400px']} 
                                h={'45px'} borderRadius={'5px'} 
                                type={show ? 'text' : 'password'} placeholder='*********'
                            />
                            <InputRightElement width='5rem'>
                                <Button 
                                    onClick={handleClick} h={'0px'} 
                                    m={'8px -40px 0 0'} display={'flex'} 
                                    justifyContent='center' alignItems={'center'}
                                >
                                    {show ? <MdVisibility /> : <MdVisibilityOff />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Box 
                            float="left" fontWeight="bold" 
                            color={'primary.300'} mt={'10px'} 
                            w={'161px'} h={'23px'} fontSize={'15px'}
                        >
                            <Link href='/Dashboard' color={'#FFF'} >
                                Esqueci minha senha
                            </Link>
                        </Box>
                        <Box>
                            <Button 
                                bg={'primary.300'} h={'50'}
                                color={'white.300'}
                                _hover={{ bg: 'secondary.300'}} 
                                borderRadius={'5px'} mt={'30px'} 
                                w={['300px','400px','400px','400px']} 
                            > 
                                <Text as="span" fontSize={{ base: '16px', md: '16px', lg: '16px', }}>
                                    Entrar
                                </Text>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Container>   
    </>
  )
}

export default Login