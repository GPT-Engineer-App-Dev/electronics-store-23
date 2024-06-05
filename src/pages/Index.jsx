import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    rating: 4,
    category: "Smartphone",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    rating: 5,
    category: "Laptop",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    rating: 3,
    category: "Headphones",
    image: "https://via.placeholder.com/150"
  }
];

const categories = ["All", "Smartphone", "Laptop", "Headphones"];
const ratings = [1, 2, 3, 4, 5];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split(",");
    setPriceRange([Number(value[0]), Number(value[1])]);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = category === "All" || product.name.toLowerCase().includes(category.toLowerCase());
    const matchesPrice = product.price.replace("$", "") >= priceRange[0] && product.price.replace("$", "") <= priceRange[1];
    const matchesRating = product.rating >= rating;
    return matchesCategory && matchesPrice && matchesRating;
  });

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
        <InputGroup mb={6}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </InputGroup>
        <Box mb={6}>
          <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Box>
              <Text>Category</Text>
              <Select value={category} onChange={handleCategoryChange}>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Select>
            </Box>
            <Box>
              <Text>Price Range</Text>
              <Input
                type="text"
                placeholder="e.g., 100,500"
                value={priceRange.join(",")}
                onChange={handlePriceRangeChange}
              />
            </Box>
            <Box>
              <Text>Rating</Text>
              <Select value={rating} onChange={handleRatingChange}>
                {ratings.map((rate) => (
                  <option key={rate} value={rate}>{rate} Stars & Up</option>
                ))}
              </Select>
            </Box>
          </Flex>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
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