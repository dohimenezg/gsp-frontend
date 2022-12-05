import { ChakraProvider } from '@chakra-ui/react'

function my_app({ Component, page_props, router }) {
  return (
    <ChakraProvider>
      <Component {...page_props} />
    </ChakraProvider>
  )
}

export default my_app
