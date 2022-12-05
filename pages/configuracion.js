import { FiHome, FiCompass } from 'react-icons/fi'
import { HiOutlineDocumentPlus } from 'react-icons/hi2'
import { BsGear } from 'react-icons/bs'
import Sidebar from '../components/sidebar'
import { Box, Flex, Text } from '@chakra-ui/react'
import StickyBox from 'react-sticky-box'
import ConfiguracionTramites from '../components/layouts/configuracion-tramites'

export default function Configuracion() {
  const pages_to_go = [
    {
      title: 'Inicio',
      link: '/inicio',
      icon: FiHome
    },
    {
      title: 'Registro',
      link: '/registro',
      icon: HiOutlineDocumentPlus
    },
    {
      title: 'Seguimiento',
      link: '/seguimiento',
      icon: FiCompass
    },
    {
      title: 'Configuración',
      link: '/configuracion',
      icon: BsGear
    }
  ]
  return (
    <Flex display="flex" alignItems="flex-start">
      <StickyBox>
        <Sidebar options={pages_to_go} />
      </StickyBox>
      <ConfiguracionTramites />
    </Flex>
  )
}
