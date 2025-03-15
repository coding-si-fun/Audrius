import { Box, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import NavBar from './NavBar';

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

    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt="12px">
                {/* This is a flex container for the images */}
                <SimpleGrid justifyItems="center">
                    {sodoNameliai.map((path, index) => (
                        <Box key={index}>
                            <Image
                                loading="lazy"
                                maxW="500px"
                                src={path}
                                alt={`Sodo Namelis ${index}`}
                                borderRadius="md"
                                boxShadow="md"
                                display="block"
                                margin="0 auto"
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default SodoNameliai;
