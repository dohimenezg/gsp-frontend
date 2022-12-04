import { FiHome, FiCompass } from 'react-icons/fi';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { BsGear } from 'react-icons/bs'
import Sidebar from '../components/sidebar';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import StickyBox from 'react-sticky-box';

export default function Inicio () {
    const pages_to_go = [
        {
            "title": "Inicio",
            "link": "/inicio",
            "icon": FiHome
        },
        {
            "title": "Registro",
            "link": "/registro",
            "icon": HiOutlineDocumentPlus
        },
        {
            "title": "Seguimiento",
            "link": "/tramite",
            "icon": FiCompass
        },
        {
            "title": "Configuración",
            "link": "/configuracion",
            "icon": BsGear
        }
    ]
    return (
        <Flex display="flex" alignItems="flex-start">
            <StickyBox >
                <Sidebar options={pages_to_go}/>
            </StickyBox>
            <Box minHeight="100vh" minWidth="100vh" bgColor="rgb(20, 20, 30)" w="100%">
                <Image src='inicio.svg'></Image>
            </Box>
        </Flex>
    )
}