import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';

const ZaidimuNameliai = () => {
    const categoryName="Žaidimų Nameliai"
    const sodoNameliai = [
        '../../public/photos/zaidimu-nameliai/1.jpg',
        '../../public/photos/zaidimu-nameliai/2.jpg',
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


export default ZaidimuNameliai