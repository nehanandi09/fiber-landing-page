import React from "react";
import heroImage from "./assets/hero-Illustration.png";
import star from "./assets/star.svg";
import checkMark from "./assets/Checkmark.svg";
import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

const HeroSection = () => {
  const noOfStars = 5;
  const checkedFeatures = ["No Credit Card Requried", "10 Free Templates"];
  return (
    <Box bg={"purple.100"} px={"24"}>
      <Stack
        miniH={"100vh"}
        direction={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
      >
        <Flex py={8} flex={1} align={"centre"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Flex spacing={4} direction={"row"} alignItems={"center"}>
              {Array.from({ length: noOfStars }).map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt={"Star"}
                  width={"16px"}
                  height={"16px"}
                  mr={1}
                  display={"inline"}
                />
              ))}
              <Text display={"inline"}> Rated 4.8/5 (243 reviews)</Text>
            </Flex>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              Create your Portfolio
              <br />
              in minutes
            </Heading>
            <Text color={"blackAlpha.700"}>
              With Fiber, you can setup your own personal portfolio in minutes{" "}
              <br /> with dozens of premade, beautiful templates
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              alignItems={"center"}
            >
              <Button
                bg={"purple.800"}
                color={"white"}
                fontWeight={"bold"}
                py={6}
                w={{ base: "full", md: "auto" }}
                _hover={{ bg: "purple.900", color: "white" }}
              >
                Start Free Trial
              </Button>
              <Link
                color={"purple.800"}
                textDecoration={"underline"}
                fontWeight={"bold"}
              >
                View Examples
              </Link>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={8}>
              {checkedFeatures.map((feature, index) => (
                <Flex key={index} alignItems={"center"}>
                  <Image src={checkMark} alt={"tick"} />
                  <Text color={"blackAlpha.700"} px={"2"}>
                    {feature}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"}>
          <Image
            position={"relative"}
            bottom={{ md: "10" }}
            right={{ md: "10" }}
            src={heroImage}
            alt={"hero-image"}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default HeroSection;
