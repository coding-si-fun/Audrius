import { Grid, GridItem, Box, Link, HStack } from "@chakra-ui/react";
import MenuButtons from "./custom-components/MenuButtons";
import NavBar from "./custom-components/NavBar"
import SideBar from "./custom-components/SideBar";
import MainArea from "./custom-components/MainArea";
import { useState } from "react";

export default function App() {
  const [images, setImages] = useState("")
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
               "menu"
               "footer"`,
          lg: `"header header"
             "sidebar main"
             "footer footer"`
        }}
        gridTemplateRows="50px 1fr 30px"
        gridTemplateColumns={{ base: "1fr", lg: "300px 1fr" }}
        // bg="red.800"
        height="100vh"
        gap={2}  // Adjust the gap between grid items for better spacing
        p={2}    // Add padding around the grid container for better margins
      >
        {/* Header */}
        <GridItem area="header" >
          <NavBar category="Audrius: +37063599672" />
        </GridItem>

        {/* Sidebar (Visible only on lg screens) */}
        <GridItem
          area="sidebar"
          // bg="green.400"

          display={{ base: "none", lg: "block" }}
        >
          <SideBar onSetImages={setImages} />
        </GridItem>

        {/* Menu (Visible only on small screens) */}
        <GridItem
          area="menu"
          // bg="red.800"
          mt={5}
          display={{ base: "block", lg: "none" }}
        >
          {/* <Box color="white" textAlign="center">MENU</Box> */}
          <MenuButtons />
        </GridItem>

        {/* Main Content (Visible only on large screens) */}
        <GridItem
          area="main"
          display={{ base: "none", lg: "block" }}
        >
          <MainArea gotImages={images} />
        </GridItem>
        {/* Footer */}
        <GridItem area="footer">
          <HStack justify={"center"} w="full" p={4} bg="black">
            <Link
              href="/apie-mus"
              bg="white"
              color="black"
              p={2}
              mb={2}
              borderRadius="md"
              _hover={{
                bg: "gray.700", // Changes background color when hovered
                textDecoration: "none", // Removes underline
              }}
            >
              Apie mus
            </Link>

          </HStack>
        </GridItem>

      </Grid>
    </>
  );
}
