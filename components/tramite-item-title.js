import { Flex, HStack, Heading, Center, Divider, Text } from '@chakra-ui/react'

export default function TramiteItemTitle({
  numeroVentanilla,
  tipoTramite,
  fechaRecepcion,
  fechaVencimiento
}) {
  return (
    <Flex flexDir="column" ml={4} mr={4} mt={3} mb={3}>
      <HStack spacing="30px" mb={2}>
        <Heading as="h2" fontSize="x" fontWeight="semibold">
          Radicado: {numeroVentanilla}
        </Heading>
        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>
        <Heading as="h2" fontSize="x" fontWeight="normal">
          Tipo PQRSF: {tipoTramite}
        </Heading>
      </HStack>
      <HStack spacing="30px" justifyContent="space-between" flexDir="row">
        <Flex flexDir="column">
          <Heading as="h2" fontSize="x" fontWeight="normal">
            Fecha de Recepción
          </Heading>
          <Text>{fechaRecepcion}</Text>
        </Flex>
        <Flex flexDir="column">
          <Heading as="h2" fontSize="x" fontWeight="normal">
            Fecha de Vencimiento
          </Heading>
          <Text>{fechaVencimiento}</Text>
        </Flex>
      </HStack>
    </Flex>
  )
}
