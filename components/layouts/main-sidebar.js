import Sidebar from '../sidebar'
import { FiHome, FiCompass } from 'react-icons/fi'
import { HiOutlineDocumentPlus } from 'react-icons/hi2'
import { BsGear } from 'react-icons/bs'
import { Avatar, Icon, Flex, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function MainSidebar() {
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
    <Sidebar
      // top = { (?) } -- En este caso no se usar top 
      options={pages_to_go}
      bottom={
        <Flex w="100%" mt="auto" alignItems="flex-start">
          <Flex w="100%" align="center" pl={2} pb={2} flexDir="row">
            {/* TODO: Cambiar para cuando se implemente el login */}
            <Avatar size="sm" />
            <Flex w="100%" flexDir="column" color="white">
              <Text pl={2} fontSize="sm" fontWeight="semibold">
                Secretaría General
              </Text>
              <Text pl={2} fontSize="sm" fontWeight="light">
                secgral@unicauca.edu.co
              </Text>
            </Flex>
            <Icon as={BsThreeDotsVertical} fontSize="xl" color="#FFF" mx={2} />
          </Flex>
        </Flex>
      }
    />
  )
}
