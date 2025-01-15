import { Box, Flex, HStack, IconButton, VStack, Collapse, useOutsideClick } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useRef, useState } from "react";

// Color Variables
const HEADER_BG_COLOR = "gray.800";
const HEADER_TEXT_COLOR = "white";
const LINK_HOVER_COLOR = "gray.500";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Replaces isOpen
  const ref = useRef();

  const toggleMenu = () => {
    setMenuOpen(true);
    console.log(menuOpen);
    if (menuOpen) {
      console.log("Closing menu");
      setMenuOpen(false); // Close menu if it's currently open
    } else {
      console.log("Opening menu");
      setMenuOpen(true); // Open menu if it's currently c
      
    }
  };  

  const closeMenu = () => setMenuOpen(false); // Close menu explicitly

  useOutsideClick({
    ref: ref,
    handler: () => closeMenu(),
  });

  return (
    <Box
      ref={ref}
      bg={HEADER_BG_COLOR}
      color={HEADER_TEXT_COLOR}
      px={4}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo as a React Router Link */}
        <RouterLink to="/"  onClick={closeMenu} style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
          <Box fontWeight="bold" fontSize="lg">
            Calucid Template
          </Box>
        </RouterLink>

        {/* Navigation Links for Desktop */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <RouterLink to="/" style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
            Home
          </RouterLink>
          <RouterLink to="/about" style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
            About
          </RouterLink>
          <RouterLink to="/services" style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
            Services
          </RouterLink>
          <RouterLink to="/contact" style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
            Contact
          </RouterLink>
        </HStack>

        {/* Mobile Menu Toggle */}
        <IconButton
          size="md"
          icon={menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          display={{ md: "none" }}
          onClick={toggleMenu}
          variant="ghost"
          colorScheme="whiteAlpha"
        />
      </Flex>

      {/* Mobile Navigation Menu */}
      <Collapse in={menuOpen} >
  <VStack
    as="nav"
    spacing={0}
    align="start"
    color={HEADER_TEXT_COLOR}
    p={0}
    display={{ md: "none" }}
    position="absolute" // Add this
    top="100%" // Position it directly below the header
    left="0" // Align it to the left edge of the header
    bg={HEADER_BG_COLOR} // Add a background color to match the header
    w="100%" // Correct usage of calc()
    zIndex={9} // Ensure it stays above other content
  >
    <RouterLink
      to="/"
      onClick={closeMenu}
      style={{
        margin: "20px",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: HEADER_TEXT_COLOR,
      }}
    >
      Home
    </RouterLink>
    <RouterLink
      to="/about"
      onClick={closeMenu}
      style={{
        margin: "20px",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: HEADER_TEXT_COLOR,
      }}
    >
      About
    </RouterLink>
    <RouterLink
      to="/services"
      onClick={closeMenu}
      style={{
        margin: "20px",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: HEADER_TEXT_COLOR,
      }}
    >
      Services
    </RouterLink>
    <RouterLink
      to="/contact"
      onClick={closeMenu}
      style={{
        margin: "20px",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        color: HEADER_TEXT_COLOR,
      }}
    >
      Contact
    </RouterLink>
  </VStack>
</Collapse>

    </Box>
  );
};

export default Header;
