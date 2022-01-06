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

const userslist = () => {
    return (
        <Box>
            <Box bg={"tomato"} w={"100%"} color={"white"}>
                <h1>บุคลากรผู้รับผิดชอบ</h1>
            </Box>
            <Box>
                <Table variant='simple'>
                    <TableCaption>บุคลากรผู้รับผิดชอบ จังหวัด xxx</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ชื่อ-นามสกุล</Th>
                            <Th>เลขประจำตัวประชาชน</Th>
                            <Th>สังกัด</Th>
                            <Th>ตำแหน่ง</Th>
                            <Th>บทบาท</Th>
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

export default userslist;