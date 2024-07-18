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
    <Layout title="Quizzical">
      <Container>
        <Section>
          <Title>
            Quizzical
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
              <Meta>Website</Meta>
              <a
                href="https://quiz-ph.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                https://quiz-ph.vercel.app/{" "}
              </a>
              <FiExternalLink className="mx-1 icon" />
            </ListItem>
            <ListItem className="flex items-center">
              <Meta>Source</Meta>
              <a
                href="https://github.com/peter25316/quizzical"
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
              <span>
                Node.js, React.js, JavaScript, Rest API, HTML, CSS, Vercel
              </span>
            </ListItem>
          </List>
          <WorkParagraph>
            Quzzical is a web application that allows users to test their
            knowledge by answering trivia questions. The app fetches questions
            from an external API and displays them on the website, allowing
            users to select their answers and receive feedback on their
            performance.
          </WorkParagraph>
          <WorkImage
            src="/works/quizzical/quizzical-landing.png"
            width={1112}
            height={651}
          />
        </Section>
        <Section delay={0.1}>
          <WorkImage
            src="/works/quizzical/quizzical-quiz.png"
            width={1112}
            height={651}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Work;
