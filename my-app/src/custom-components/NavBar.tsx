import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo/logo.png';
import ColorMode from "./ColorMode";

const NavBar = ({ categoryName = "" }) => {
    // Function to format the category name safely
    const formatCategoryName = (name) => {
        if (!name) return ""; // Return an empty string if name is undefined or empty

        return name
            .split('-') // Split the string by hyphen
            .map((word, index) => {
                if (index === 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first word
                }
                return word.toLowerCase(); // Keep the rest in lowercase
            })
            .join(' '); // Join the words with a space
    };

    return (
        <HStack justifyContent="space-between" px="12px">
            <Image src={logo} boxSize="64px" borderRadius="100%" />
            <Text>{formatCategoryName(categoryName)}</Text> {/* Display formatted category name */}
            <ColorMode />
        </HStack>
    );
};

export default NavBar;
