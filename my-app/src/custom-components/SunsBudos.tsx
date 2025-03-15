import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
export const sunsBudos = [
    '/photos/suns-budos/1.jpg',


]

const SunsBudos = () => {
    const categoryName = "Šuns būdos"
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt={"12px"}>
                {sunsBudos.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Sodo Namelis"} />
                ))}
            </Box>
        </Box>
    );
};


export default SunsBudos