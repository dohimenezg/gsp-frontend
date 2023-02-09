import React from 'react'
import { Flex, HStack, Heading, Center, Box, Text, Divider } from '@chakra-ui/react'

class TramiteCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.traslados){
      return null
    }
    return (
      <Flex flexDir="column" mx={4} my={3}>
        <HStack spacing="30px" my={2}>
          <Heading as="h2" fontSize="x" fontWeight="semibold">
            Radicado: {this.props.numeroVentanilla}
          </Heading>
          <Center height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Heading as="h2" fontSize="x" fontWeight="normal">
            Tipo PQRSF: {this.props.tipoTramite}
          </Heading>
        </HStack>
        <HStack spacing="30px" justifyContent="space-between" flexDir="row" mb={3}>
          <Flex flexDir="column">
            <Heading as="h2" fontSize="x" fontWeight="normal">
              Fecha de Recepción
            </Heading>
            <Text>{this.props.fechaRecepcion}</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading as="h2" fontSize="x" fontWeight="normal">
              Fecha de Vencimiento
            </Heading>
            <Text>{this.props.fechaVencimiento}</Text>
          </Flex>
        </HStack>
        <Flex flexDir="column" mb={2}>
          <Flex flexDir="row" minW="100%" justifyContent="space-between">
            <Box flexDir="column" w="50%" pr={2}>
              <Text my="1px">
                Asunto de Trámite: {this.props.asuntoTramite}
              </Text>
              <Text my="1px">
                Medio de Recepción: {this.props.medioRecepcion}
              </Text>
              <Text my="1px">Número de Oficio: {this.props.numeroOficio}</Text>
              <Text my="1px">
                Oficio de Respuesta: {this.props.oficioRespuesta}
              </Text>
              <Text my="1px">
                Fecha de Respuesta: {this.props.fechaRespuesta}
              </Text>
            </Box>
            <Box flexDir="column" w="50%" pl={2}>
              <Text my="1px">
                Nombre del Peticionario: {this.props.nombrePeticionario}
              </Text>
              <Text my="1px">
                Tipo del Peticionario: {this.props.tipoPeticionario}
              </Text>
              <Text my="1px">
                Dirección del Peticionario: {this.props.direccionPeticionario}
              </Text>
              <Text my="1px">
                Teléfono del Peticionario: {this.props.telefonoPeticionario}
              </Text>
              <Text my="1px">
                Celular del Peticionario: {this.props.celularPeticionario}
              </Text>
              <Text my="1px">
                Correo del Peticionario: {this.props.correoPeticionario}
              </Text>
            </Box>
            <Flex flexDir="column"></Flex>
          </Flex>
          <Flex flexDir="column" minW="100%">
            <Text fontSize="x" fontWeight="semibold">
              Traslados
            </Text>
          </Flex>
          <Flex flexDir="column" minW="100%">
          {this.props.traslados.map((traslado, index) => (
          <Flex key={'traslado-' + index} my={1} flexDir="column" minW="100%">
            <Text my="1px">Traslado {index + 1}</Text>
            <Text my="1px">
              Dependencia: {traslado.id_tramitante.dependencia_tramitante}
            </Text>
            <Text my="1px">
              Tramitante: {traslado.id_tramitante.nombre_tramitante}
            </Text>
            <Text my="1px">Fecha del Traslado: {traslado.fecha_traslado}</Text>
          </Flex>
        ))}
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

export default TramiteCard
