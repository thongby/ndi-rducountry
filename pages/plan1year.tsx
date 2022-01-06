import {SimpleGrid, GridItem, FormControl, Input, VStack, Heading, Text, FormLabel, Button} from '@chakra-ui/react';

const plan1year = () => {
    return (
        <VStack>
            <VStack>
                <Heading>แผนพัฒนาระยะ 1 ปี</Heading>
                <Text>ปีงบประมาณ 2565</Text>
            </VStack>
            <SimpleGrid>
                <GridItem>
                    <FormControl>
                        <FormLabel>ปีงบประมาณ</FormLabel>
                        <Input placeholder={"ปีงบประมาณ"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>กิจกรรม</FormLabel>
                        <Input placeholder={"กิจกรรมอะไร"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>กลุ่มเป้าหมาย</FormLabel>
                        <Input placeholder={"กลุ่มเป้าหมาย"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ผลผลิต 3 เดือน</FormLabel>
                        <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ผลผลิต 6 เดือน</FormLabel>
                        <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ผลผลิต 9 เดือน</FormLabel>
                        <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>ผลผลิต 12 เดือน</FormLabel>
                        <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>แนบไฟล์แผน</FormLabel>
                        <Input placeholder={"แนบไฟล์แผนเป็นแบบ pdf"} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <Button size={"lg"} w={"full"} mt={"5"}>บันทึก</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default plan1year;