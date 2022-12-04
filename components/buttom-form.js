import { useRadio, Box } from '@chakra-ui/react';

export default function ButtomForm (props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    const filterPressed = () => {
        props.callback(props.text)
    }

    return (
        <Box as='label'>
            <input onClick={filterPressed} {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                borderColor= '#30303E'
                boxShadow='md'
                _checked={{
                    bg: "rgb(20, 20, 30)",
                    color: '#FFF',
                    borderColor: '#30303E',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                _hover={{
                    bg: "rgb(20, 20, 30)",
                }}
                px="30px"
                py="6px"
            >
                {props.children}
            </Box>
        </Box>
    )
}