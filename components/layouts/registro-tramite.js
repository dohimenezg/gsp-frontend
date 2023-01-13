import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Button,
  useRadioGroup,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ButtonForm from '../button-form'
import axios from 'axios'
import PeticionarioInfo from '../form/peticionario-info'
import DestinatarioForm from '../form/destinatario-info'
import TramiteInfo from '../form/tramite-info'
import OficioInfo from '../form/oficio-info'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

export default function RegistroTramite() {
  const options = ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Felicitación']
  const [tramitantes, setTramitantes] = useState([])
  const [optionsTramitante, setOptionsTramitante] = useState([])
  const [idTramitante, setIdTramitante] = useState(0)
  const [dependenciaTramitante, setDependenciaTramitante] =
    useState('Dependencia')

  const [numeroVentanilla, setNumeroVentanilla] = useState('')
  const [tipoTramite, setTipoTramite] = useState('P')
  const [asuntoTramite, setAsuntoTramite] = useState('')
  const [medioRecepcion, setMedioRecepcion] = useState('WE')
  const [fechaRecepcion, setFechaRecepcion] = useState('')

  const [nombrePeticionario, setNombrePeticionario] = useState('')
  const [tipoPeticionario, setTipoPeticionario] = useState('EXT')
  const [direccionPeticionario, setDireccionPeticionario] = useState('')
  const [telefonoPeticionario, setTelefonoPeticionario] = useState('')
  const [celularPeticionario, setCelularPeticionario] = useState('')
  const [correoPeticionario, setCorreoPeticionario] = useState('')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pqrsf',
    defaultValue: 'Petición'
  })

  const group = getRootProps()

  const updateDependencia = value => {
    setDependenciaTramitante(
      tramitantes.find(x => x.id == value).dependenciaTramitante
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

  const updateTipoTramite = datos => {
    setTipoTramite(datos)
  }

  const createTramite = async () => {
    let id_tramite = 0
    try {
      let res = await api.post('tramites/', {
        numeroVentanilla,
        tipoTramite,
        asuntoTramite,
        medioRecepcion,
        fechaRecepcion,
        fechaRecepcion,
        nombrePeticionario,
        tipoPeticionario,
        direccionPeticionario,
        telefonoPeticionario,
        celularPeticionario,
        correoPeticionario
      })
      id_tramite = res.data.id
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    let obj = {
      fecha_traslado: fechaRecepcion,
      id_tramite: id_tramite,
      idTramitante: idTramitante
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
                    <ButtonForm
                      key={value}
                      text={value[0]}
                      callback={updateTipoTramite}
                      {...radio}
                    >
                      {value}
                    </ButtonForm>
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
                !numeroVentanilla ||
                !tipoTramite ||
                !asuntoTramite ||
                !medioRecepcion ||
                !fechaRecepcion ||
                !fechaRecepcion ||
                !nombrePeticionario ||
                !tipoPeticionario ||
                !direccionPeticionario ||
                !telefonoPeticionario ||
                !celularPeticionario ||
                !correoPeticionario ||
                !idTramitante
              }
            >
              Registrar Trámite
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box m={4}>
        <Flex flexDir="column">
          <Flex
            p={3}
            borderWidth="2px"
            borderColor="#30303E"
            borderRadius="5px 5px 0px 0px"
          >
            <TramiteInfo
              callbackNumeroVentanilla={setNumeroVentanilla}
              callbackFechaRecepcion={setFechaRecepcion}
              callbackAsuntoTramite={setAsuntoTramite}
              callbackMedioRecepcion={setMedioRecepcion}
            />
          </Flex>

          <Flex
            p={3}
            borderWidth="0px 2px 2px 2px"
            borderColor="#30303E"
            borderRadius="0px 0px 0px 0px"
          >
            <PeticionarioInfo
              callbackCorreoPeticionario={setCorreoPeticionario}
              callbackDireccionPeticionario={setDireccionPeticionario}
              callbackTelefonoPeticionario={setTelefonoPeticionario}
              callbackNombrePeticionario={setNombrePeticionario}
              callbackCelularPeticionario={setCelularPeticionario}
              callbackTipoPeticionario={setTipoPeticionario}
            />
          </Flex>

          <Flex minW="100%" flexDir="row">
            <Flex
              p={3}
              borderWidth="0px 2px 2px 2px"
              borderColor="#30303E"
              borderRadius="0px 0px 0px 2px"
              minW="50%"
            >
              <DestinatarioForm
                key={optionsTramitante}
                dependenciaTramitanteValue={dependenciaTramitante}
                callbackIdTramitante={setIdTramitante}
                callbackUpdateDependencia={updateDependencia}
                optionsTramitante={optionsTramitante}
              />
            </Flex>
            <Flex
              p={3}
              borderWidth="0px 2px 2px 0px"
              borderColor="#30303E"
              borderRadius="0px 0px 2px 0px"
              minW="50%"
            >
              <OficioInfo />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
