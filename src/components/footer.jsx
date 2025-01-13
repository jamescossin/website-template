import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.500" color="white" py={2} textAlign="center">
      <Text>
        Website managed and created by Calucid. &copy; {new Date().getFullYear()}<a href="https://calucid.com"> Calucid.com</a>. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;