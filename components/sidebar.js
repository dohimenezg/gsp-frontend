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

export default function Sidebar({ top, options, bottom }) {
  const items = object_list_to_nav_item(options)
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
        {items}
      </Flex>

      {bottom}

    </Flex>
  )
}
