import { Avatar, Divider, Flex, Heading, Text, Image } from "@chakra-ui/react";
import NavItem from "./nav-item";

function list_to_nav_item(options) {
    const nav_items_list = []
    for (let i = 0; i < options.length; i++) {
        nav_items_list.push(
            <NavItem 
                item_title={options[i].title}
                item_link={options[i].link}
                item_icon={options[i].icon}
            />
        );
    }
    return nav_items_list;
}

export default function Sidebar({options, child}) {
    const items = list_to_nav_item(options)
    return (
        <Flex>
            <Flex
                pos="sticky"
                p="0"
                h="100vh"
                margin="0px"
                w="250px"
                flexDir="column"
                justifyContent="start"
                bgGradient={[
                    "linear(to-br, #700A22 15%, #141189 100%)",
                ]}
            >
                <Flex
                    p="0"
                    flexDir="column"
                    w="100%"
                    alignItems="flex-start"
                    
                >
                    <Divider />
                    <Flex align="center" p={4}>
                        <Flex width="80px" height="80px" backgroundColor="rgb(16, 15, 71)" align="center" borderRadius="20px">
                            <Image p="6px" src="logo-unicauca.svg" objectFit="contain" />
                        </Flex>
                        <Flex flexDir="column">
                            <Heading pl={4} as="h2" size="sm" color="white">Trámites PQRSF</Heading>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    p="0"
                    flexDir="column"
                    alignContent="flex-start"
                    as="nav"
                >
                    { items }
                </Flex>
            </Flex>

            { child }

        </Flex>
    )
}