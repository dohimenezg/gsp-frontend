import { Avatar, Icon, Flex, Heading, Text, Image } from '@chakra-ui/react'
import NavItem from './nav-item'
import { BsThreeDotsVertical } from 'react-icons/bs'

function object_list_to_nav_item(options) {
  const nav_items_list = []
  for (let i = 0; i < options.length; i++) {
    nav_items_list.push(
      <NavItem
        item_title={options[i].title}
        item_link={options[i].link}
        item_icon={options[i].icon}
        key={options[i].title + i}
      />
    )
  }
  return nav_items_list
}

export default function Sidebar({ options }) {
  const items = object_list_to_nav_item(options)
  return (
    <Flex
      pos="sticky"
      p="0px"
      h="100vh"
      margin="0px"
      flex="0 0 250px"
      flexDir="column"
      justifyContent="flex-start"
      bgGradient={['linear(to-br, #700A22 15%, #141189 100%)']}
    >
      <Flex p="0" flexDir="column" w="100%" alignItems="flex-start">
        <Flex align="center" p={4}>
          <Flex
            width="80px"
            height="80px"
            backgroundColor="rgb(16, 15, 71)"
            align="center"
            borderRadius="20px"
          >
            <Image p="7px" src="logo-unicauca.svg" objectFit="contain" />
          </Flex>
          <Flex flexDir="column">
            <Heading pl={4} as="h2" size="sm" color="white">
              Trámites PQRSF
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex p="0" flexDir="column" alignContent="flex-start" as="nav">
        {items}
      </Flex>

      <Flex p="0" flexDir="column" w="100%" mt="auto" alignItems="flex-start">
        <Flex w="100%" align="center" pl={2} pb={2} flexDir="row">
          {/* TODO: Cambiar para cuando se implemente el login */}
          <Avatar size="sm" />
          <Flex w="100%" flexDir="column" color="white">
            <Text pl={2} fontSize="sm" fontWeight="semibold">
              Secretaría General
            </Text>
            <Text pl={2} fontSize="sm" fontWeight="light">
              secgral@unicauca.edu.co
            </Text>
          </Flex>
          <Icon
            as={BsThreeDotsVertical}
            fontSize="xl"
            color="#FFF"
            mx={2}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
