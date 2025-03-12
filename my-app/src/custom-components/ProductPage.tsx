import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react"
import NavBar from "./NavBar";

const ProductPage = () => {
    const { category } = useParams();  // Get the category from the URL
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`http://localhost:3000/api/images/${category}`);
            const data = await response.json();
            setImagePaths(data);
        };

        fetchImages();
    }, [category]);  // Re-fetch when the category changes

    return (
        <Box>
            <NavBar categoryName={category} />
            <Box className="image-gallery" mt={"12px"}>
                {imagePaths.map((path, index) => (
                    <Image key={index} loading="lazy" maxW="500px" src={path} alt={`image-${index}`} />
                ))}
            </Box>
        </Box>
    );
};

export default ProductPage;




