import { Flex } from '@chakra-ui/react'
import RegistroTramite from '../components/layouts/registro-tramite'
import StickyBox from 'react-sticky-box'
import MainSidebar from '../components/layouts/main-sidebar'

export default function Registro() {

  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar />
      </StickyBox>
      <RegistroTramite />
    </Flex>
  )
}
