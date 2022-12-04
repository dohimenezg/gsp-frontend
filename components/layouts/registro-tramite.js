import { 
    Box,
    FormControl,
    FormLabel,
    HStack, 
    Button,
    useRadioGroup,
    Heading, 
    Flex,
    Input,
    Select
} from '@chakra-ui/react';
import ButtomForm from '../buttom-form';

export default function RegistroTramite () {
    const options = ["Petición", "Queja", "Reclamo", "Sugerencia", "Felicitación"]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'pqrsf',
        defaultValue: 'Petición',
        onChange: console.log,
    })
  
    const group = getRootProps()

    return (
        <Box minHeight="100vh" minWidth="100vh" bgColor="rgb(20, 20, 30)" w="100%" color="#FFF">
            <Box m={4}>
                <Heading as="h3" size="lg" fontWeight="light">Registro de Trámites</Heading>
            </Box>
            <Box m={4}>
                <Flex flexDir="row" wrap="wrap">
                    <Flex>
                        <FormControl as="fieldset" p="2px" bgColor="#30303E" borderRadius="5px">
                            <HStack spacing="2px" {...group} wrap="wrap">
                                {
                                    options.map((value) => {
                                        const radio = getRadioProps({ value })
                                        return (
                                            <ButtomForm key={value} {...radio}>
                                            {value}
                                            </ButtomForm>
                                        )
                                    })
                                }
                            </HStack>
                        </FormControl>
                    </Flex>
                    <Flex ml="auto">
                        <Button m="auto" bgColor="rgb(123, 18, 46)" _hover={{bgColor:"rgba(172, 172, 178, 50%)"}}>Registrar Trámite</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box m={4}>
                <Flex flexDir="column">
                    {/* Información gestion trámite */}
                    <Flex>
                        <FormControl p={3} borderWidth='2px 2px 2px 2px' borderColor= '#30303E' borderRadius="5px 5px 0px 0px">
                            <FormLabel fontWeight="light">Información del Trámite</FormLabel>
                            <HStack spacing="30px">
                                <Input 
                                    placeholder="Radicación Número de Ventanilla Única"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                                <Input 
                                    placeholder="Fecha de Recepción"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                            </HStack>
                            <HStack spacing="30px">
                                <Input 
                                    placeholder="Asunto"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                                <Select
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                >
                                    <option value='WE'>Web</option>
                                    <option value='ES'>Escritorio</option>
                                </Select>
                            </HStack>
                        </FormControl>
                    </Flex>
                    {/* Informacipon del peticionario */}
                    <Flex>
                        <FormControl p={3} borderWidth='0px 2px 2px 2px' borderColor= '#30303E' borderRadius="0px 0px 0px 0px">
                            <FormLabel fontWeight="light">Información del Peticionario</FormLabel>
                            <HStack spacing="30px">
                                <Input 
                                    placeholder="Tipo de Peticionario"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                                <Input 
                                    placeholder="Celular"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                            </HStack>
                            <HStack spacing="30px">
                                <Input 
                                    placeholder="Nombre Completo"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                                <Input 
                                    placeholder="Teléfono"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                            </HStack>
                            <HStack spacing="30px">
                                <Input 
                                    placeholder="Dirección"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                                <Input 
                                    placeholder="Correo Electrónico"
                                    bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                    _placeholder={{color:"rgb(172, 172, 178)"}}
                                    borderColor="rgb(172, 172, 178)"
                                    mt="5px"
                                    mb="5px"
                                />
                            </HStack>
                        </FormControl>
                    </Flex>
                    {/* Información del detinatario */}
                    <Flex>
                        <FormControl p={3} borderWidth='0px 2px 2px 2px' borderColor= '#30303E' borderRadius="0px 0px 0px 2px">
                            <FormLabel fontWeight="light">Información del Destinatario</FormLabel>
                            <Input 
                                placeholder="Trasladado a"
                                bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                _placeholder={{color:"rgb(172, 172, 178)"}}
                                borderColor="rgb(172, 172, 178)"
                                mt="5px"
                                mb="5px"
                            />
                            <Input 
                                placeholder="Dependencia"
                                bgColor="rgb(48, 48, 62)" color="rgb(172, 172, 178)"
                                _placeholder={{color:"rgb(172, 172, 178)"}}
                                borderColor="rgb(172, 172, 178)"
                                mt="5px"
                                mb="5px"
                            />
                        </FormControl>
                        <FormControl p={3} borderWidth='0px 2px 2px 0px' borderColor= '#30303E' borderRadius="0px 0px 2px 0px">
                            <FormLabel fontWeight="light">Información del Oficio</FormLabel>
                        </FormControl>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}