import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
export const supynes = [
    '/photos/supynes/1.jpg',
]

const Supynes = () => {
    const categoryName = "Supynės"

    const supynes = [
        '/photos/supynes/1.jpg',


    ]
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt={"12px"}>
                {supynes.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Supynė"} />
                ))}
            </Box>
        </Box>
    );
};


export default Supynes