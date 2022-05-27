import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  Button,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Collapse,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navItems = ["Community", "Pricing", "Features"];
  return (
    <Box px={{ base: 24 }} py={{ base: 8 }} bg={"purple.100"}>
      <Flex
        flex={{ base: 1, md: "auto" }}
        ml={{ base: -2 }}
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <GrClose w={3} h={3} /> : <GiHamburgerMenu w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
      <Flex
        flex={{ base: 1 }}
        justifyContent={{
          base: "center",
          md: "space-between",
        }}
        alignItems={"center"}
      >
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontWeight="bold"
        >
          Fiber
        </Text>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav navItems={navItems} />
        </Flex>
        <Stack direction={"row"} spacing={12}>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight="bold"
            variant={"link"}
            color={"black"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"purple.800"}
            _hover={{ bg: "purple.900", color: "white" }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
};

export default Navbar;
