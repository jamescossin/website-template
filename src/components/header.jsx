import { Box, Flex, HStack, IconButton, VStack, Collapse, useOutsideClick } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useRef, useState } from "react";

// Color Variables
const HEADER_BG_COLOR = "gray.800";
const HEADER_TEXT_COLOR = "white";
const LINK_HOVER_COLOR = "gray";

// Website Name
const LogoName = "Calucid Template";

// Page Links Configuration
const PAGES = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  {name: "Visit Us", path: "/visit"},
  {name: "About", path: "/about"},
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useOutsideClick({ ref, handler: closeMenu });

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
        {/* Logo */}
        <RouterLink to="/" onClick={closeMenu} style={{ textDecoration: "none", color: HEADER_TEXT_COLOR }}>
          <Box fontWeight="bold" fontSize="lg">{LogoName}</Box>
        </RouterLink>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {PAGES.map(({ name, path }) => (
            <RouterLink
              key={name}
              to={path}
              style={{
                textDecoration: "none", 
                color: HEADER_TEXT_COLOR, 
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = LINK_HOVER_COLOR)}
              onMouseLeave={(e) => (e.target.style.color = HEADER_TEXT_COLOR)}
            >
              {name}
            </RouterLink>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      <VStack
        as="nav"
        spacing={0}
        align="start"
        color={HEADER_TEXT_COLOR}
        p={0}
        display={{ md: "none" }}
        position="absolute"
        top="100%"
        left="0"
        bg={HEADER_BG_COLOR}
        w="100%"
        zIndex={9}
        style={{
          maxHeight: menuOpen ? "300px" : "0px", // Adjust max height based on content
          opacity: menuOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out",
        }}
      >
        {PAGES.map(({ name, path }) => (
          <RouterLink
            key={name}
            to={path}
            onClick={closeMenu}
            style={{
              margin: "20px",
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              color: HEADER_TEXT_COLOR,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = LINK_HOVER_COLOR)}
            onMouseLeave={(e) => (e.target.style.color = HEADER_TEXT_COLOR)}
          >
            {name}
          </RouterLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Header;
