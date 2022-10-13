import { Box, Button, Container, Grid, Link, Icon, Image, Input, InputGroup, InputRightElement, Text, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import { RiBookletLine } from "react-icons/ri";
// import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

const MyRecords = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState()

  const data = ["15/10", "16/10", "17/10", "18/10",]

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  return (
    <>
      <Container maxW={'100%'} maxH={'100%'} display={'flex'} >
            <Grid gridTemplateColumns={['100% 1fr','50% 1fr']}  display={'block'} w={'180px'} h={'987px'}>
              <Box h={'102px'} w={'100%'} display={'flex'} justifyContent='center' alignItems={'center'}>
                <Box display={'flex'} color={'primary.300'} fontSize= '16px'>
                  <Text>
                      Ponto     
                  </Text>
                  <Text fontWeight="bold">Go</Text>
                </Box>
              </Box>
              <Box h={'102px'} w={'100%'} display={'flex'} borderLeft={'4px solid #330693'}  borderBottom={'1px solid rgba(32, 41, 46, 0.3)'} borderTop={'1px solid rgba(32, 41, 46, 0.3)'} justifyContent='center' alignItems={'center'}>
                <Box h="30px" fontWeight="bold"  fontSize={{ base: '8px',md: '10px', lg: '14px',}} 
                  >
                  <Link href='/' color={'primary.300'} lineHeight="30px" margin="0 15px" display={'flex'} justifyContent='center' alignItems={'center'}>
                      <Icon as={RiBookletLine} color={'primary.300'} mr="6px" w="18px" h="18px" />
                      Meus registro
                  </Link>
                </Box>
              </Box>
              <Box h={'102px'} w={'100%'} display={'flex'} justifyContent='center' alignItems={'center'} bg='white.300'>
                <Box h="30px" fontWeight="bold"  fontSize='16px'
                  >
                  <Link href='/' color={'#000'}  display={'flex'} justifyContent='left' alignItems={'center'}>
                    <Image src='/img/Vector.png' alt='Imagem' w="20px" h="20px" />
                      Sair
                  </Link>
                </Box>
              </Box>
            </Grid>
              
            <Grid gridTemplateColumns={['100% 1fr','50% 1fr']} h={'987px'} w={'100%'} bg={'rgba(32, 41, 46, 0.3)'} justifyContent='center' display="block" mb='40px'>             
              <Box ml='30px' mt={'20px'}>
                <Button w={'200px'} h={'50px'} onClick={() => {setOverlay(<OverlayTwo />)
                        onOpen()}} borderRadius={'5px'} bg={'primary.300'} color={'white.300'}>Registrar ponto</Button>
              </Box>
              <Box fontSize={'22px'} fontWeight="bold" color={'grey.300'} display={'flex'} ml='28px' mt={'20px'} gap={'170px'} >
                <Text>Colaborador</Text>
                <Text>Data</Text>
                <Text>Hora</Text>
              </Box>
              
              {data.map((data) => (
                <Box h={'73px'} w={'95%'} ml={'30px'} mt='10px' display={'flex'} position="relative" borderRadius={'5px'} _before={{ position: 'absolute', content: '" "', display: 'block', width: '5px', height: '80%', background: '#8A53FF', 'border-radius': '5px' }} 
                      border={'1px solid rgba(32, 41, 46, 0.3)'} p={'15px'}  alignItems={'center'} bg='white.300'>
                  <Box display={'flex'} alignItems={'center'} ml='50px' fontSize='20px'>
                      <Box fontSize='22px' display={'block'}>
                        <Text fontWeight="bold">
                            Sarada Uchiha     
                        </Text>
                        <Text opacity={'60%'} fontSize={'16px'}>001</Text>
                      </Box>
                      <Box ml='100px' opacity={'60%'}>
                        <Text>
                            {data}     
                        </Text>
                      </Box>
                      <Box opacity={'60%'} ml='170px'>
                        <Text>
                            08:00h    
                        </Text>
                      </Box>
                  </Box>
                </Box>
              ))}
            </Grid>
        </Container> 

        <Modal isCentered isOpen={isOpen} onClose={onClose} >
            {overlay}
            <ModalContent >
                <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                <ModalBody display={'flex'} justifyContent='center' alignItems={'center'} >
                    <Box>
                        <Box display={'block'} justifyContent='center' alignItems={'center'}>
                            <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={'60px'}>
                                <Text fontSize={'20px'} fontWeight="bold">Registrar novo ponto</Text>
                            </Box>
                            <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={'31px'}>
                                <Image src='/img/VectorRegistro.png' alt='Imagem' w="88px" h="88px" />
                            </Box>
                            <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={'16px'}>
                                <Text color={'primary.300'} fontWeight="bold" fontSize={'30px'}>10:30</Text>
                            </Box>
                            <Box display={'flex'} justifyContent='center' alignItems={'center'} mt={'5px'}>
                                <Text color={'primary.300'} fontSize={'20px'}>05/10/2022</Text>
                            </Box>
                        </Box>
                        <Box display={'block'} mt={'20px'} mb={'60px'}>
                            <Box>
                                <Button w={'200px'} h={'50px'} borderRadius={'5px'} bg={'primary.300'} color={'white.300'}>Bater ponto</Button>
                            </Box>
                            <Box mt={'10px'}>
                                <Button w={'200px'} h={'50px'} borderRadius={'5px'} bg={'primary.300'} color={'white.300'}>Cancelar</Button>
                            </Box>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default MyRecords