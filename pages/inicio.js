import { Box, Flex, Image } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import MainSidebar from '../components/layouts/main-sidebar'

export default function Inicio() {

  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar/>
      </StickyBox>
      <Box
        minHeight="100vh"
        minWidth="100vh"
        bgColor="rgb(20, 20, 30)"
        w="100%"
      >
        <Image src="inicio.svg"></Image>
      </Box>
    </Flex>
  )
}
