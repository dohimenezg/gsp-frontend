import {
  Flex,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import React from 'react'

class TramiteItem extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.title !== this.props.title ||
      nextProps.content !== this.props.content
    )
  }

  render() {
    return (
      <Flex flexDir="column" alignItems="flex-start" w="100%" mb={3}>
        <AccordionItem
          borderWidth="2px 2px 2px 2px"
          borderRadius="5px"
          borderColor="#30303E"
          bgColor={this.props.color}
          minW="100%"
        >
          <h2>
            <AccordionButton
              _hover={{ backgroundColor: 'rgba(172, 172, 178, 50%)' }}
            >
              <Box flex="1" textAlign="left">
                {/* Nota: en esta parte no se le agrega padding o margin */}
                {this.props.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* Nota: en esta parte se usa el padding para separarlo*/}
            {this.props.content}
          </AccordionPanel>
        </AccordionItem>
      </Flex>
    )
  }
}

export default TramiteItem
