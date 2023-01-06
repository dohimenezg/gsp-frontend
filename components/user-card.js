import { Avatar, Icon, Flex, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function UserCard({ name, email }) {
  return (
    <Flex w="100%" mt="auto" alignItems="flex-start">
      <Flex w="100%" align="center" pl={2} pb={2} flexDir="row">
        {/* TODO: Cambiar para cuando se implemente el login */}
        <Avatar size="sm" />
        <Flex w="100%" flexDir="column" color="white">
          <Text pl={2} fontSize="sm" fontWeight="semibold">
            {name}
          </Text>
          <Text pl={2} fontSize="sm" fontWeight="light">
            {email}
          </Text>
        </Flex>
        <Icon as={BsThreeDotsVertical} fontSize="xl" color="#FFF" mx={2} />
      </Flex>
    </Flex>
  )
}
