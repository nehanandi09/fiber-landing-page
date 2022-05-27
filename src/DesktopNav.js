import React from "react";
import { Stack, Link } from "@chakra-ui/react";

const DesktopNav = ({ navItems }) => {
  return (
    <Stack direction={"row"} spacing={12}>
      {navItems.map((item, index) => (
        <Link key={index} size="sm">
          {item}
        </Link>
      ))}
    </Stack>
  );
};

export default DesktopNav;
