// import { Box, Button, Image, SimpleGrid, Link, HStack } from '@chakra-ui/react';
// import NavBar from './NavBar';
// import { useNavigate } from 'react-router-dom';
// import { IoChevronBack } from 'react-icons/io5';

// export const sodoNameliai = [
//     '/photos/sodo-nameliai/1.jpg',
//     '/photos/sodo-nameliai/2.jpg',
//     '/photos/sodo-nameliai/3.jpg',
//     '/photos/sodo-nameliai/4.jpg',
//     '/photos/sodo-nameliai/5.jpg',
//     '/photos/sodo-nameliai/6.jpg',
//     '/photos/sodo-nameliai/7.jpg',
//     '/photos/sodo-nameliai/8.jpg',
//     '/photos/sodo-nameliai/9.jpg',
//     '/photos/sodo-nameliai/10.jpg',
//     '/photos/sodo-nameliai/11.jpg',
//     '/photos/sodo-nameliai/12.jpg',
//     '/photos/sodo-nameliai/13.jpg',
// ];

// const SodoNameliai = () => {
//     const categoryName = "Sodo Nameliai";

//     const navigate = useNavigate(); // Hook for navigation
//     return (
//         <Box>
//             <NavBar category={categoryName} />
//             <Box px={1} mt={2}>
//                 <Button onClick={() => navigate("/")}>
//                     <IoChevronBack /></Button>
//             </Box>
//             <Box className="image-gallery" mt="12px">
//                 <SimpleGrid justifyItems="center">
//                     {sodoNameliai.map((path, index) => (
//                         <Box key={index}>
//                             <Image
//                                 loading="lazy"
//                                 w="500px"
//                                 src={path}
//                                 alt={`Sodo Namelis ${index}`}
//                                 borderRadius="md"
//                                 boxShadow="md"
//                                 display="block"
//                                 margin="0 auto"
//                                 style={{ display: "block", margin: "0 auto" }}
//                             />
//                         </Box>
//                     ))}
//                 </SimpleGrid>
//             </Box>
//             <HStack justify={"center"} w="full" p={4} bg="black">
//                 <Link
//                     href="/apie-mus"
//                     bg="white"
//                     color="black"
//                     p={2}
//                     mb={2}
//                     borderRadius="md"
//                     _hover={{
//                         bg: "gray.700", // Changes background color when hovered
//                         textDecoration: "none", // Removes underline
//                     }}
//                 >
//                     Apie mus
//                 </Link>

//             </HStack>
//         </Box>
//     );
// };

// export default SodoNameliai;


import { Box, Button, Image, SimpleGrid, Link, HStack, Spinner } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { useState } from 'react';

export const sodoNameliai = [
    '/photos/sodo-nameliai/1.jpg',
    '/photos/sodo-nameliai/2.jpg',
    '/photos/sodo-nameliai/3.jpg',
    '/photos/sodo-nameliai/4.jpg',
    '/photos/sodo-nameliai/5.jpg',
    '/photos/sodo-nameliai/6.jpg',
    '/photos/sodo-nameliai/7.jpg',
    '/photos/sodo-nameliai/8.jpg',
    '/photos/sodo-nameliai/9.jpg',
    '/photos/sodo-nameliai/10.jpg',
    '/photos/sodo-nameliai/11.jpg',
    '/photos/sodo-nameliai/12.jpg',
    '/photos/sodo-nameliai/13.jpg',
];

const SodoNameliai = () => {
    const categoryName = "Sodo Nameliai";
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState(new Array(sodoNameliai.length).fill(false));

    // Function to mark an image as loaded
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
            <Box className="image-gallery" mt="12px">
                <SimpleGrid justifyItems="center" spacing={4}>
                    {sodoNameliai.map((path, index) => (
                        <Box key={index} position="relative">
                            {!loadedImages[index] && (
                                <Spinner size="xl" color="gray.500" position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" />
                            )}
                            <Image
                                loading="lazy"
                                w="500px"
                                src={path}
                                alt={`Sodo Namelis ${index}`}
                                borderRadius="md"
                                boxShadow="md"
                                display="block"
                                margin="0 auto"
                                onLoad={() => handleImageLoad(index)} // Fires when image is fully loaded
                                opacity={loadedImages[index] ? 1 : 0} // Hide image until it's loaded
                                transition="opacity 0.3s ease-in-out"
                                py="4px"
                                shadow="sm"
                            />
                        </Box>
                    ))}
                </SimpleGrid>
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

export default SodoNameliai;

