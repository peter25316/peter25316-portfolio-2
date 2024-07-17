import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "@/components/layout";
import thumbSortVisual from "../../../public/sorting-visualization.png";
import thumbQuizzcal from "../../../public/quizzical-landing.png";
import thumbAirbnb from "../../../public/airbnb.png";
import thumbWeatherBot from "../../../public/weatherbot.png";
import portfolioLight from "../../../public/portfolio-light.png";
import portfolioDark from "../../../public/portfolio-dark.png";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
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
        <SimpleGrid gap={6} minChildWidth="230px">
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
              id=""
              title="Sorting Visualization"
              thumbnail={thumbSortVisual}
            >
              A web application that visualize sorting algorithm
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="" title="Quizzical" thumbnail={thumbQuizzcal}>
              Quiz WebApp accesses trivia questions from the Open TriviaDatabase
              API.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="" title="Weather Bot" thumbnail={thumbWeatherBot}>
              A Weather Discord Bot reports the weather around the world with
              just few simple commands.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id=""
              title="Portfolio"
              thumbnail={dark ? portfolioLight : portfolioDark}
            >
              A responsive portfolio website built with Next.js and styled with
              Tailwind CSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
