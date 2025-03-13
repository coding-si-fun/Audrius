import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';

const Supynes = () => {
    const categoryName = "Supynės"

    const sodoNameliai = [
        '/photos/supynes/1.jpg',


    ]
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt={"12px"}>
                {sodoNameliai.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Supynė"} />
                ))}
            </Box>
        </Box>
    );
};


export default Supynes