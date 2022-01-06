import {SimpleGrid, GridItem, FormControl, Input, VStack, Heading, Text, FormLabel, Button} from '@chakra-ui/react'

const user = () => {
    return (
        <VStack>
            <VStack>
                <Heading>ผู้ใช้งานระบบ</Heading>
                <Text>****************</Text>
            </VStack>
            <SimpleGrid>
                <GridItem>
                    <FormControl>
                        <FormLabel>ชื่อผู้ใช้งาน</FormLabel>
                        <Input placeholder={"ชื่อผู้ใช้งานสำหรับเข้าระบบ"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>รหัสผ่าน</FormLabel>
                        <Input placeholder={"**********"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
                        <Input placeholder={"**********"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <Button size={"lg"} w={"full"} mt={"5"}>บันทึก</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default user;