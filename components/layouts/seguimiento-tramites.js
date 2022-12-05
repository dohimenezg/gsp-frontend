import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  FormControl,
  useRadioGroup
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
        <Flex flexDir="column" wrap="wrap">
          <Flex>
            {/* TODO */}
            <TramiteItem 
              title={
                <Text>Hello</Text>
              }
              content={
                <Text>Hello</Text>
              }
              color="rgb(20, 20, 30)"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
