import {
  Flex,
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

export default function TramiteItem({ title, content, color }) {
  return (
    <Flex flexDir="column" alignItems="flex-start" w="100%">
      <Accordion defaultIndex={[0]} allowMultiple w="100%">
        <AccordionItem
          borderWidth="2px 2px 2px 2px"
          borderRadius="5px"
          borderColor="#30303E"
          bgColor={color}
        >
          <h2>
            <AccordionButton
              _hover={{ backgroundColor: 'rgba(172, 172, 178, 50%)' }}
            >
              <Box flex="1" textAlign="left">
                {/* Nota: en esta parte no se le agrega padding o margin */}
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* Nota: en esta parte se usa el padding para separarlo*/}
            {content}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}
