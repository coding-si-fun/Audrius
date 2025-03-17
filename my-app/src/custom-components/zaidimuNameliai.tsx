import { Box, Button, HStack, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Link } from "@chakra-ui/react"
export const zaidimuNameliai = [
    '/photos/zaidimu-nameliai/1.jpg',
    '/photos/zaidimu-nameliai/2.jpg',
]

const ZaidimuNameliai = () => {
    const categoryName = "Žaidimų Nameliai"
    const navigate = useNavigate(); // Hook for navigation
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box px={1} mt={2}>
                <Button onClick={() => navigate("/")}>
                    <IoChevronBack /></Button>
            </Box>
            <Box className="image-gallery" mt={"12px"}>
                {zaidimuNameliai.map((path, index) => (
                    <Image key={index} loading="lazy" w="500px" src={path} alt={"Žaidimų namelis-" + index} style={{ display: "block", margin: "0 auto" }} />
                ))}
            </Box>
            <HStack justify={"center"} w="full" p={4} bg="black">
                <Link
                    href="/apie-mus"
                    bg="white"
                    color="black"
                    p={2}
                    mb={2}
                    borderRadius="md"
                    _hover={{
                        bg: "gray.700", // Changes background color when hovered
                        textDecoration: "none", // Removes underline
                    }}
                >
                    Apie mus
                </Link>

            </HStack>
        </Box>
    );
};


export default ZaidimuNameliai