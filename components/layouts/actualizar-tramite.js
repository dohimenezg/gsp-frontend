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
  constructor(props) {
    super(props)
    this.state = {
      tramite: {},
      id_tramitante: '',
      dependencia_tramitante: '',
      fecha_traslado: '',
      options_tramitante: '',
      tramitantes: ''
    }
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

  componentDidMount() {
    this.fetchTramitantes()
    this.fetchData()
  }

  updateDependencia = value => {
    this.setDependenciaTramitante(
      this.state.tramitantes.find(x => x.id == value).dependencia_tramitante
    )
  }

  fetchTramitantes = async () => {
    let items = []
    await api
      .get('tramitantes/')
      .then(res => {
        this.setState({ tramitantes: res.data.tramitantes })
        for (let i = 0; i < res.data.tramitantes.length; i++) {
          items.push(
            <option key={i} value={res.data.tramitantes[i].id}>
              {res.data.tramitantes[i].nombre_tramitante}
            </option>
          )
        }
      })
      .catch(err => console.error(err))
    this.setState({ options_tramitante: items })
  }

  fetchData = async () => {
    const { id_tramite } = this.props
    api
      .get(`tramites/${id_tramite}`)
      .then(res => this.setState({ tramite: res.data }))
      .catch(err => console.error(err))
  }

  createTraslado = async () => {
    const { id_tramite } = this.props

    let obj = {
      fecha_traslado: this.state.fecha_traslado,
      id_tramite: id_tramite,
      id_tramitante: this.state.id_tramitante
    }
    try {
      let res = await api
        .post('traslados/', obj)
        .then(response => {
          alert('Trámite Actualizado')
          window.location.reload()
        })
        .catch(error => {
          alert('No es actualizar el trámite')
        })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.tramite.traslados)
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
            Actualización de Trámites
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
                onClick={this.createTraslado}
                _hover={{ bgColor: 'rgba(172, 172, 178, 50%)' }}
                disabled={
                  !this.state.id_tramitante ||
                  !this.state.dependencia_tramitante ||
                  !this.state.fecha_traslado
                }
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
              tipoPeticionario={
                tipos_peticinarios[this.state.tramite.tipo_peticionario]
              }
              direccionPeticionario={this.state.tramite.direccion_peticionario}
              telefonoPeticionario={this.state.tramite.telefono_peticionario}
              celularPeticionario={this.state.tramite.celular_peticionario}
              correoPeticionario={this.state.tramite.correo_peticionario}
              traslados={this.state.tramite.traslados}
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
                callbackUpdateDependencia={this.updateDependencia}
                dependenciaTramitanteValue={this.state.dependencia_tramitante}
                optionsTramitante={this.state.options_tramitante}
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
