import { FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

class OficioInfo extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
  }

  render() {
    return (
      <FormControl>
        <FormLabel fontWeight="light">Información del Oficio</FormLabel>
      </FormControl>
    )
  }
}

export default OficioInfo
