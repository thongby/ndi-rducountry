import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
} from '@chakra-ui/react';

const plan3yearslist = () => {
    return (
        <Box>
            <Box bg={"tomato"} w={"100%"} color={"white"}>
                <h1>แผนพัฒนาระยะ 3 ปี</h1>
            </Box>
            <Box>
            <Table variant='simple'>
                <TableCaption>แผนพัฒนาระยะ 3 ปี จังหวัด xxx</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ปีงบประมาณ</Th>
                        <Th>กิจกรรม</Th>
                        <Th>เป้าหมาย</Th>
                        <Th>ผลผลิต</Th>
                        <Th>ไฟล์</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                    </Tr>
                    <Tr>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                    </Tr>
                    <Tr>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                        <Td>xxx</Td>
                    </Tr>
                </Tbody>
            </Table>
            </Box>
        </Box>

    )
}

export default plan3yearslist;