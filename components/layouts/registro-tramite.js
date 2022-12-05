import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Button,
  useRadioGroup,
  Heading,
  Flex,
  Input,
  Select
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ButtomForm from '../buttom-form'
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

export default function RegistroTramite() {
  const options = ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Felicitación']
  const [tramitantes, setTramitantes] = useState([])
  const [optionsTramitante, setOptionsTramitante] = useState([])
  const [id_tramitante, set_id_tramitante] = useState(0)
  const [dependencia_tramitante, set_dependencia_tramitante] =
    useState('Dependencia')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pqrsf',
    defaultValue: 'Petición'
  })

  const group = getRootProps()

  const updateDependencia = value => {
    set_dependencia_tramitante(
      tramitantes.find(x => x.id == value).dependencia_tramitante
    )
  }

  const fetchData = async () => {
    let items = []
    try {
      await api.get('tramitantes/').then(res => {
        setTramitantes(res.data.tramitantes)
        for (let i = 0; i < res.data.tramitantes.length; i++) {
          items.push(
            <option key={i} value={res.data.tramitantes[i].id}>
              {res.data.tramitantes[i].nombre_tramitante}
            </option>
          )
        }
      })
    } catch (error) {
      console.log(error)
    }
    setOptionsTramitante(items)
  }

  const [numero_ventanilla, set_numero_ventanilla] = useState('')
  const [tipo_tramite, set_tipo_tramite] = useState('P')
  const [asunto_tramite, set_asunto_tramite] = useState('')
  const [medio_recepcion, set_medio_recepcion] = useState('WE')
  const [fecha_recepcion, set_fecha_recepcion] = useState('')

  const [nombre_peticionario, set_nombre_peticionario] = useState('')
  const [tipo_peticionario, set_tipo_peticionario] = useState('EXT')
  const [direccion_peticionario, set_direccion_peticionario] = useState('')
  const [telefono_peticionario, set_telefono_peticionario] = useState('')
  const [celular_peticionario, set_celular_peticionario] = useState('')
  const [correo_peticionario, set_correo_peticionario] = useState('')

  const updateTipoTramite = datos => {
    set_tipo_tramite(datos)
  }

  const createTramite = async () => {
    let id_tramite = 0
    try {
      let res = await api.post('tramites/', {
        numero_ventanilla,
        tipo_tramite,
        asunto_tramite,
        medio_recepcion,
        fecha_recepcion,
        fecha_recepcion,
        nombre_peticionario,
        tipo_peticionario,
        direccion_peticionario,
        telefono_peticionario,
        celular_peticionario,
        correo_peticionario
      })
      id_tramite = res.data.id
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    let obj = {
      fecha_traslado: fecha_recepcion,
      id_tramite: id_tramite,
      id_tramitante: id_tramitante
    }
    try {
      let res = await api.post('traslados/', obj)
      console.log(res)
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
          Registro de Trámites
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
                      text={value[0]}
                      callback={updateTipoTramite}
                      {...radio}
                    >
                      {value}
                    </ButtomForm>
                  )
                })}
              </HStack>
            </FormControl>
          </Flex>
          <Flex ml="auto">
            <Button
              m="auto"
              bgColor="rgb(123, 18, 46)"
              onClick={createTramite}
              _hover={{ bgColor: 'rgba(172, 172, 178, 50%)' }}
              disabled={
                !numero_ventanilla ||
                !tipo_tramite ||
                !asunto_tramite ||
                !medio_recepcion ||
                !fecha_recepcion ||
                !fecha_recepcion ||
                !nombre_peticionario ||
                !tipo_peticionario ||
                !direccion_peticionario ||
                !telefono_peticionario ||
                !celular_peticionario ||
                !correo_peticionario
              }
            >
              Registrar Trámite
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box m={4}>
        <Flex flexDir="column">
          {/* Información gestion trámite */}
          <Flex>
            <FormControl
              p={3}
              borderWidth="2px 2px 2px 2px"
              borderColor="#30303E"
              borderRadius="5px 5px 0px 0px"
            >
              <FormLabel fontWeight="light">Información del Trámite</FormLabel>
              <HStack spacing="30px">
                <Input
                  placeholder="Radicación Número de Ventanilla Única"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_numero_ventanilla(e.target.value)}
                />
                <Input
                  placeholder="Fecha de Recepción"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_fecha_recepcion(e.target.value)}
                />
              </HStack>
              <HStack spacing="30px">
                <Input
                  placeholder="Asunto"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_asunto_tramite(e.target.value)}
                />
                <Select
                  bgColor="rgb(48, 48, 62)"
                  defaultValue=""
                  color="rgb(172, 172, 178)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_medio_recepcion(e.target.value)}
                >
                  <option disabled value="">
                    --Medio de Recepción--
                  </option>
                  <option value="WE">Web</option>
                  <option value="ES">Escritorio</option>
                </Select>
              </HStack>
            </FormControl>
          </Flex>
          {/* Informacipon del peticionario */}
          <Flex>
            <FormControl
              p={3}
              borderWidth="0px 2px 2px 2px"
              borderColor="#30303E"
              borderRadius="0px 0px 0px 0px"
            >
              <FormLabel fontWeight="light">
                Información del Peticionario
              </FormLabel>
              <HStack spacing="30px">
                <Select
                  bgColor="rgb(48, 48, 62)"
                  defaultValue=""
                  color="rgb(172, 172, 178)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_tipo_peticionario(e.target.value)}
                >
                  <option disabled value="">
                    --Tipo de Peticionario--
                  </option>
                  <option value="PRE">Estudiante de Pregrado</option>
                  <option value="POS">Estudiante de Posgrado</option>
                  <option value="EMP">Empleado</option>
                  <option value="DOC">Docente</option>
                  <option value="EGR">Egresado</option>
                  <option value="JUB">Jubilado</option>
                  <option value="EXT">Persona Externa</option>
                </Select>
                <Input
                  placeholder="Celular"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_celular_peticionario(e.target.value)}
                />
              </HStack>
              <HStack spacing="30px">
                <Input
                  placeholder="Nombre Completo"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_nombre_peticionario(e.target.value)}
                />
                <Input
                  placeholder="Teléfono"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_telefono_peticionario(e.target.value)}
                />
              </HStack>
              <HStack spacing="30px">
                <Input
                  placeholder="Dirección"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_direccion_peticionario(e.target.value)}
                />
                <Input
                  placeholder="Correo Electrónico"
                  bgColor="rgb(48, 48, 62)"
                  color="rgb(255, 255, 255)"
                  _placeholder={{ color: 'rgb(172, 172, 178)' }}
                  borderColor="rgb(172, 172, 178)"
                  mt="5px"
                  mb="5px"
                  onChange={e => set_correo_peticionario(e.target.value)}
                />
              </HStack>
            </FormControl>
          </Flex>
          {/* Información del detinatario */}
          <Flex>
            <FormControl
              p={3}
              borderWidth="0px 2px 2px 2px"
              borderColor="#30303E"
              borderRadius="0px 0px 0px 2px"
            >
              <FormLabel fontWeight="light">
                Información del Destinatario
              </FormLabel>
              <Input
                disabled
                placeholder="Dependencia"
                value={dependencia_tramitante}
                bgColor="rgb(48, 48, 62)"
                color="rgb(255, 255, 255)"
                _placeholder={{ color: 'rgb(172, 172, 178)' }}
                borderColor="rgb(172, 172, 178)"
                mt="5px"
                mb="5px"
              />
              <Select
                bgColor="rgb(48, 48, 62)"
                defaultValue=""
                color="rgb(172, 172, 178)"
                _placeholder={{ color: 'rgb(172, 172, 178)' }}
                borderColor="rgb(172, 172, 178)"
                mt="5px"
                mb="5px"
                onChange={e => {
                  set_id_tramitante(e.target.value)
                  updateDependencia(e.target.value)
                }}
              >
                <option disabled value="">
                  --Trasladado a--
                </option>
                {optionsTramitante}
              </Select>
            </FormControl>
            <FormControl
              p={3}
              borderWidth="0px 2px 2px 0px"
              borderColor="#30303E"
              borderRadius="0px 0px 2px 0px"
            >
              <FormLabel fontWeight="light">Información del Oficio</FormLabel>
            </FormControl>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
