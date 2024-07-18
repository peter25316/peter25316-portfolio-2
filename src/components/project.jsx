import NextLink from "next/link";
import Image from "next/image";
import { Heading, Box, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ThemeContext } from "./theme";
import { useContext } from "react";

const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" className="link">
      Projects
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
      <Heading display="inline-block" as="h3" fontSize={20}>
        {children}
      </Heading>
    </span>
  </Box>
);

const WorkImage = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="w-full rounded-lg my-4"
  />
);

const Meta = ({ children }) => {
  const { theme: dark } = useContext(ThemeContext);
  return (
    <Badge
      mr={2}
      color={dark ? "green.200" : "green.800"}
      bg={dark ? "rgba(154, 230, 180, 0.16)" : "green.100"}
    >
      {children}
    </Badge>
  );
};

export { Title, WorkImage, Meta };
