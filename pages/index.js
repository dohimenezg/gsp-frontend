import Sidebar from '../components/sidebar';
import { Flex, Text } from '@chakra-ui/react';
import { FiHome, FiCompass } from 'react-icons/fi';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { BsGear } from 'react-icons/bs'

const Page = () => {
    const pages_to_go = [
        {
            "title": "Inicio",
            "link": "",
            "icon": FiHome
        },
        {
            "title": "Registro",
            "link": "",
            "icon": HiOutlineDocumentPlus
        },
        {
            "title": "Seguimiento",
            "link": "",
            "icon": FiCompass
        },
        {
            "title": "Configuración",
            "link": "",
            "icon": BsGear
        }
    ]
    return (
        <Flex backgroundColor="blue.600">
            <Sidebar options={ pages_to_go } child={ <Text>Luego el pongo el child que es TODO</Text> }/>
        </Flex>
        )
    }
    
    export default Page
    