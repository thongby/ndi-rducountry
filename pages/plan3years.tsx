import {
    SimpleGrid,
    GridItem,
    FormControl,
    Input,
    VStack,
    Heading,
    Text,
    FormLabel,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react';

const plan3years = () => {
    return (
        <VStack>
            <VStack>
                <Heading>แผนพัฒนาระยะ 3 ปี</Heading>
                <Text>ปีงบประมาณ 2565 - 2567</Text>
            </VStack>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>2565</Tab>
                    <Tab>2566</Tab>
                    <Tab>2567</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid>
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
                                    <FormLabel>ผลผลิต</FormLabel>
                                    <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>เป้าหมาย</FormLabel>
                                    <Input placeholder={"เป้าหมาย"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>ผู้รับผิดชอบ</FormLabel>
                                    <Input placeholder={"ผู้รับผิดชอบ"} />
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
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid>
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
                                    <FormLabel>ผลผลิต</FormLabel>
                                    <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>เป้าหมาย</FormLabel>
                                    <Input placeholder={"เป้าหมาย"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>ผู้รับผิดชอบ</FormLabel>
                                    <Input placeholder={"ผู้รับผิดชอบ"} />
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
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid>
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
                                    <FormLabel>ผลผลิต</FormLabel>
                                    <Input placeholder={"ผลผลิตมีอะไรบ้าง"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>เป้าหมาย</FormLabel>
                                    <Input placeholder={"เป้าหมาย"} />
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel>ผู้รับผิดชอบ</FormLabel>
                                    <Input placeholder={"ผู้รับผิดชอบ"} />
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
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </VStack>
    );
};

export default plan3years;