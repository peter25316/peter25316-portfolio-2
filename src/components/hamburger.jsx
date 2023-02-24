import { GoThreeBars } from "react-icons/go";
import Link from "next/link";
import { Box, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

const Hamburger = (props) => {
  const { dark } = props;
  const btnBg = dark ? "#303033" : "#E2E8F0";
  return (
    <Box display={{ base: "inline-block", md: "none" }}>
      <Menu>
        <MenuButton
          bg="inherit"
          border="1px"
          borderColor="#5B5B5B"
          _hover={{ bg: btnBg }}
          _active={{ bg: btnBg }}
          as={IconButton}
          icon={<GoThreeBars />}
        />
        <MenuList
          bg={dark ? "#2D3748" : "#ffffff"}
          p={4}
          borderColor={dark ? "#5B5B5B" : "#E2E8F0"}
          borderWidth={0.25}
        >
          <div className="flex flex-col items-start gap-2">
            <Link className="nav-item" href="/projects">
              Projects
            </Link>
            <Link className="nav-item" href="/">
              About
            </Link>
            <Link className="nav-item" href="/resume">
              Resume
            </Link>
            <a
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-1"
              href="https://github.com/peter25316/peter25316-portfolio-2"
            >
              <span className="nav-item ">View Source</span>
            </a>
          </div>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Hamburger;

// className="cursor-pointer w-10 h-10 text-3xl ml-auto p-3 rounded-md border border-[#353538]"
