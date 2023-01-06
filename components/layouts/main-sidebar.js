import Sidebar from '../sidebar'
import { FiHome, FiCompass } from 'react-icons/fi'
import { HiOutlineDocumentPlus } from 'react-icons/hi2'
import { BsGear } from 'react-icons/bs'
import UserCard from '../user-card'

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
        <UserCard 
          name="Secretaría General"
          email="secgral@unicauca.edu.co"
        />
      }
    />
  )
}
