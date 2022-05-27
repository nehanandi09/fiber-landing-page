import React from "react";
import avatar1 from "./assets/UserAvatar.svg";
import avatar2 from "./assets/UserAvatar2.svg";
import avatar3 from "./assets/UserAvatar32.svg";
import { Box, Flex, Button, Heading, Text, Image } from "@chakra-ui/react";

const ReviewCard = () => {
  const users = [
    {
      img: avatar1,
      name: "Sarah Andrews",
      subtitle: "$100k in revenue",
      review:
        "Setting up my portfolio with Fiber took no more than 10 miutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k",
    },
    {
      img: avatar2,
      name: "Matthew Higgins",
      subtitle: "$20k in revenue",
      review:
        "I have been getting A LOT of leads from Fiber since I set up my portfolio. I am very happy with the service.",
    },
    {
      img: avatar3,
      name: "Janice Dave",
      subtitle: "$30k in revenue",
      review:
        "I only started freelancing with Fiber and I have already found a full-time job. The templates are just amazing",
    },
  ];
  return (
    <Box py={12}>
      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        {users.map((user, index) => (
          <Flex
            p={4}
            border="2px"
            borderColor={"blackAlpha.200"}
            rounded={"md"}
            key={index}
            w={["33%", "100%", "33%"]}
            direction={"column"}
            marginBottom={8}
          >
            <Flex direction="row">
              <Image src={user.img} width={"50px"} height={"50px"} />
              <Flex direction={"column"} mx={4}>
                <Heading size="16px" color={"purple.700"}>
                  {user.name}
                </Heading>
                <Text fontWeight={"thin"}>{user.subtitle}</Text>
              </Flex>
            </Flex>
            <Text py={4}>{user.review}</Text>
            <Button
              w={"full"}
              bg={"white"}
              border="2px"
              borderColor={"blackAlpha.100"}
              color={"purple.700"}
              marginTop={"auto"}
              _hover={{ bg: "purple.900", color: "white" }}
            >
              View {user.name.split(" ")[0]}'s portfolio
            </Button>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default ReviewCard;
