import { Grid, GridItem, Box } from "@chakra-ui/react";
import MenuButtons from "./custom-components/MenuButtons";
import NavBar from "./custom-components/NavBar";
import { BrowserRouter, RouterProvider as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from "./custom-components/ProductPage";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ProductPage />
//   }
// ])
export default function App() {
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
        gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
        // bg="red.800"
        height="100vh"
        gap={2}  // Adjust the gap between grid items for better spacing
        p={2}    // Add padding around the grid container for better margins
      >
        {/* Header */}
        <GridItem area="header" >
          <NavBar />
        </GridItem>

        {/* Sidebar (Visible only on lg screens) */}
        <GridItem
          area="sidebar"
          bg="green.400"

          display={{ base: "none", lg: "block" }}
        >
          <Box color="white" textAlign="center">Sidebar</Box>
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
          bg="red.800"
          display={{ base: "none", lg: "block" }}
        >
          <Box color="white" textAlign="center">Main</Box>
        </GridItem>

        {/* Footer */}
        <GridItem area="footer" bg="red.400">
          <Box color="white" textAlign="center">Footer</Box>
        </GridItem>
      </Grid>
      {/* <Router>
        <Routes>
          <Route path='/' element={<h2>dsfdsf</h2>} />
          <Route path='/sodo-nameliai' element={<h2>dsfdsf</h2>} />
        </Routes>
      </Router> */}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}
