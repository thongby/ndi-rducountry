import { Text, Stack, Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box bg={'green.100'}>
        <Stack spacing={2}>
            <Text fontSize='md'>สงวนลิขสิทธิ์โดยสำนักงานคณะกรรมการอาหารและยา</Text>
            <Text fontSize='sm'>Food And Drug Administration</Text>
        </Stack>
        </Box>
    )
}

export default Footer