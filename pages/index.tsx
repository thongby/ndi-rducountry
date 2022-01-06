import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ThaiMap from "../components/ThaiMap"
import Events from "../components/Events"
import Footer from "../components/Footer"
import StatBox from "../components/StatBox"
import Announcement from "../components/Announcement"
import {Flex, Box, Divider} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

export default function Home() {
    return (
        <Flex w="100%">
            <Sidebar />
            <Box alignItems={"center"}>
                <Flex>
                    <Box mx={'200px'} align={"center"}>
                        <Header />
                        <Divider mt={'30px'} />
                        <Announcement />
                        <Divider mt={'30px'} />
                        <StatBox />
                        <Divider mt={'30px'} />
                        <ThaiMap />
                        <Divider mt={'30px'} mb={'300px'}/>
                        <Events />
                        <Divider mt={'30px'}/>
                        <Footer />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}
