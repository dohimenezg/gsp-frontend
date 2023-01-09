import {
  Box,
  Heading,
  Button,
  Flex
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TimeSlider from '../time-slider'

const api = axios.create({
  baseURL: `http://localhost:8000/configs`
})

export default function ConfiguracionTramites() {
  const [sliderPeticion, setSliderPeticion] = useState()
  const [sliderQueja, setSliderQueja] = useState()
  const [sliderReclamo, setSliderReclamo] = useState()
  const [sliderSugerencia, setSliderSugerencia] = useState()
  const minimaDuracion = 1
  const maximaDuracion = 15

  const fetchData = async () => {
    try {
      await api.get('/').then(res => {
        setSliderPeticion(res.data.configuraciones[0].tiempo_limite)
        setSliderQueja(res.data.configuraciones[1].tiempo_limite)
        setSliderReclamo(res.data.configuraciones[2].tiempo_limite)
        setSliderSugerencia(res.data.configuraciones[3].tiempo_limite)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateConfiguracion = async () => {
    let obj_peticion = {
      tipo_configuracion: 'P',
      tiempo_limite: sliderPeticion
    }
    let obj_queja = {
      tipo_configuracion: 'Q',
      tiempo_limite: sliderQueja
    }
    let obj_reclamo = {
      tipo_configuracion: 'R',
      tiempo_limite: sliderReclamo
    }
    let obj_sugerencia = {
      tipo_configuracion: 'S',
      tiempo_limite: sliderSugerencia
    }
    try {
      await api.put(`/${1}`, obj_peticion)
      await api.put(`/${2}`, obj_queja)
      await api.put(`/${3}`, obj_reclamo)
      await api.put(`/${4}`, obj_sugerencia)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box
      minHeight="100vh"
      minWidth="100vh"
      bgColor="rgb(20, 20, 30)"
      w="100%"
      color="#FFF"
    >
      <Box m={4}>
        <Heading as="h3" size="lg" fontWeight="light">
          Configuración de Trámites
        </Heading>
      </Box>
      <Box
        m={5}
        p={5}
        borderWidth="2px 2px 2px 2px"
        borderRadius="5px"
        borderColor="#30303E"
      >
        <Flex mb={8} flexDir="row" wrap="wrap" alignContent="center">
          <Flex alignContent="center" wrap="wrap">
            <Heading as="h3" size="md" fontWeight="light">
              Configurar límites de tiempo
            </Heading>
          </Flex>
          <Flex alignContent="center" ml="auto" wrap="wrap">
            <Button
              m="auto"
              bgColor="rgb(123, 18, 46)"
              _hover={{ bgColor: 'rgba(172, 172, 178, 50%)' }}
              onClick={updateConfiguracion}
            >
              Guardar Cambios
            </Button>
          </Flex>
        </Flex>
        <TimeSlider
          name="Peticiones"
          defaultValue={sliderPeticion}
          callback={setSliderPeticion}
        />
        <TimeSlider
          name="Quejas"
          defaultValue={sliderQueja}
          callback={setSliderQueja}
        />
        <TimeSlider
          name="Reclamos"
          defaultValue={sliderReclamo}
          callback={setSliderReclamo}
        />
        <TimeSlider
          name="Sugerencias"
          defaultValue={sliderSugerencia}
          callback={setSliderSugerencia}
        />
      </Box>
    </Box>
  )
}
