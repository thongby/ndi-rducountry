import { ChakraProvider, Flex } from '@chakra-ui/react';
import Layout from "../components/Layout";
import "../styles/global.css";

export default function App({ Component, pageProps }){
    return (
        <ChakraProvider>
            <Flex direction={"column"} align={"center"} justify={"center"}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Flex>
        </ChakraProvider>
    )
}
