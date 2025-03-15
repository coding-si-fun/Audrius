import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo/logo.png';
import ColorMode from "./ColorMode";

type NavbarProps = {
    category: string

}

const NavBar = ({ category }: NavbarProps) => {

    return (
        <HStack justifyContent="space-between" px="12px">
            <Image src={logo} boxSize="64px" borderRadius="100%" />
            <Text fontSize={"2xl"}>{category}</Text> {/* Display formatted category name */}

            <ColorMode />
        </HStack>
    );
};

export default NavBar;
