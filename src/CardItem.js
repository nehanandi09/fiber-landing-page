import React from "react";
import time from "./assets/time.svg";
import code from "./assets/code.svg";
import allSizes from "./assets/allSizes.svg";
import { Box, Stack, Image, Heading, Text, Flex } from "@chakra-ui/react";

const CardItem = () => {
  const items = [
    {
      title: "Build in minutes",
      description:
        "With a selection of premade templates, you can build your portfolio in less than 10 minutes.",
      img: time,
    },
    {
      title: "Add custom CSS",
      description:
        "Customize your personal portfolio even more with the ability to add you rown custom CSS styles",
      img: code,
    },
    {
      title: "Responsive",
      description:
        "All Fiber templates are fully responsive to ensure the experience is seemless across all devices",
      img: allSizes,
    },
  ];
  return (
    <Flex
      py={"12"}
      direction={{ base: "column", md: "row" }}
      spacing={12}
      justifyContent="space-between"
    >
      {items.map((item, index) => (
        <Stack
          marginRight={"10"}
          marginBottom={"10"}
          spacing={{ base: "2", md: "2" }}
        >
          <Image src={item.img} width={"32px"} height={"32px"} />
          <Heading size={"sm"}>{item.title}</Heading>
          <Text color={"blackAlpha.700"}>{item.description}</Text>
        </Stack>
      ))}
    </Flex>
  );
};

export default CardItem;
