import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;