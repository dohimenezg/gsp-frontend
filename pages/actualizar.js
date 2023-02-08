import { Flex } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import ActualizarTramite from '../components/layouts/actualizar-tramite'
import MainSidebar from '../components/layouts/main-sidebar'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Actualizar() {
  const router = useRouter()
  const [idTramite, setIdTramite] = useState(null)

  useEffect(() => {
    const handleRouteChange = () => {
      setIdTramite(router.query.id_tramite)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  useEffect(() => {
    setIdTramite(router.query.id_tramite)
  }, [router.query.id_tramite])

  if (!idTramite) {
    return null
  }

  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <MainSidebar />
      </StickyBox>
      <ActualizarTramite id_tramite={idTramite} />
    </Flex>
  )
}
