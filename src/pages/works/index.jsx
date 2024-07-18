import Layout from "@/components/layout";
import thumbSortVisual from "../../../public/sorting-visualization.png";
import thumbQuizzcal from "../../../public/works/quizzical/quizzical-landing.png";
import thumbAirbnb from "../../../public/works/airbnb/airbnb.png";
import thumbWeatherBot from "../../../public/works/weather-bot/weatherbot.png";
import portfolioLight from "../../../public/portfolio-light.png";
import portfolioDark from "../../../public/portfolio-dark.png";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";

const Projects = () => {
  const { theme: dark } = useContext(ThemeContext);
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid gap={6} minChildWidth="212px">
          <Section>
            <WorkGridItem
              id="airbnb"
              title="Boston Airbnb Analysis"
              thumbnail={thumbAirbnb}
            >
              An analysis on what factors influence Boston Airbnb&apos;s Price
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sorting-visualization"
              title="Sorting Visualization"
              thumbnail={thumbSortVisual}
            >
              A web application that visualize sorting algorithm
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="quizzical"
              title="Quizzical"
              thumbnail={thumbQuizzcal}
            >
              Quiz WebApp accesses trivia questions from the Open TriviaDatabase
              API.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="portfolio"
              title="Portfolio"
              thumbnail={dark ? portfolioLight : portfolioDark}
            >
              A responsive portfolio website built with Next.js and styled with
              Tailwind CSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} borderWidth="1px 0 0 0" borderColor="#6b7280" />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid gap={6} minChildWidth="230px">
          <Section delay={0.3}>
            <WorkGridItem
              id="weather-bot"
              title="Weather Bot"
              thumbnail={thumbWeatherBot}
            >
              A Weather Discord Bot reports the weather around the world with
              just few simple commands.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
