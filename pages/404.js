import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Flex
      p={4}
      minHeight="100vh"
      minWidth="100vh"
      flexDir="column"
      justifyContent="center"
      bgGradient={['linear(to-br, #700A22 15%, #141189 100%)']}
    >

      <Flex align="center" justifyContent="center" py={4}>
        <NextLink href="/" passHref>
          <Image src="logo-unicauca.svg" objectFit="contain" boxSize='200px'/>
        </NextLink>
      </Flex>
      <Heading as="h1" color="#fff" py={4} align="center">
        No encontrada
      </Heading>
      <Text color="#fff" py={4} align="center">
        La página a la que está accediendo no existe
      </Text>
      <Box py={4} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="blackAlpha">Ir a Inicio</Button>
        </NextLink>
      </Box>
    
    </Flex>
  )
}

export default NotFound
