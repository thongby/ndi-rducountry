import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="หน้าหลัก" description="การพัฒนาประเทศสู่การใช้ยาอย่างสมเหตุผล" />
                <NavItem navSize={navSize} icon={FiCalendar} title="ความเป็นมาและนโยบาย" />
                <NavItem navSize={navSize} icon={FiUser} title="แนวทางการพัฒนาจังหวัด" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="สถานการณ์ประเทศ" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="สถานการณ์จังหวัด" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="สถานการณ์ชุมชน" />
                <NavItem navSize={navSize} icon={FiSettings} title="รายงานการพัฒนาของจังหวัด" />
            </Flex>
        </Flex>
    )
}