import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  FormControl,
  useRadioGroup,
  Accordion,
  Divider,
  Center
} from '@chakra-ui/react'
import ButtomForm from '../buttom-form'
import { useState } from 'react'
import TramiteItem from '../tramite-item'

export default function SeguimientoTramites() {
  const tipos_tramites = {
    P: 'Petición',
    Q: 'Queja',
    R: 'Reclamo',
    S: 'Sugerencia',
    F: 'Felicitación'
  }

  const options = ['Todos', 'En Proceso', 'Cerca a Vencer', 'Vencidos']

  const [estado_tramite, set_estado_tramite] = useState('TO')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'estado_pqrsf',
    defaultValue: 'Todos'
  })

  const group = getRootProps()

  const updateEstadoTramite = datos => {
    set_estado_tramite(datos)
  }

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
          Seguimiento de Trámites
        </Heading>
      </Box>
      <Box m={4}>
        <Flex flexDir="row" wrap="wrap">
          <Flex>
            <FormControl
              as="fieldset"
              p="2px"
              bgColor="#30303E"
              borderRadius="5px"
            >
              <HStack spacing="2px" {...group} wrap="wrap">
                {options.map(value => {
                  const radio = getRadioProps({ value })
                  return (
                    <ButtomForm
                      key={value}
                      text={value.slice(0, 2).toUpperCase()}
                      callback={updateEstadoTramite}
                      {...radio}
                    >
                      {value}
                    </ButtomForm>
                  )
                })}
              </HStack>
            </FormControl>
          </Flex>
        </Flex>
      </Box>
      <Box m={4}>
        <Flex flexDir="column" wrap="wrap">
          <Flex>{/* TODO */}</Flex>
        </Flex>
      </Box>
      <Box m={4}>
        <Flex flexDir="column" wrap="wrap" minW="100%">
          <Flex w="100%" minW="100%">
            {/* TODO */}
            <Accordion w="100%" minW="100%" allowToggle>
              <TramiteItem
                title={
                  <Flex flexDir="column" ml={4} mr={4} mt={3} mb={3}>
                    <HStack spacing="30px" mb={2}>
                      <Heading as="h2" fontSize="x" fontWeight="semibold">
                        Radicado
                      </Heading>
                      <Center height="20px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Heading as="h2" fontSize="x" fontWeight="normal">
                        Tipo PQRSF
                      </Heading>
                    </HStack>
                    <HStack
                      spacing="30px"
                      justifyContent="space-between"
                      flexDir="row"
                    >
                      <Flex flexDir="column">
                        <Heading as="h2" fontSize="x" fontWeight="normal">
                          Fecha de recepción
                        </Heading>
                        <Text>4/12/2022</Text>
                      </Flex>
                      <Flex flexDir="column">
                        <Heading as="h2" fontSize="x" fontWeight="normal">
                          Fecha de vencimiento
                        </Heading>
                        <Text>4/12/2022</Text>
                      </Flex>
                    </HStack>
                  </Flex>
                }
                content={
                  <Flex flexDir="column" ml={4} mr={4} mt={3} mb={3}>
                    <Flex flexDir="row" minW="100%">
                      <Flex
                        flexDir="row"
                        minW="100%"
                        justifyContent="space-between"
                      >
                        <Box flexDir="row" mr="auto">
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Asunto de Trámite:
                            </Text>
                            <Text>
                              Asunto
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Medio de Recepción:
                            </Text>
                            <Text>
                              Medio
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Número de Oficio:
                            </Text>
                            <Text>
                              Número de oficio
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Oficio de Respuesta:
                            </Text>
                            <Text>
                              Oficio de Respuesta
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Fecha de Respuesta:
                            </Text>
                            <Text>
                              Fecha de Respuesta
                            </Text>
                          </HStack>
                        </Box>
                        <Box flexDir="row" mr="auto">
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Nombre del Peticionario:
                            </Text>
                            <Text>
                              Nombre
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Tipo del peticionatio:
                            </Text>
                            <Text>
                              Tipo del Peticionario
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Dirección del peticionario:
                            </Text>
                            <Text>
                              Dirección
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Teléfono del Peticionario:
                            </Text>
                            <Text>
                              Teléfono
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Celular del peticionario:
                            </Text>
                            <Text>
                              Celular
                            </Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Correo del peticionario:
                            </Text>
                            <Text>
                              Correo
                            </Text>
                          </HStack>
                        </Box>
                      </Flex>
                      <Flex flexDir="column"></Flex>
                    </Flex>
                    <Flex flexDir="column" minW="100%" mt={2} mb={2}>
                      <Flex>
                        <Text fontSize="x" fontWeight="semibold">
                          Trasladado a
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex flexDir="column" minW="100%">
                      <HStack spacing="10px">
                        <Text as="h2" fontSize="x" fontWeight="normal">
                          Dependencia:
                        </Text>
                        <Text>
                          Dependencia
                        </Text>
                      </HStack>
                      <HStack spacing="10px">
                        <Text as="h2" fontSize="x" fontWeight="normal">
                          Tramitante
                        </Text>
                        <Text>
                          Nombre del tramitante
                        </Text>
                      </HStack>
                      <HStack spacing="10px">
                        <Text as="h2" fontSize="x" fontWeight="normal">
                          Fecha del traslado:
                        </Text>
                        <Text>
                          Fecha
                        </Text>
                      </HStack>
                    </Flex>
                  </Flex>
                }
                color="rgb(20, 20, 30)"
              />
            </Accordion>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
