import { Box, Button, HStack, Image, Spinner, Center } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from "@chakra-ui/react";
import { useState } from 'react';

export const sunsBudos = [
    '/photos/suns-budos/1.jpg',
    // Add more image paths if needed
];

const SunsBudos = () => {
    const navigate = useNavigate(); // Hook for navigation
    const categoryName = "Šuns būdos";

    // State to track loading status
    const [loading, setLoading] =useState(true);

    // Handler to set loading to false when images are loaded
    const handleImageLoad = () => {
        setLoading(false);
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
                {sunsBudos.map((path, index) => (
                    <Image
                        key={index}
                        loading="lazy"
                        w="500px"
                        src={path}
                        alt={"Šuns būda-" + index}
                        style={{ display: "block", margin: "0 auto" }}
                        onLoad={handleImageLoad} // Hide the spinner after image is loaded
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

export default SunsBudos;
