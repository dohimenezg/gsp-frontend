import { Flex } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import ConfiguracionTramites from '../components/layouts/configuracion-tramites'
import MainSidebar from '../components/layouts/main-sidebar'

export default function Configuracion() {
  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar />
      </StickyBox>
      <ConfiguracionTramites />
    </Flex>
  )
}
