import { Box, Image } from '@chakra-ui/react';
import NavBar from './NavBar';


const LaukoBaldai = () => {
    const categoryName = "Lauko baldai"
    const sodoNameliai = [
        '/photos/lauko-baldai/1.jpg',
        '/photos/lauko-baldai/2.jpg',
        '/photos/lauko-baldai/3.jpg',
        '/photos/lauko-baldai/4.jpg',
        '/photos/lauko-baldai/5.jpg',
        '/photos/lauko-baldai/6.jpg',
        '/photos/lauko-baldai/7.jpg',
        '/photos/lauko-baldai/8.jpg',
        '/photos/lauko-baldai/9.jpg',
        '/photos/lauko-baldai/10.jpg',
        '/photos/lauko-baldai/11.jpg',
        '/photos/lauko-baldai/12.jpg',
        '/photos/lauko-baldai/13.jpg',
        '/photos/lauko-baldai/14.jpg',
        '/photos/lauko-baldai/15.jpg',
        '/photos/lauko-baldai/16.jpg',
        '/photos/lauko-baldai/17.jpg',
        '/photos/lauko-baldai/18.jpg',
        '/photos/lauko-baldai/19.jpg',
        '/photos/lauko-baldai/20.jpg',
        '/photos/lauko-baldai/21.jpg',
        '/photos/lauko-baldai/22.jpg',
        '/photos/lauko-baldai/23.jpg',
        '/photos/lauko-baldai/24.jpg',
        '/photos/lauko-baldai/25.jpg',
        '/photos/lauko-baldai/26.jpg',
        '/photos/lauko-baldai/27.jpg',

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


export default LaukoBaldai

