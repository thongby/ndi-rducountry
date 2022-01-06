import {Container, SimpleGrid, Box, Stack, GridItem, Flex, Image, Text, Link} from '@chakra-ui/react'

const Events = () => {
    return (
        <Container>
        <Stack>
            <Box>
                <Box bg={'yellow.300'}>
                    <Text color={'darkgreen'} fontSize={'20px'}>
                        <h1>กิจกรรมยาที่มีในชุมชน</h1>
                    </Text>
                </Box>
                <Box mt={'20px'}>
                    <SimpleGrid columns={3} gap={6}>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event1.jpg' alt='บ้านทุ่งนารี' />
                            <Link href={"https://localfund.happynetwork.org/project/12077/info.action"} isExternal>
                                <Text>สร้างความปลอดภัยการใช้ยาในชุมชน รพ.สต.บ้านทุ่งนารี</Text>
                            </Link>

                        </Box>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event2.jpg' alt='โรงพยาบาลอุดรรับยา' />
                            <Link href={"https://udontoday.co/021062/"} isExternal>
                                <Text>รพ.อุดรนำร่องคนไข้รับยา 5ร้านยาชุมชนอุ่นใจ</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event3.jpg' alt='เกาะลันตา' />
                            <Link href={"http://203.157.232.108/webkbo61/index.php/2018/07/27/art25761/"} isExternal>
                                <Text>โครงการส่งเสริมการใช้ยาปลอดภัยในชุมชน ประจำปี 2561 ณ ต.ศาลาด่าน อ.เกาะลันตา จ.กระบี่</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event4.jpg' alt='บ้านฟ่อน' />
                            <Link href={"http://www.kelangnakorn.info/hfund/?article:828"} isExternal>
                                <Text>การใช้ยาอย่างสมเหตุผลผู้ป่วยโรคเรื้อรัง รพ.สต.บ้านฟ่อน</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event5.jpg' alt='สำนักอนามัย' />
                            <Link href={"https://webportal.bangkok.go.th/pharmaceutical/page/sub/13222/กิจกรรมกองเภสัชกรรม/0/info/248526/กิจกรรมให้ความรู้เรื่องยา-ในหน่วยแพทย์และสาธารณสุขเคลื่อนที่-ภายใต้โครงการกรุงเทพฯ-ห่วงใย-ใส่ใจสุขภาพ"} isExternal>
                                <Text>ให้ความรู้เรื่องยา ในหน่วยแพทย์และสาธารณสุขเคลื่อนที่</Text>
                            </Link>
                        </Box>
                        <Box>
                            <Image boxSize={'200px'} objectFit={'cover'} src='/images/event6.jpg' alt='ภูผาม่าน' />
                            <Link href={"https://www.govesite.com/ppmdho/activities.php?aid=2018112716324141EpWY1"} isExternal>
                                <Text>กิจจกรรมเยียมผู้ป่วยในชุมชนรพ.สต.ตำบลนาฝายี</Text>
                            </Link>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Stack>
        </Container>
    )
}

export default Events