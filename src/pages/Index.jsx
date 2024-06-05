import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Box>
          <FaShoppingCart size="24px" />
        </Box>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Welcome to ElectroShop
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" mb={4}>{product.price}</Text>
                <Link color="blue.500" href="#">View Details</Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="gray.800" color="white" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;