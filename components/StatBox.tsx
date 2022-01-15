import {SimpleGrid, Box, Stack, Text} from '@chakra-ui/react'

const StatBox = () => {
    return (
        <Stack>
            <Box>
                <SimpleGrid columns={3} spacing={5}>
                    <Box bg='tomato' height='80px' textAlign={"center"} borderRadius={'lg'}>
                        <Text mt={'5'} color={'white'}>
                            76 จังหวัด
                        </Text>
                    </Box>
                    <Box bg='tomato' height='80px' textAlign={'center'} borderRadius={'lg'}>
                        <Text mt={'5'} color={'white'}>
                            878 อำเภอ
                        </Text>
                    </Box>
                    <Box bg='tomato' height='80px' textAlign={'center'} borderRadius={'lg'}>
                        <Text mt={'5'} color={'white'}>
                            7,255 ตำบล
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Stack>

    )
}

export default StatBox