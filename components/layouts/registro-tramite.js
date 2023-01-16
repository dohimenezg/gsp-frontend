import { Box, Button, Heading, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PeticionarioInfo from '../form/peticionario-info'
import DestinatarioForm from '../form/destinatario-info'
import TramiteInfo from '../form/tramite-info'
import OficioInfo from '../form/oficio-info'
import ButtonPicker from '../button-picker'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

export default function RegistroTramite() {
  const options = ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Felicitación']
  
  const [tramitantes, setTramitantes] = useState([])
  const [options_tramitante, setOptionsTramitante] = useState([])
  const [id_tramitante, setIdTramitante] = useState(0)
  const [dependencia_tramitante, setDependenciaTramitante] = useState('Dependencia')

  const [numero_ventanilla, setNumeroVentanilla] = useState('')
  const [tipo_tramite, setTipoTramite] = useState('P')
  const [asunto_tramite, setAsuntoTramite] = useState('')
  const [medio_recepcion, setMedioRecepcion] = useState('WE')
  const [fecha_recepcion, setFechaRecepcion] = useState('')

  const [nombre_peticionario, setNombrePeticionario] = useState('')
  const [tipo_peticionario, setTipoPeticionario] = useState('EXT')
  const [direccion_peticionario, setDireccionPeticionario] = useState('')
  const [telefono_peticionario, setTelefonoPeticionario] = useState('')
  const [celular_peticionario, setCelularPeticionario] = useState('')
  const [correo_peticionario, setCorreoPeticionario] = useState('')

  const updateDependencia = value => {
    setDependenciaTramitante(
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

  const updateTipoTramite = datos => {
    setTipoTramite(datos)
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
          <ButtonPicker
            options={options}
            name={'pqrsf'}
            defaultValue={'Petición'}
            callback={updateTipoTramite}
          />
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
                !correo_peticionario ||
                !id_tramitante
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
                key={options_tramitante}
                dependenciaTramitanteValue={dependencia_tramitante}
                callbackIdTramitante={setIdTramitante}
                callbackUpdateDependencia={updateDependencia}
                optionsTramitante={options_tramitante}
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
