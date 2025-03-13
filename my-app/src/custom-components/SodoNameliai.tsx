import { Box, Image } from '@chakra-ui/react';
import NavBar from './NavBar';


const SodoNameliai = () => {
    const categoryName = "Sodo Nameliai"
    const sodoNameliai = [
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

