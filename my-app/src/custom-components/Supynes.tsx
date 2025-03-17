import { Box, Button, HStack, Image, Spinner, Center } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from "@chakra-ui/react";
import { useState } from 'react';

export const supynes = [
    '/photos/supynes/1.jpg',
    // Add more image paths here if needed
];

const Supynes = () => {
    const categoryName = "Supynės";
    const [loading, setLoading] = useState(true); // Track the loading state

    const navigate = useNavigate(); // Hook for navigation

    const handleImageLoad = () => {
        setLoading(false); // Set loading to false once images are loaded
    };

    return (
        <Box>
            <NavBar category={categoryName} />
            <Box px={1} mt={2}>
                <Button onClick={() => navigate("/")}>
                    <IoChevronBack />
                </Button>
            </Box>
            <Box className="image-gallery" mt={"12px"}>
                {loading && (
                    <Center h="100vh">
                        <Spinner size="xl" color="teal.500" />
                    </Center>
                )}
                {supynes.map((path, index) => (
                    <Image
                        key={index}
                        loading="lazy"
                        w="500px"
                        src={path}
                        alt={"Supynė-" + index}
                        onLoad={handleImageLoad} // Hide the spinner once the image is loaded
                        style={{ display: "block", margin: "0 auto" }}
                    />
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

export default Supynes;
