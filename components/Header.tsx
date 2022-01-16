import {
    Container,
    Box,
    Heading,
    Image
} from '@chakra-ui/react'

const Header = () => (
    <Container bg={'green.200'} w={'100vh'} centerContent>
        {/*<Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
            Test
        </Box>*/}
        <Box display={{ md: 'flex' }}>
            <Box mt={'2px'} flexGrow={1} borderRadius={'lg'}>
                <Heading as="h2" variant="page-title">
                    การพัฒนาสู่ประเทศใช้ยาอย่างสมเหตุผล
                </Heading>
                <p>Thailand moving towards RDU country</p>
            </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >
                <Image
                    mt={'20px'}
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/ndi-logo.jpeg"
                    alt="NDI image"
                />
            </Box>
        </Box>
    </Container>
)

export default Header
