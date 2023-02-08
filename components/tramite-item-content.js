import { Flex, Box, Text, Icon, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BiPencil } from 'react-icons/bi'

export default function TramiteItemContent({
  id_t,
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
  traslados
}) {
  return (
    <Flex flexDir="column" mx={4} my={3}>
      <Flex flexDir="row" minW="100%" justifyContent="space-between">
        <Box flexDir="column" w="50%" pr={2}>
          <Text my="1px">Asunto de Trámite: {asuntoTramite}</Text>
          <Text my="1px">Medio de Recepción: {medioRecepcion}</Text>
          <Text my="1px">Número de Oficio: {numeroOficio}</Text>
          <Text my="1px">Oficio de Respuesta: {oficioRespuesta}</Text>
          <Text my="1px">Fecha de Respuesta: {fechaRespuesta}</Text>
        </Box>
        <Box flexDir="column" w="50%" pl={2}>
          <Text my="1px">Nombre del Peticionario: {nombrePeticionario}</Text>
          <Text my="1px">Tipo del Peticionario: {tipoPeticionario}</Text>
          <Text my="1px">
            Dirección del Peticionario: {direccionPeticionario}
          </Text>
          <Text my="1px">
            Teléfono del Peticionario: {telefonoPeticionario}
          </Text>
          <Text my="1px">Celular del Peticionario: {celularPeticionario}</Text>
          <Text my="1px">Correo del Peticionario: {correoPeticionario}</Text>
        </Box>
        <Flex flexDir="column"></Flex>
      </Flex>
      <Flex flexDir="column" minW="100%" my={3}>
        <Text fontSize="x" fontWeight="semibold">
          Traslados
        </Text>
      </Flex>
      <Flex flexDir="column" minW="100%">
        {traslados.map((traslado, index) => (
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
      <Flex flexDir="column" w="min-content" my={3} ml="auto">
        <NextLink
          href={{ pathname: '/actualizar', query: { id_tramite: id_t } }}
          passHref
        >
          <Button
            size="md"
            bgColor="rgb(123, 18, 46)"
            _hover={{ bgColor: 'rgba(172, 172, 178, 50%)' }}
            leftIcon={<Icon as={BiPencil} />}
          >
            Actualizar
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  )
}
