import { Box, Image } from '@chakra-ui/react';

import NavBar from './NavBar';
export const pavesines = [
  '/photos/pavesines/1.jpg',
  '/photos/pavesines/2.jpg',
  '/photos/pavesines/3.jpg',
  '/photos/pavesines/4.jpg',
  '/photos/pavesines/5.jpg',

]

const Pavesines = () => {
  const categoryName = "Pavėsinės"

  return (
    <Box>
      <NavBar category={categoryName} />
      <Box className="image-gallery" mt={"12px"}>
        {pavesines.map((path, index) => (
          <Image key={index} loading="lazy" maxW="500px" src={path} alt={"Sodo Namelis"} />
        ))}
      </Box>
    </Box>
  );
};


export default Pavesines