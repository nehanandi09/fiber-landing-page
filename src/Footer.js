import React from "react";
import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";
import FooterStacks from "./FooterStacks";

const Footer = () => {
  const siteMap = [
    "Sitemap",
    "Homepage",
    "Pricing",
    "Testimonials",
    "Features",
  ];
  const resrouces = ["Resources", "Support", "Contact", "FAQ"];
  const company = ["Company", "About", "Customers", "Blog"];
  const portfolios = [
    "Portfolios",
    "Sarah Andres",
    "Matthew Higgins",
    "Janice Dave",
  ];
  return (
    <Box px={"24"} bg={"purple.100"} py={8}>
      <Flex py={8} direction="row" justifyContent={"space-between"}>
        <Stack direction={{ base: "column" }}>
          <Heading size="xs">Fiber</Heading>
          <Text>
            With Fiber, you can setup your portfolio in minutes with dozens of
            premade, beautiful templates
          </Text>
          <Text py={4}>Made with love from Netherlands</Text>
        </Stack>
        <FooterStacks list={siteMap} />
        <FooterStacks list={resrouces} />
        <FooterStacks list={company} />
        <FooterStacks list={portfolios} />
      </Flex>
    </Box>
  );
};

export default Footer;
