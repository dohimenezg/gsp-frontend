import { Box, Heading, Flex, Accordion } from '@chakra-ui/react'
import { Component } from 'react'
import TramiteItem from '../tramite-item'
import axios from 'axios'
import TramiteItemTitle from '../tramite-item-title'
import TramiteItemContent from '../tramite-item-content'
import ButtonPicker from '../button-picker'

const api = axios.create({
  baseURL: `http://localhost:8000/`
})

class SeguimientoTramites extends Component {
  state = {
    tramites: [],
    pickerOption: 'Todos'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tramites !== this.state.tramites
  }

  constructor() {
    super()
  }

  setPickerOption = value => {
    const options = {
      T: 'Todos',
      E: 'EnProceso',
      C: 'CercaAVencer',
      V: 'Vencidos'
    }
    this.setState({ pickerOption: options[value] })
  }

  getTramites = async () => {
    try {
      api.get('tramite/').then(res => {
        this.setState({ tramites: res.data.tramites })
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTramites()
  }

  render() {
    const options = ['Todos', 'En Proceso', 'Cerca a Vencer', 'Vencidos']

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
            Seguimiento de Trámites
          </Heading>
        </Box>
        <Box m={4}>
          <ButtonPicker
            options={options}
            name={'estado'}
            defaultValue={'Todos'}
            callback={this.setPickerOption}
          />
        </Box>
        <Box m={4}>
          <Flex flexDir="column" wrap="wrap" minW="100%">
            <Flex w="100%" minW="100%">
              <Accordion w="100%" minW="100%" allowToggle>
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
                        id_t={tramite.id}
                        asuntoTramite={tramite.asunto_tramite}
                        medioRecepcion={tipos_medios[tramite.medio_recepcion]}
                        numeroOficio={tramite.numero_oficio}
                        oficioRespuesta={tramite.oficio_respuesta}
                        fechaRespuesta={tramite.fecha_respuesta}
                        nombrePeticionario={tramite.nombre_peticionario}
                        tipoPeticionario={
                          tipos_peticinarios[tramite.tipo_peticionario]
                        }
                        direccionPeticionario={tramite.direccion_peticionario}
                        telefonoPeticionario={tramite.telefono_peticionario}
                        celularPeticionario={tramite.celular_peticionario}
                        correoPeticionario={tramite.correo_peticionario}
                        traslados={tramite.traslados}
                      />
                    }
                    color="rgb(20, 20, 30)"
                  />
                ))}
              </Accordion>
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default SeguimientoTramites
