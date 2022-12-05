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
  SliderFilledTrack,
  Tooltip
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ConfiguracionTramites() {
  const [slider_peticion, set_slider_peticion] = useState(5)
  const [slider_queja, set_slider_queja] = useState(5)
  const [slider_reclamo, set_slider_reclamo] = useState(5)
  const [slider_sugerencia, set_slider_sugerencia] = useState(5)
  const minimaDuracion = 1
  const maximaDuracion = 15

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
            >
              Guardar Cambios
            </Button>
          </Flex>
        </Flex>
        <Flex
          pt={5}
          pb={5}
          pl={20}
          pr={20}
          ml={10}
          mr={10}
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
            defaultValue={5}
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
          pt={5}
          pb={5}
          pl={20}
          pr={20}
          ml={10}
          mr={10}
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
            defaultValue={5}
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
          pt={5}
          pb={5}
          pl={20}
          pr={20}
          ml={10}
          mr={10}
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
            defaultValue={5}
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
          pt={5}
          pb={5}
          pl={20}
          pr={20}
          ml={10}
          mr={10}
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
            defaultValue={5}
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
