import React from "react";
import CardItem from "./CardItem";
import ReviewCard from "./ReviewCard";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Portfolio from "./Portfolio";

const MainLayout = () => {
  return (
    <Box p={"24"}>
      <Stack direction={{ base: "column" }}>
        <Heading size="md" color={"purple.700"} fontWeight={"semibold"}>
          Why Fiber
        </Heading>
        <Heading size="lg">
          A good portfolio means good <br /> employability
        </Heading>
        <CardItem />
        <Portfolio />
        <ReviewCard />
      </Stack>
    </Box>
  );
};

export default MainLayout;
