import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText
} from '@chakra-ui/react'
import React from 'react'

class DestinatarioFormUpdate extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.dependenciaTramitanteValue !==
        this.props.dependenciaTramitanteValue ||
      nextProps.optionsTramitante !== this.props.optionsTramitante
    )
  }

  render() {
    return (
      <FormControl>
        <FormLabel fontWeight="light">Información del Destinatario</FormLabel>
        <Select
          bgColor="rgb(48, 48, 62)"
          defaultValue=""
          color="rgb(172, 172, 178)"
          _placeholder={{ color: 'rgb(172, 172, 178)' }}
          borderColor="rgb(172, 172, 178)"
          my="5px"
          onChange={e => {
            this.props.callbackIdTramitante(e.target.value)
            this.props.callbackUpdateDependencia(e.target.value)
          }}
        >
          <option disabled value="">
            --Trasladado a--
          </option>
          {this.props.optionsTramitante}
        </Select>
        <Input
          disabled
          placeholder="Dependencia"
          value={this.props.dependenciaTramitanteValue}
          bgColor="rgb(48, 48, 62)"
          color="rgb(255, 255, 255)"
          _placeholder={{ color: 'rgb(172, 172, 178)' }}
          borderColor="rgb(172, 172, 178)"
          my="5px"
        />
        <FormHelperText color="white">Fecha de Traslado</FormHelperText>
        <Input
          placeholder="Fecha de Traslado"
          bgColor="rgb(48, 48, 62)"
          color="rgb(255, 255, 255)"
          _placeholder={{ color: 'rgb(172, 172, 178)' }}
          borderColor="rgb(172, 172, 178)"
          my="5px"
          type="date"
          onChange={e => this.props.callbackFechaTraslado(e.target.value)}
        />
      </FormControl>
    )
  }
}

export default DestinatarioFormUpdate
