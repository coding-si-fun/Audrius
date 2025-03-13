import { Box, Image } from '@chakra-ui/react';
import NavBar from './NavBar';


const SodoNameliai = () => {
    const categoryName="Sodo Nameliai"
    const sodoNameliai = [
        '../../public/photos/sodo-nameliai/1.jpg',
        '../../public/photos/sodo-nameliai/2.jpg',
        '../../public/photos/sodo-nameliai/3.jpg',
        '../../public/photos/sodo-nameliai/4.jpg',
        '../../public/photos/sodo-nameliai/5.jpg',
        '../../public/photos/sodo-nameliai/6.jpg',
        '../../public/photos/sodo-nameliai/7.jpg',
        '../../public/photos/sodo-nameliai/8.jpg',
        '../../public/photos/sodo-nameliai/9.jpg',
        '../../public/photos/sodo-nameliai/10.jpg',
        '../../public/photos/sodo-nameliai/11.jpg',
        '../../public/photos/sodo-nameliai/12.jpg',
        '../../public/photos/sodo-nameliai/13.jpg',
    ]
    return (
        <Box>
            <NavBar category={categoryName} />
            <Box className="image-gallery" mt={"12px"}>
                    {sodoNameliai.map((path, index) => (
                        <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Sodo Namelis"} />
                    ))}
            </Box>
        </Box>
    );
};


export default SodoNameliai

