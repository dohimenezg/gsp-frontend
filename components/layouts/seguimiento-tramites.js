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
import { Component, useState } from 'react'
import TramiteItem from '../tramite-item'
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

class SeguimientoTramites extends Component {
  state = {
    tramites: [],
    tramitantes: [],
    traslados: []
  }

  constructor() {
    super()
  }

  getTramites = async () => {
    try {
      api.get('tramites/').then(res => {
        this.setState({ tramites: res.data.tramites })
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTramitantes = async () => {
    try {
      api.get('tramitantes/').then(res => {
        this.setState({ tramitantes: res.data.tramitantes })
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTraslados = async () => {
    try {
      api.get('traslados/').then(res => {
        this.setState({ traslados: res.data.traslados })
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTramites()
    this.getTraslados()
    this.getTramitantes()
  }

  //TODO: Pasar estas consultas al backend

  findDependencia(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined'){
      dep = ""
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).id_tramitante
      dep = this.state.tramitantes.find(x => x.id == dep).dependencia_tramitante
    }
    return dep
  }

  findTramitante(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined'){
      dep = ""
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).id_tramitante
      dep = this.state.tramitantes.find(x => x.id == dep).nombre_tramitante
    }
    return dep
  }

  findTraslado(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined'){
      dep = ""
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).fecha_traslado
    }
    return dep
  }

  render() {
    const tipos_tramites = {
      P: 'Petición',
      Q: 'Queja',
      R: 'Reclamo',
      S: 'Sugerencia',
      F: 'Felicitación'
    }

    const tipos_medios = {
      WE: 'Web',
      ES: 'Escrito',
    }

    const tipos_peticinarios = {
      PRE: 'Estudiante de Pregrado',
      POS: 'Estudiante de Posgrado',
      EMP: 'Empleado',
      DOC: 'Docente',
      EGR: 'Egresado',
      JUB: 'Jubilado',
      EXT: 'Persona Externa',
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
          <Flex flexDir="column" wrap="wrap">
            <Flex>{/* TODO */}</Flex>
          </Flex>
        </Box>
        <Box m={4}>
          <Flex flexDir="column" wrap="wrap" minW="100%">
            <Flex w="100%" minW="100%">
              {/* TODO */}
              <Accordion w="100%" minW="100%" allowToggle>
                {this.state.tramites.map(tramite => (
                  <TramiteItem key={tramite.id}
                    title={
                      <Flex flexDir="column" ml={4} mr={4} mt={3} mb={3}>
                        <HStack spacing="30px" mb={2}>
                          <Heading as="h2" fontSize="x" fontWeight="semibold">
                            Radicado: {tramite.numero_ventanilla}
                          </Heading>
                          <Center height="20px">
                            <Divider orientation="vertical" />
                          </Center>
                          <Heading as="h2" fontSize="x" fontWeight="normal">
                            Tipo PQRSF: {tipos_tramites[tramite.tipo_tramite]}
                          </Heading>
                        </HStack>
                        <HStack
                          spacing="30px"
                          justifyContent="space-between"
                          flexDir="row"
                        >
                          <Flex flexDir="column">
                            <Heading as="h2" fontSize="x" fontWeight="normal">
                              Fecha de Recepción
                            </Heading>
                            <Text>{tramite.fecha_recepcion}</Text>
                          </Flex>
                          <Flex flexDir="column">
                            <Heading as="h2" fontSize="x" fontWeight="normal">
                              Fecha de Vencimiento
                            </Heading>
                            <Text>{tramite.fecha_vencimiento}</Text>
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
                                <Text>{tramite.asunto_tramite}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Medio de Recepción:
                                </Text>
                                <Text>{tipos_medios[tramite.medio_recepcion]}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Número de Oficio:
                                </Text>
                                <Text>{tramite.numero_oficio}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Oficio de Respuesta:
                                </Text>
                                <Text>{tramite.oficio_respuesta}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Fecha de Respuesta:
                                </Text>
                                <Text>{tramite.fecha_respuesta}</Text>
                              </HStack>
                            </Box>
                            <Box flexDir="row" ml="auto">
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Nombre del Peticionario:
                                </Text>
                                <Text>{tramite.nombre_peticionario}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Tipo del Peticionario:
                                </Text>
                                <Text>{tipos_peticinarios[tramite.tipo_peticionario]}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Dirección del Peticionario:
                                </Text>
                                <Text>{tramite.direccion_peticionario}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Teléfono del Peticionario:
                                </Text>
                                <Text>{tramite.telefono_peticionario}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Celular del Peticionario:
                                </Text>
                                <Text>{tramite.celular_peticionario}</Text>
                              </HStack>
                              <HStack spacing="10px">
                                <Text as="h2" fontSize="x" fontWeight="normal">
                                  Correo del Peticionario:
                                </Text>
                                <Text>{tramite.correo_peticionario}</Text>
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
                            <Text>{this.findDependencia(tramite.id)}</Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Tramitante:
                            </Text>
                            <Text>{this.findTramitante(tramite.id)}</Text>
                          </HStack>
                          <HStack spacing="10px">
                            <Text as="h2" fontSize="x" fontWeight="normal">
                              Fecha del Traslado:
                            </Text>
                            <Text>{this.findTraslado(tramite.id)}</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    }
                    color="rgb(20, 20, 30)"
                  />
                ))}
              </Accordion>
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default SeguimientoTramites
