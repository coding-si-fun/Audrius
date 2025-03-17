import { Box, Button, HStack, Image, Spinner, Center } from '@chakra-ui/react';
import NavBar from './NavBar';
import { Link } from "@chakra-ui/react";
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const pavesines = [
  '/photos/pavesines/1.jpg',
  '/photos/pavesines/2.jpg',
  '/photos/pavesines/3.jpg',
  '/photos/pavesines/4.jpg',
  '/photos/pavesines/5.jpg',
];

const Pavesines = () => {
  const categoryName = "Pavėsinės";
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate(); // Hook for navigation

  const handleImageLoad = () => {
    setLoading(false); // Hide spinner once the images are loaded
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
        {pavesines.map((path, index) => (
          <Image
            key={index}
            loading="lazy"
            w="500px"
            src={path}
            alt={"Pavėsinė-" + index}
            onLoad={handleImageLoad} // Trigger handleImageLoad when each image is loaded
            style={{ display: "block", margin: "0 auto" }}
            py="4px"
            boxShadow="sm"
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

export default Pavesines;
