import { Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh" // Ensures full height
      textAlign="center"
      px={4}
    >
      <VStack spacing={6} maxW="container.md">
        <Heading color="gray.700">Your Menu Will Go Here</Heading>
        <Text fontSize="lg" color="gray.500">
          This is a placeholder for your restaurant’s menu.
        </Text>
        <Text fontSize="lg" color="gray.500">
          Once you decide to move forward, we can fully set up your menu, including your food and drink options.
        </Text>
        <Text fontSize="lg" color="gray.500">
          Your customers will be able to browse your offerings easily, making their experience seamless.
        </Text>
        <Text fontSize="lg" color="gray.500">
          When you're ready, just let us know, and we’ll take care of everything for you!
        </Text>
      </VStack>

      {/* Branding Message with Hidden Link Styling */}
      <Text fontSize="md" color="gray.400" mt={12}>
        Brought to you by{" "}
        <Link
          href="https://calucid.com"
          isExternal
          color="inherit"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <strong>Calucid</strong>
        </Link>
      </Text>
    </Flex>
  );
};

export default Menu;
