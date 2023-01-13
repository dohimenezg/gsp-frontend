import {
  Flex,
  HStack,
  Heading,
  Center,
  Divider,
  Text,
  Progress
} from '@chakra-ui/react'

export default function TramiteItemTitle({
  numeroVentanilla,
  tipoTramite,
  fechaRecepcion,
  fechaVencimiento
}) {
  const start = new Date(fechaRecepcion)
  const end = new Date(fechaVencimiento)
  const today = new Date()

  const daysBetween = (date_1, date_2) => {
    console.log(date_1)
    console.log(date_2)
    const difference = date_1.getTime() - date_2.getTime()
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24))
    console.log(totalDays)
    return totalDays
  }

  const duracion = daysBetween(end, start)
  const value = daysBetween(today, start)

  const getColorscheme = () => {
    if (value <= 5) {
      return 'green'
    } else if (value <= 10) {
      return 'yellow'
    }
    return 'red'
  }

  return (
    <Flex flexDir="column" mx={4} my={3}>
      <HStack spacing="30px" my={2}>
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
      <Progress
        my={2}
        colorScheme={getColorscheme()}
        borderRadius={5}
        min={1}
        max={duracion}
        value={value}
      />
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
