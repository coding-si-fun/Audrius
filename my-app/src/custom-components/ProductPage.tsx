// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Box, Image } from "@chakra-ui/react"
// import NavBar from "./NavBar";
// import sodonamelis from "../../public/photos/sodo-nameliai/1.jpg"



// const ProductPage = () => {
//     const { category } = useParams();  // Get the category from the URL
//     const [imagePaths, setImagePaths] = useState([]);
//     const sodoNameliai=['../../public/photos/sodo-nameliai/1.jpg']

//     useEffect(() => {
//         const fetchImages = async () => {
//             const response = await fetch(`http://localhost:5714/${category}`);
//             const data = await response.json();
//             setImagePaths(data);
//         };

//         fetchImages();
//     }, [category]);  // Re-fetch when the category changes
//     console.log(response+"dfsdf")
//     return (
//         <Box>
//             <NavBar categoryName={category} />
//             <Box className="image-gallery" mt={"12px"}>
//                 {sodoNameliai.map((path, index) => (
//                     <Image key={index} loading="lazy" maxW="500px" src={path} alt={`image-${index}`} />
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default ProductPage;




