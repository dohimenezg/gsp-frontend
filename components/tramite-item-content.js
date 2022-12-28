import { Flex, Box, HStack, Text } from '@chakra-ui/react'

export default function TramiteItemContent({
  asuntoTramite,
  medioRecepcion,
  numeroOficio,
  oficioRespuesta,
  fechaRespuesta,
  nombrePeticionario,
  tipoPeticionario,
  direccionPeticionario,
  telefonoPeticionario,
  celularPeticionario,
  correoPeticionario,
  dependenciaTramitante,
  tramitante,
  fechaTraslado
}) {
  return (
    <Flex flexDir="column" mx={4} my={3}>
      <Flex flexDir="row" minW="100%">
        <Flex flexDir="row" minW="100%" justifyContent="space-between">
          <Box flexDir="row" w="50%" pr={2}>
            <Text my="1px">
              Asunto de Trámite: {asuntoTramite}
            </Text>
            <Text my="1px">
              Medio de Recepción: {medioRecepcion}
            </Text>
            <Text my="1px">
              Número de Oficio: {numeroOficio}
            </Text>
            <Text my="1px">
              Oficio de Respuesta: {oficioRespuesta}
            </Text>
            <Text my="1px">
              Fecha de Respuesta: {fechaRespuesta}
            </Text>
          </Box>
          <Box flexDir="row" w="50%" pl={2}>
            <Text my="1px">
              Nombre del Peticionario: {nombrePeticionario}
            </Text>
            <Text my="1px">
              Tipo del Peticionario: {tipoPeticionario}
            </Text>
            <Text my="1px">
              Dirección del Peticionario: {direccionPeticionario}
            </Text>
            <Text my="1px">
              Teléfono del Peticionario: {telefonoPeticionario}
            </Text>
            <Text my="1px">
              Celular del Peticionario: {celularPeticionario}
            </Text>
            <Text my="1px">
              Correo del Peticionario: {correoPeticionario}
            </Text>
          </Box>
        </Flex>
        <Flex flexDir="column"></Flex>
      </Flex>
      <Flex flexDir="column" minW="100%" my={3}>
          <Text fontSize="x" fontWeight="semibold">
            Trasladado a
          </Text>
      </Flex>
      <Flex flexDir="column" minW="100%">
        <Text my="1px">
          Dependencia: {dependenciaTramitante}
        </Text>
        <Text my="1px">
          Tramitante: {tramitante}
        </Text>
        <Text my="1px">
          Fecha del Traslado: {fechaTraslado}
        </Text>
      </Flex>
    </Flex>
  )
}
