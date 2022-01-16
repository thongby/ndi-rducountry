import { Box, Container } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
    return (
        <Box as={'main'}>
            <Container centerContent>
                <Navbar/>
                <Header/>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}