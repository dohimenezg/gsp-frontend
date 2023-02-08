import { Flex } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import ActualizarTramite from '../components/layouts/actualizar-tramite'
import MainSidebar from '../components/layouts/main-sidebar'
import { useRouter } from 'next/router'

export default function Actualizar() {
  const router = useRouter()
  const { id_tramite } = router.query
  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar />
      </StickyBox>
      <ActualizarTramite id_tramite={id_tramite} />
    </Flex>
  )
}