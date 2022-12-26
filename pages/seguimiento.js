import { Flex } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import SeguimientoTramites from '../components/layouts/seguimiento-tramites'
import MainSidebar from '../components/layouts/main-sidebar'

export default function Registro() {
  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar />
      </StickyBox>
      <SeguimientoTramites />
    </Flex>
  )
}
