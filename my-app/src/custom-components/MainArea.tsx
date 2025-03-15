import React, { useEffect, useState } from "react";
import { sodoNameliai } from "./SodoNameliai"; // Assuming this is an array of images or data.
import { LaukoBaldaiUrls } from "./LaukoBaldai";
import { pavesines } from "./Pavesines";
import { sunsBudos } from "./SunsBudos";
import { zaidimuNameliai } from "./zaidimuNameliai";
import { supynes } from "./Supynes";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";


interface Props {
    gotImages: string;
}


const MainArea = ({ gotImages }: Props) => {
    const [Images, setImages] = useState<any[]>([]);

    useEffect(() => {
        // Set images based on the gotImages prop
        switch (gotImages) {
            case "SodoNameliai":
                setImages(sodoNameliai);
                break;
            case "LaukoBaldai":
                setImages(LaukoBaldaiUrls);
                break;
            case "Pavesines":
                setImages(pavesines);
                break;
            case "SunsBudos":
                setImages(sunsBudos);
                break;
            case "ZaidimuNameliai":
                setImages(zaidimuNameliai);
                break;
            case "Supynes":
                setImages(supynes);
                break;
            default:
                setImages([]);
                break;
        }
    }, [gotImages]);

    const imagesToRender = Images.length > 0 ? Images : sodoNameliai;

    return (
        <Flex justify="center" align="center" >
      
            <Box mt="12px">
                {imagesToRender.length > 0 ? (
                    imagesToRender.map((image, index) => (
                        <Image key={index} maxW="500px" src={image} alt={`image-${index}`} />
                    ))
                ) : (
                    <p>No images to display</p>
                )}
            </Box>

        </Flex>
    );
};

export default MainArea;
