import React from "react";
import pageImage from "./assets/PageImage.png";
import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Box py={8} px={10} bg={"purple.800"} rounded={"md"}>
      <Stack
        miniH={"100vh"}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Flex flex={1} align={"centre"} direction={"column"}>
          <Stack spacing={2}>
            <Heading size={"xl"} color={"white"}>
              Diversify your portfolio
            </Heading>
            <Text color={"gray.50"} py={"2"}>
              Create an even more impressive portfolio by creating case studies
              for your projects. Simply follow our step-by-step guide
            </Text>
            <Button
              bg={"white"}
              color={"purple.800"}
              fontWeight={"bold"}
              py={6}
              w={"50%"}
            >
              Start Free Trial
            </Button>
          </Stack>
        </Flex>
        <Image
          src={pageImage}
          height={"xl"}
          px={4}
          position="relative"
          top={"8"}
        />
      </Stack>
    </Box>
  );
};

export default Portfolio;
