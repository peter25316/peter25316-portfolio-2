import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" className="link">
      Projects
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </span>
  </Box>
);

const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} atl={alt} mb={4} />
);

const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

export { Title, WorkImage, Meta };
