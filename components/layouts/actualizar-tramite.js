import { Text, Box, Flex, Heading, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import TramiteCard from '../tramite-card'
import DestinatarioFormUpdate from '../form/destinatario-info-update'
import OficioInfo from '../form/oficio-info'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

class ActualizarTramite extends React.Component {
  state = {
    id_tramitante: '',
    dependencia_tramitante: '',
    fecha_traslado: ''
  }

  setIdTramitante = value => {
    this.setState({ id_tramitante: value })
  }

  setDependenciaTramitante = value => {
    this.setState({ dependencia_tramitante: value })
  }

  setFechaTraslado = value => {
    this.setState({ fecha_traslado: value })
  }

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id
  }

  render() {
    const traslados = [
      {
        id_tramitante: {
          dependencia_tramitante: 'ads',
          nombre_tramitante: 'adsdsa'
        },
        fecha_traslado: 'poiíer'
      },
      {
        id_tramitante: {
          dependencia_tramitante: 'ads',
          nombre_tramitante: 'adsdsa'
        },
        fecha_traslado: 'poiíer'
      },
      {
        id_tramitante: {
          dependencia_tramitante: 'ads',
          nombre_tramitante: 'adsdsa'
        },
        fecha_traslado: 'poiíer'
      }
    ]
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
            Actualización de Trámites {this.props.id}
          </Heading>
          <Flex
            flexDir="column"
            p={3}
            borderWidth="2px"
            borderColor="#30303E"
            borderRadius="5px 5px 0px 0px"
            mt={4}
          >
            <Flex justifyContent="space-between" mb={4}>
              <Text>Información del trámite</Text>
              <Button
                ml="auto"
                mr={2}
                bgColor="rgb(123, 18, 46)"
                onClick={console.log('TODO')}
                _hover={{ bgColor: 'rgba(172, 172, 178, 50%)' }}
              >
                Actualizar Trámite
              </Button>
            </Flex>
            <TramiteCard
              numeroVentanilla={'tramite.numero_ventanilla'}
              tipoTramite={'tipos_tramites[tramite.tipo_tramite]'}
              fechaRecepcion={'tramite.fecha_recepcion'}
              fechaVencimiento={'tramite.fecha_vencimiento'}
              asuntoTramite={'tramite.asunto_tramite'}
              medioRecepcion={'tipos_medios[tramite.medio_recepcion]'}
              numeroOficio={'tramite.numero_oficio'}
              oficioRespuesta={'tramite.oficio_respuesta'}
              fechaRespuesta={'tramite.fecha_respuesta'}
              nombrePeticionario={'tramite.nombre_peticionario'}
              tipoPeticionario={'tipos_peticinarios[tramite.tipo_peticionario]'}
              direccionPeticionario={'tramite.direccion_peticionario'}
              telefonoPeticionario={'tramite.telefono_peticionario'}
              celularPeticionario={'tramite.celular_peticionario'}
              correoPeticionario={'tramite.correo_peticionario'}
              traslados={traslados}
            />
          </Flex>
          <Flex flexDir="row">
            <Flex
              flexDir="column"
              p={3}
              borderWidth="0px 2px 2px 2px"
              borderColor="#30303E"
              borderRadius="0px 0px 0px 2px"
              minW="50%"
            >
              <DestinatarioFormUpdate
                callbackFechaTraslado={this.setFechaTraslado}
                callbackIdTramitante={this.setIdTramitante}
                callbackUpdateDependencia={this.setDependenciaTramitante}
                dependenciaTramitanteValue={this.state.dependencia_tramitante}
                optionsTramitante={this.optionsTramitante}
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
        </Box>
      </Box>
    )
  }
}

export default ActualizarTramite
