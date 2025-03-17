import { Box, Button, HStack, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from "@chakra-ui/react"
export const supynes = [
    '/photos/supynes/1.jpg',
]

const Supynes = () => {
    const categoryName = "Supynės"

    const supynes = [
        '/photos/supynes/1.jpg',


    ]

    const navigate = useNavigate(); // Hook for navigation
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box px={1} mt={2}>
                <Button onClick={() => navigate("/")}>
                    <IoChevronBack /></Button>
            </Box>
            <Box className="image-gallery" mt={"12px"}>
                {supynes.map((path, index) => (
                    <Image key={index} loading="lazy" w="500px" src={path} alt={"Supynė-" + index} />
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


export default Supynes