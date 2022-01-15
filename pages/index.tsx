import { Stack, Container } from '@chakra-ui/react'
import Announcement from "../components/Announcement";
import StatBox from "../components/StatBox";
import ThaiMap from "../components/ThaiMap"
import Events from "../components/Events"

export default function Home() {
    return (
        <Container>
        <Stack>
            <Announcement />
            <StatBox />
            <ThaiMap />
        </Stack>
        <Stack mt={'300px'}>
            <Events />
        </Stack>
        </Container>
    )
}
