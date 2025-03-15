import { Box, SimpleGrid, VStack, Image } from '@chakra-ui/react';
import SodoNameliai from "../assets/menu-photos/sodo-nameliai.webp";
import LaukoBaldai from "../assets/menu-photos/Lauko-baldai.webp";
import Pavesine from "../assets/menu-photos/pavesine.webp";
import SunsBudos from "../assets/menu-photos/suns-budos.webp";
import ZaidimuNameliai from "../assets/menu-photos/zaidimu-namelaiai.webp";
import Supynes from '../assets/menu-photos/supynes.webp';

interface Props {
    onSetImages: (url: string) => void
}
const SideBar = ({ onSetImages }: Props) => {
    return (
        <VStack mt="12px">
            <SimpleGrid columns={1} gap="10px" px={4}>
                <Box>
                    <Image
                        onClick={() => onSetImages("SodoNameliai")}
                        src={SodoNameliai}
                        _hover={{
                            transform: "scale(1.1)", // Scale image on hover
                            transition: "transform 0.3s ease-in-out", // Smooth transition
                            cursor: "pointer", // Change cursor to pointer
                        }}
                        borderRadius="2xl" // Border radius
                        border="2px solid black" // Black outline

                    />
                </Box>
                <Box>
                    <Image
                        onClick={() => onSetImages("LaukoBaldai")}
                        src={LaukoBaldai}
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        borderRadius="2xl"
                        border="2px solid black"

                    />
                </Box>
                <Box>
                    <Image
                        onClick={() => onSetImages("Pavesines")}
                        src={Pavesine}
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        borderRadius="2xl"
                        border="2px solid black"
                    />
                </Box>
                <Box>
                    <Image
                        onClick={() => onSetImages("SunsBudos")}
                        src={SunsBudos}
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        borderRadius="2xl"
                        border="2px solid black"
                    />
                </Box>
                <Box>
                    <Image
                        onClick={() => onSetImages("ZaidimuNameliai")}
                        src={ZaidimuNameliai}
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        borderRadius="2xl"
                        border="2px solid black"
                    />
                </Box>
                <Box>
                    <Image
                        onClick={() => onSetImages("Supynes")}
                        src={Supynes}
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        borderRadius="2xl"
                        border="2px solid black"
                    />
                </Box>
            </SimpleGrid>
        </VStack>
    );
}

export default SideBar;
