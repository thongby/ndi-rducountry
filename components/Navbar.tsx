import {
    Box,
    Flex,
    Stack,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    useColorMode
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'gray.300', dark: 'gray.600' }
    const textColor = { light: 'black', dark: 'gray.100' }
    const router = useRouter()
    return (
       <Flex
          w={'100vh'}
          bg={bgColor[colorMode]}
          align={"center"}
          color={textColor[colorMode]}
          justify={"center"}
          fontSize={['md', 'lg', 'xl', 'xl']}
          h={'7vh'}
          boxShadow={"md"}
          p={2}>
           <Flex w={['100vw', '100vw', '80vw', '80vw']} justify={"space-around"}>
                <Box>
                    <Image h='4vh' src='/images/medicine.png' alt='Logo of NDI' />
                </Box>
                <Stack
                    spacing={8}
                    color={textColor[colorMode]}
                    justify={"center"}
                    align={"center"}
                    isInline>
                    <Box
                        position={"relative"}
                        opacity={router.pathname !== '/' ? 0.4 : 1}>
                        <Link href={'/'}>
                            <a>หน้าหลัก</a>
                        </Link>
                    </Box>
                    <Box
                        position={"relative"}
                        opacity={router.pathname !== '/้history' ? 0.4 : 1}>
                        <Link href={'/history'}>
                            <a>ความเป็นมา</a>
                        </Link>
                    </Box>
                    <Box
                        position={"relative"}
                        opacity={router.pathname !== '/rduway' ? 0.4 : 1}>
                        <Link href={'/rduway'}>
                            <a>แนวทางการพัฒนา</a>
                        </Link>
                    </Box>
                    <Box>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                จังหวัดรายงาน
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    <Link href={'https://forms.gle/hfdSVy2sZonhtmeA7'}>
                                    ทีมนำพัฒนาจังหวัด
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={'https://forms.gle/1kZB1tCZ4Vwx1zaJ8'}>
                                    แผนพัฒนาจังหวัดระยะ 3 ปี
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={'https://forms.gle/BohMtePMw27DoTtU9'}>
                                    อำเภอเป้าหมาย
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href={'https://forms.gle/LqmXWC9SGgqVfwDH8'}>
                                    ร้านชำเป้าหมาย
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Stack>
           </Flex>
       </Flex>
    )
}

export default Navbar
