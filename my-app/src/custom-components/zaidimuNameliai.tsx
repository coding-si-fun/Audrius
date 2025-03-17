import { Box, Button, HStack, Image, Spinner, Center } from '@chakra-ui/react';
import NavBar from './NavBar';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Link } from "@chakra-ui/react";
import { useState } from 'react';

export const zaidimuNameliai = [
    '/photos/zaidimu-nameliai/1.jpg',
    '/photos/zaidimu-nameliai/2.jpg',
    // Add more image paths here if needed
];

const ZaidimuNameliai = () => {
    const categoryName = "Žaidimų nameliai";
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
                {zaidimuNameliai.map((path, index) => (
                    <Image
                        key={index}
                        loading="lazy"
                        w="500px"
                        src={path}
                        alt={"Žaidimų namelis-" + index}
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

export default ZaidimuNameliai;
