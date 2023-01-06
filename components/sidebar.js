import { Flex, Heading, Image } from '@chakra-ui/react'
import NavItem from './nav-item'

export default function Sidebar({ top, options, bottom }) {
  return (
    <Flex
      pos="sticky"
      p="0px"
      minH="100vh"
      margin="0px"
      flex="0 0 250px"
      flexDir="column"
      justifyContent="flex-start"
      bgGradient={['linear(to-br, #700A22 15%, #141189 100%)']}
    >
      <Flex p="0" flexDir="row" w="100%" alignItems="flex-start">
        <Flex align="center" p={4}>
          <Flex
            minWidth="80px"
            width="80px"
            minHeight="80px"
            height="80px"
            backgroundColor="rgb(16, 15, 71)"
            borderRadius="20px"
          >
            <Image p="7px" src="logo-unicauca.svg" objectFit="contain" />
          </Flex>
          <Heading pl={4} as="h2" size="sm" color="white">
            Trámites PQRSF
          </Heading>
        </Flex>
      </Flex>

      {top}

      <Flex p="0" flexDir="column" alignContent="flex-start" as="nav">
        {options.map(value => {
          return (
            <NavItem
              key={value.title}
              item_title={value.title}
              item_link={value.link}
              item_icon={value.icon}
            />
          )
        })}
      </Flex>

      {bottom}
    </Flex>
  )
}
