import { Text, Box } from '@chakra-ui/react'

const Announcement = () => {
    return (
        <Box bg={'yellow.300'} textAlign={'center'} height={'150px'}>
            <Text color='black' fontSize={'20px'}>
            เว็บไซต์นี้จัดทำขึ้นเพื่อรายงานสถานการณ์การพัฒนาประเทศไทยสู่การใช้ยาอย่างสมเหตุผล และเป็นเว็บสำหรับจังหวัดรายงานการพัฒนา
            ของแต่ละจังหวัด
            </Text>
            <Text color={'red.900'} fontSize={'20px'}>
                เว็บไซต์ยังอยู่ในระหว่างการจัดทำเนื่องจากอยู่ระหว่างการเตรียมความพร้อม ขออภัยในความไม่สะดวก
            </Text>
        </Box>
    )
}

export default Announcement