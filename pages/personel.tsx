import {SimpleGrid, GridItem, FormControl, Input, VStack, Heading, Text, FormLabel, Button} from '@chakra-ui/react'

const personel = () => {
    return (
        <VStack>
            <VStack>
                <Heading>เจ้าหน้าที่</Heading>
                <Text>จังหวัด</Text>
            </VStack>
            <SimpleGrid>
                <GridItem>
                    <FormControl>
                        <FormLabel>คำนำหน้า</FormLabel>
                        <Input placeholder={"คำนำหน้า เช่น นาย นาง นางสาว"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ชื่อ</FormLabel>
                        <Input placeholder={"ชื่อ"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>นามสกุล</FormLabel>
                        <Input placeholder={"นามสกุล"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>หมายเลขประจำตัวประชาชน</FormLabel>
                        <Input placeholder={"หมายเลขประจำตัวประชาชน"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ตำแหน่ง</FormLabel>
                        <Input placeholder={"ตำแหน่ง"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>สังกัด</FormLabel>
                        <Input placeholder={"สังกัด"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>บทบาท</FormLabel>
                        <Input placeholder={"บทบาทการใช้ยาสมเหตุผล"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <Button size={"lg"} w={"full"} mt={"5"}>บันทึก</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default personel;