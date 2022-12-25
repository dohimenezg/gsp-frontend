import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function NavItem({ item_title, item_link, item_icon }) {
  return (
    <NextLink href={item_link} passHref>
      <Flex
        pl={5}
        pr={5}
        pt={2}
        pb={2}
        flexDir="column"
        w="100%"
        alignItems="flex-start"
      >
        <Menu placement="right">
          <Flex
            pt={2}
            pb={2}
            borderRadius={10}
            w="100%"
            _hover={{
              textDecor: 'none',
              bgColor: 'rgb(56, 56, 58)',
              color: '#FFF'
            }}
          >
            <MenuButton w="100%">
              <Flex>
                <Icon ml={5} as={item_icon} fontSize="xl" color="#FFF" />
                <Text ml={5} display="flex" color="white">
                  {' '}
                  {item_title}{' '}
                </Text>
              </Flex>
            </MenuButton>
          </Flex>
        </Menu>
      </Flex>
    </NextLink>
  )
}
