import React from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

const FooterStacks = ({ list }) => {
  return (
    <Stack direction={{ base: "column" }} spacing={4}>
      {list.map((item, index) =>
        index === 0 ? (
          <Text fontWeight={"bold"}>{item}</Text>
        ) : (
          <Link key={index}>{item}</Link>
        )
      )}
    </Stack>
  );
};

export default FooterStacks;
