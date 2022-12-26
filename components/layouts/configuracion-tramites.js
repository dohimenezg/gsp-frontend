import {
  Text,
  Box,
  Heading,
  Button,
  Flex,
  SliderThumb,
  SliderTrack,
  SliderMark,
  Slider,
  SliderFilledTrack
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const api = axios.create({
  baseURL: `http://localhost:8000/configs`
})

export default function ConfiguracionTramites() {
  const [slider_peticion, set_slider_peticion] = useState(15)
  const [slider_queja, set_slider_queja] = useState(15)
  const [slider_reclamo, set_slider_reclamo] = useState(15)
  const [slider_sugerencia, set_slider_sugerencia] = useState(15)
  const minimaDuracion = 1
  const maximaDuracion = 15

  const fetchData = async () => {
    try {
      await api.get('/').then(res => {
        set_slider_peticion(res.data.configuraciones[0].tiempo_limite)
        set_slider_queja(res.data.configuraciones[1].tiempo_limite)
        set_slider_reclamo(res.data.configuraciones[2].tiempo_limite)
        set_slider_sugerencia(res.data.configuraciones[3].tiempo_limite)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  const updateConfiguracion = async () => {
    let obj_peticion = {
      'tipo_configuracion': "P",
      'tiempo_limite': slider_peticion,
    }
    let obj_queja = {
      'tipo_configuracion': "Q",
      'tiempo_limite': slider_queja,
    }
    let obj_reclamo = {
      'tipo_configuracion': "R",
      'tiempo_limite': slider_reclamo,
    }
    let obj_sugerencia = {
      'tipo_configuracion': "S",
      'tiempo_limite': slider_sugerencia,
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
        <Flex
          py={5}
          px={20}
          mx={10}
          flexDir="column"
          borderWidth="2px"
          borderRadius="5px"
          borderColor="#14141E"
          bgColor="#36363F"
          wrap="wrap"
        >
          <Text mb={10} fontSize="xl" fontWeight="light">
            Peticiones
          </Text>
          <Slider
            defaultValue={15}
            min={minimaDuracion}
            max={maximaDuracion}
            colorScheme="red"
            onChange={v => set_slider_peticion(v)}
          >
            <SliderMark value={1} mt={2} fontSize="sm">
              1
            </SliderMark>
            <SliderMark value={3} mt={2} fontSize="sm">
              3
            </SliderMark>
            <SliderMark value={5} mt={2} fontSize="sm">
              5
            </SliderMark>
            <SliderMark value={7} mt={2} fontSize="sm">
              7
            </SliderMark>
            <SliderMark value={9} mt={2} fontSize="sm">
              9
            </SliderMark>
            <SliderMark value={11} mt={2} fontSize="sm">
              11
            </SliderMark>
            <SliderMark value={13} mt={2} fontSize="sm">
              13
            </SliderMark>
            <SliderMark value={15} mt={2} fontSize="sm">
              15
            </SliderMark>
            <SliderMark
              value={slider_peticion}
              textAlign="center"
              bg="red.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {slider_peticion}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={10} fontSize="xl" fontWeight="light">
            Límite de {slider_peticion} días.
          </Text>
        </Flex>

        <Flex
          py={5}
          px={20}
          mx={10}
          flexDir="column"
          borderWidth="2px"
          borderRadius="5px"
          borderColor="#14141E"
          bgColor="#36363F"
          wrap="wrap"
        >
          <Text mb={10} fontSize="xl" fontWeight="light">
            Quejas
          </Text>
          <Slider
            defaultValue={15}
            min={minimaDuracion}
            max={maximaDuracion}
            colorScheme="red"
            onChange={v => set_slider_queja(v)}
          >
            <SliderMark value={1} mt={2} fontSize="sm">
              1
            </SliderMark>
            <SliderMark value={3} mt={2} fontSize="sm">
              3
            </SliderMark>
            <SliderMark value={5} mt={2} fontSize="sm">
              5
            </SliderMark>
            <SliderMark value={7} mt={2} fontSize="sm">
              7
            </SliderMark>
            <SliderMark value={9} mt={2} fontSize="sm">
              9
            </SliderMark>
            <SliderMark value={11} mt={2} fontSize="sm">
              11
            </SliderMark>
            <SliderMark value={13} mt={2} fontSize="sm">
              13
            </SliderMark>
            <SliderMark value={15} mt={2} fontSize="sm">
              15
            </SliderMark>
            <SliderMark
              value={slider_queja}
              textAlign="center"
              bg="red.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {slider_queja}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={10} fontSize="xl" fontWeight="light">
            Límite de {slider_queja} días.
          </Text>
        </Flex>
        <Flex
          py={5}
          px={20}
          mx={10}
          flexDir="column"
          borderWidth="2px"
          borderRadius="5px"
          borderColor="#14141E"
          bgColor="#36363F"
          wrap="wrap"
        >
          <Text mb={10} fontSize="xl" fontWeight="light">
            Reclamos
          </Text>
          <Slider
            defaultValue={15}
            min={minimaDuracion}
            max={maximaDuracion}
            colorScheme="red"
            onChange={v => set_slider_reclamo(v)}
          >
            <SliderMark value={1} mt={2} fontSize="sm">
              1
            </SliderMark>
            <SliderMark value={3} mt={2} fontSize="sm">
              3
            </SliderMark>
            <SliderMark value={5} mt={2} fontSize="sm">
              5
            </SliderMark>
            <SliderMark value={7} mt={2} fontSize="sm">
              7
            </SliderMark>
            <SliderMark value={9} mt={2} fontSize="sm">
              9
            </SliderMark>
            <SliderMark value={11} mt={2} fontSize="sm">
              11
            </SliderMark>
            <SliderMark value={13} mt={2} fontSize="sm">
              13
            </SliderMark>
            <SliderMark value={15} mt={2} fontSize="sm">
              15
            </SliderMark>
            <SliderMark
              value={slider_reclamo}
              textAlign="center"
              bg="red.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {slider_reclamo}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={10} fontSize="xl" fontWeight="light">
            Límite de {slider_reclamo} días.
          </Text>
        </Flex>
        <Flex
          py={5}
          px={20}
          mx={10}
          flexDir="column"
          borderWidth="2px"
          borderRadius="5px"
          borderColor="#14141E"
          bgColor="#36363F"
          wrap="wrap"
        >
          <Text mb={10} fontSize="xl" fontWeight="light">
            Sugerencias
          </Text>
          <Slider
            defaultValue={15}
            min={minimaDuracion}
            max={maximaDuracion}
            colorScheme="red"
            onChange={v => set_slider_sugerencia(v)}
          >
            <SliderMark value={1} mt={2} fontSize="sm">
              1
            </SliderMark>
            <SliderMark value={3} mt={2} fontSize="sm">
              3
            </SliderMark>
            <SliderMark value={5} mt={2} fontSize="sm">
              5
            </SliderMark>
            <SliderMark value={7} mt={2} fontSize="sm">
              7
            </SliderMark>
            <SliderMark value={9} mt={2} fontSize="sm">
              9
            </SliderMark>
            <SliderMark value={11} mt={2} fontSize="sm">
              11
            </SliderMark>
            <SliderMark value={13} mt={2} fontSize="sm">
              13
            </SliderMark>
            <SliderMark value={15} mt={2} fontSize="sm">
              15
            </SliderMark>
            <SliderMark
              value={slider_sugerencia}
              textAlign="center"
              bg="red.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {slider_sugerencia}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={10} fontSize="xl" fontWeight="light">
            Límite de {slider_sugerencia} días.
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
