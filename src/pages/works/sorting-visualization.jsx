import {
  Container,
  Badge,
  UnorderedList,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { Title, WorkImage, Meta } from "@/components/project";
import { WorkParagraph } from "@/components/paragraph";
import Layout from "@/components/layout";
import Section from "@/components/section";

import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

const Work = () => {
  const { theme: dark } = useContext(ThemeContext);

  return (
    <Layout title="Sorting Visualization">
      <Container>
        <Section>
          <Title>
            Sorting Visualization
            <Badge
              mx={2}
              color={dark ? "gray.200" : "gray.800"}
              bg={dark ? "#3F4044ff" : "gray.100"}
            >
              2023
            </Badge>
          </Title>
          <List ml={4} my={8}>
            <ListItem className="flex items-center">
              <Meta>Source</Meta>
              <a
                href="https://github.com/peter25316/Sorting-Visualization"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                Github{" "}
              </a>
              <FiExternalLink className="mx-1 icon" />
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Node.js, React.js, JavaScript, HTML, CSS</span>
            </ListItem>
          </List>
          <WorkImage
            src="/sorting-visualization.png"
            alt="Airbnb"
            width={1112}
            height={651}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Work;
