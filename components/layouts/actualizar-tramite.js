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
    tramite: {},
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

  getTramite () {
    try {
      api.get(`tramites/${this.props.id_tramite}`).then(res => {
        this.setState({ tramite: res.data })
      })
    } catch (error) {
      console.log(error)
    }
  }


  componentDidMount() {
    console.log(this.props);
    this.getTramite()
  }

  render() {
    const tipos_tramites = {
      P: 'Petición',
      Q: 'Queja',
      R: 'Reclamo',
      S: 'Sugerencia',
      F: 'Felicitación'
    }
    const tipos_medios = {
      WE: 'Web',
      ES: 'Escrito'
    }

    const tipos_peticinarios = {
      PRE: 'Estudiante de Pregrado',
      POS: 'Estudiante de Posgrado',
      EMP: 'Empleado',
      DOC: 'Docente',
      EGR: 'Egresado',
      JUB: 'Jubilado',
      EXT: 'Persona Externa'
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
              numeroVentanilla={this.state.tramite.numero_ventanilla}
              tipoTramite={tipos_tramites[this.state.tramite.tipo_tramite]}
              fechaRecepcion={this.state.tramite.fecha_recepcion}
              fechaVencimiento={this.state.tramite.fecha_vencimiento}
              asuntoTramite={this.state.tramite.asunto_tramite}
              medioRecepcion={tipos_medios[this.state.tramite.medio_recepcion]}
              numeroOficio={this.state.tramite.numero_oficio}
              oficioRespuesta={this.state.tramite.oficio_respuesta}
              fechaRespuesta={this.state.tramite.fecha_respuesta}
              nombrePeticionario={this.state.tramite.nombre_peticionario}
              tipoPeticionario={tipos_peticinarios[this.state.tramite.tipo_peticionario]}
              direccionPeticionario={this.state.tramite.direccion_peticionario}
              telefonoPeticionario={this.state.tramite.telefono_peticionario}
              celularPeticionario={this.state.tramite.celular_peticionario}
              correoPeticionario={this.state.tramite.correo_peticionario}
              traslados={[]}
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
