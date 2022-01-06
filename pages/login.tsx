import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'

const login = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100","gray.700")
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>เข้าสู่ระบบ</Heading>
                <Input placeholder="thongby@gmail.com" variant="filled" mb={3} type="email" />
                <Input placeholder="*******" variant="filled" mb={6} type="password"/>
                <Button mb={6} colorScheme="teal">Log in</Button>
                <Button onClick={toggleColorMode} colorScheme={"red"}>Toggle Color Mode</Button>
            </Flex>
        </Flex>
    )
}

export default login