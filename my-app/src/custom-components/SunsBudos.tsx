import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';

const SunsBudos = () => {
    const categoryName="Šuns būdos"
    const sodoNameliai = [
        '../../public/photos/suns-budos/1.jpg',


    ]
    return (
        <Box>
            <NavBar category={categoryName}/>
            <Box className="image-gallery" mt={"12px"}>
                {sodoNameliai.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Sodo Namelis"} />
                ))}
            </Box>
        </Box>
    );
};


export default SunsBudos