import stilo from '../styles/test.module.css'
import { Button, Flex } from '@chakra-ui/react'

export default function Test(){
    return (
        <>
            <h1 className={stilo.abc}>Opa Style</h1>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Button colorScheme='blue'>Button</Button>
            </Flex>
        </>
    )
}