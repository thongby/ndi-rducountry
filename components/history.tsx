import { Text, Stack, Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box bg={'yellow.300'}>
            <Stack spacing={2}>
                <Text fontSize='lg'>ความเป็นมาและนโยบายในการพัฒนาสู่ประเทศใช้ยาอย่างสมเหตุผล</Text>
                <Text fontSize='md'>
                    Food And Drug Administration
                </Text>
            </Stack>
        </Box>
    )
}

export default Footer