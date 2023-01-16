import {
  Box,
  Heading,
  Flex,
  FormControl,
  useRadioGroup,
  Accordion
} from '@chakra-ui/react'
import ButtonForm from '../button-form'
import { Component, useState } from 'react'
import TramiteItem from '../tramite-item'
import axios from 'axios'
import TramiteItemTitle from '../tramite-item-title'
import TramiteItemContent from '../tramite-item-content'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

class SeguimientoTramites extends Component {
  state = {
    tramites: [],
    tramitantes: [],
    traslados: []
  }

  constructor() {
    super()
  }

  getTramites = async () => {
    try {
      api.get('tramites/').then(res => {
        this.setState({ tramites: res.data.tramites })
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTramitantes = async () => {
    try {
      api.get('tramitantes/').then(res => {
        this.setState({ tramitantes: res.data.tramitantes })
      })
    } catch (error) {
      console.log(error)
    }
  }

  getTraslados = async () => {
    try {
      api.get('traslados/').then(res => {
        this.setState({ traslados: res.data.traslados })
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTramites()
    this.getTraslados()
    this.getTramitantes()
  }

  //TODO: Pasar estas consultas al backend

  findDependencia(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined') {
      dep = ''
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).id_tramitante
      dep = this.state.tramitantes.find(x => x.id == dep).dependencia_tramitante
    }
    return dep
  }

  findTramitante(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined') {
      dep = ''
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).id_tramitante
      dep = this.state.tramitantes.find(x => x.id == dep).nombre_tramitante
    }
    return dep
  }

  findTraslado(id) {
    let dep = this.state.traslados.find(x => x.id_tramite == id)
    if (typeof dep == 'undefined') {
      dep = ''
    } else {
      dep = this.state.traslados.find(x => x.id_tramite == id).fecha_traslado
    }
    return dep
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
    console.log(this.state.tramites)
    const traslados = [
      {
        dependenciaTramitante: 'Dependencia tramitante 1',
        tramitante: 'Tramitante 1',
        fechaTraslado: 'Fecha traslado 1'
      },
      {
        dependenciaTramitante: 'Dependencia tramitante 2',
        tramitante: 'Tramitante 2',
        fechaTraslado: 'Fecha traslado 2'
      },
      {
        dependenciaTramitante: 'Dependencia tramitante 3',
        tramitante: 'Tramitante 3',
        fechaTraslado: 'Fecha traslado 3'
      },
      {
        dependenciaTramitante: 'Dependencia tramitante 4',
        tramitante: 'Tramitante 4',
        fechaTraslado: 'Fecha traslado 4'
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
            Seguimiento de Trámites
          </Heading>
        </Box>
        <Box m={4}>
          <Flex flexDir="column" wrap="wrap">
            <Flex>{/* TODO */}</Flex>
          </Flex>
        </Box>
        <Box m={4}>
          <Flex flexDir="column" wrap="wrap" minW="100%">
            <Flex w="100%" minW="100%">
              <Accordion w="100%" minW="100%" allowToggle>
                <TramiteItem
                  key={'tramite.id'}
                  title={
                    <TramiteItemTitle
                      numeroVentanilla={'tramite.numero_ventanilla'}
                      tipoTramite={'tipos_tramites[tramite.tipo_tramite]'}
                      fechaRecepcion={'tramite.fecha_recepcion'}
                      fechaVencimiento={'tramite.fecha_vencimiento'}
                    />
                  }
                  content={
                    <TramiteItemContent
                      asuntoTramite={'tramite.asunto_tramite'}
                      medioRecepcion={'tipos_medios[tramite.medio_recepcion]'}
                      numeroOficio={'tramite.numero_oficio'}
                      oficioRespuesta={'tramite.oficio_respuesta'}
                      fechaRespuesta={'tramite.fecha_respuesta'}
                      nombrePeticionario={'tramite.nombre_peticionario'}
                      tipoPeticionario={
                        'tipos_peticinarios[tramite.tipo_peticionario]'
                      }
                      direccionPeticionario={'tramite.direccion_peticionario'}
                      telefonoPeticionario={'tramite.telefono_peticionario'}
                      celularPeticionario={'tramite.celular_peticionario'}
                      correoPeticionario={'tramite.correo_peticionario'}
                      traslados={traslados}
                    />
                  }
                  color="rgb(20, 20, 30)"
                />
                {/* 
                ----------------------------------------------------------------
                {this.state.tramites.map(tramite => (
                  <TramiteItem
                    key={tramite.id}
                    title={
                      <TramiteItemTitle
                        numeroVentanilla={tramite.numero_ventanilla}
                        tipoTramite={tipos_tramites[tramite.tipo_tramite]}
                        fechaRecepcion={tramite.fecha_recepcion}
                        fechaVencimiento={tramite.fecha_vencimiento}
                      />
                    }
                    content={
                      <TramiteItemContent
                        asuntoTramite={tramite.asunto_tramite}
                        medioRecepcion={tipos_medios[tramite.medio_recepcion]}
                        numeroOficio={tramite.numero_oficio}
                        oficioRespuesta={tramite.oficio_respuesta}
                        fechaRespuesta={tramite.fecha_respuesta}
                        nombrePeticionario={tramite.nombre_peticionario}
                        tipoPeticionario={tipos_peticinarios[tramite.tipo_peticionario]}
                        direccionPeticionario={tramite.direccion_peticionario}
                        telefonoPeticionario={tramite.telefono_peticionario}
                        celularPeticionario={tramite.celular_peticionario}
                        correoPeticionario={tramite.correo_peticionario}
                        traslados={ TODO: traslados}
                      />
                    }
                    color="rgb(20, 20, 30)"
                  />
                ))}
                ----------------------------------------------------------------
                 */}
              </Accordion>
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default SeguimientoTramites
