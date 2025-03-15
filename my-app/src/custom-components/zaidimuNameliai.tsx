import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
export const zaidimuNameliai = [
    '/photos/zaidimu-nameliai/1.jpg',
    '/photos/zaidimu-nameliai/2.jpg',
]

const ZaidimuNameliai = () => {
    const categoryName = "Žaidimų Nameliai"
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt={"12px"}>
                {zaidimuNameliai.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Sodo Namelis"} />
                ))}
            </Box>
        </Box>
    );
};


export default ZaidimuNameliai