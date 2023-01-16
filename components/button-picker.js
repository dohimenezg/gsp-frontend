import { FormControl, HStack, useRadioGroup, Flex } from '@chakra-ui/react'
import React from 'react'
import ButtonForm from './button-form'

function ButtonPicker({ name, defaultValue, options, callback }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue
  })

  const group = getRootProps()
  console.log("Bad render from ButtonPicker")

  return (
    <Flex w="max-content">
      <FormControl as="fieldset" p="2px" bgColor="#30303E" borderRadius="5px">
        <HStack spacing="2px" {...group} wrap="wrap">
          {options.map(value => {
            const radio = getRadioProps({ value })
            return (
              <ButtonForm
                key={value}
                text={value[0]}
                callback={callback}
                {...radio}
              >
                {value}
              </ButtonForm>
            )
          })}
        </HStack>
      </FormControl>
    </Flex>
  )
}

export default ButtonPicker
