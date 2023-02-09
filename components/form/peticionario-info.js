import { FormControl, FormLabel, HStack, Input, Select } from '@chakra-ui/react'

import React from 'react'

class PeticionarioInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.isValidEmail !== this.props.isValidEmail
  }

  render() {
    return (
      <FormControl>
        <FormLabel fontWeight="light">Información del Peticionario</FormLabel>
        <HStack spacing="30px">
          <Select
            bgColor="rgb(48, 48, 62)"
            defaultValue=""
            color="rgb(172, 172, 178)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            w="50%"
            onChange={e => this.props.callbackTipoPeticionario(e.target.value)}
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
            my="5px"
            w="50%"
            onChange={e =>
              this.props.callbackCelularPeticionario(e.target.value)
            }
          />
        </HStack>
        <HStack spacing="30px">
          <Input
            placeholder="Nombre Completo"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            onChange={e =>
              this.props.callbackNombrePeticionario(e.target.value)
            }
          />
          <Input
            placeholder="Teléfono"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            onChange={e =>
              this.props.callbackTelefonoPeticionario(e.target.value)
            }
          />
        </HStack>
        <HStack spacing="30px">
          <Input
            placeholder="Dirección"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{ color: 'rgb(172, 172, 178)' }}
            borderColor="rgb(172, 172, 178)"
            my="5px"
            onChange={e =>
              this.props.callbackDireccionPeticionario(e.target.value)
            }
          />
          <Input
            placeholder="Correo Electrónico"
            bgColor="rgb(48, 48, 62)"
            color="rgb(255, 255, 255)"
            _placeholder={{
              color: 'rgb(172, 172, 178)',
              borderColor: this.props.isValidEmail
                ? 'rgb(172, 172, 178)'
                : 'rgb(255, 0, 0)'
            }}
            borderColor={
              this.props.isValidEmail ? 'rgb(172, 172, 178)' : 'rgb(255, 0, 0)'
            }
            my="5px"
            type="email"
            onChange={e =>
              this.props.callbackCorreoPeticionario(e.target.value)
            }
          />
        </HStack>
      </FormControl>
    )
  }
}

export default PeticionarioInfo
