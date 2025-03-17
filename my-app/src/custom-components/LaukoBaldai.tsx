import { Box, Button, HStack, Image, Link, Spinner } from '@chakra-ui/react';
import { IoChevronBack } from "react-icons/io5";
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LaukoBaldaiUrls = [
    '/photos/lauko-baldai/1.jpg',
    '/photos/lauko-baldai/2.jpg',
    '/photos/lauko-baldai/3.jpg',
    '/photos/lauko-baldai/4.jpg',
    '/photos/lauko-baldai/5.jpg',
    '/photos/lauko-baldai/6.jpg',
    '/photos/lauko-baldai/7.jpg',
    // '/photos/lauko-baldai/8.jpg',
    '/photos/lauko-baldai/9.jpg',
    '/photos/lauko-baldai/10.jpg',
    '/photos/lauko-baldai/11.jpg',
    '/photos/lauko-baldai/12.jpg',
    '/photos/lauko-baldai/13.jpg',
    '/photos/lauko-baldai/14.jpg',
    '/photos/lauko-baldai/15.jpg',
    '/photos/lauko-baldai/16.jpg',
    '/photos/lauko-baldai/17.jpg',
    '/photos/lauko-baldai/18.jpg',
    '/photos/lauko-baldai/19.jpg',
    '/photos/lauko-baldai/20.jpg',
    '/photos/lauko-baldai/21.jpg',
    '/photos/lauko-baldai/22.jpg',
    '/photos/lauko-baldai/23.jpg',
    '/photos/lauko-baldai/24.jpg',
    '/photos/lauko-baldai/25.jpg',
    '/photos/lauko-baldai/26.jpg',
    '/photos/lauko-baldai/27.jpg',
];

const LaukoBaldai = () => {
    const categoryName = "Lauko baldai";
    const navigate = useNavigate();

    // State to track loaded images
    const [loadedImages, setLoadedImages] = useState(new Array(LaukoBaldaiUrls.length).fill(false));

    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
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
                {LaukoBaldaiUrls.map((path, index) => (
                    <Box key={index} position="relative" textAlign="center">
                        {!loadedImages[index] && (
                            <Spinner size="xl" color="gray.500" position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" />
                        )}
                        <Image
                            loading="lazy"
                            w="500px"
                            src={path}
                            alt={`Lauko Baldai ${index}`}
                            style={{ display: "block", margin: "0 auto" }}
                            onLoad={() => handleImageLoad(index)}
                            opacity={loadedImages[index] ? 1 : 0} // Hide image until loaded
                            transition="opacity 0.3s ease-in-out"
                            py="6px"
                            shadow="sm"

                        />
                    </Box>
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
                        bg: "gray.700",
                        textDecoration: "none",
                    }}
                >
                    Apie mus
                </Link>
            </HStack>
        </Box>
    );
};

export default LaukoBaldai;
