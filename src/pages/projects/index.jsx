import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "../layout";
import Section from "@/components/section";
import sortVisual from "../../../public/sorting-visualization.png";
import quizzcal from "../../../public/quizzical-landing.png";
import weatherBot from "../../../public/weatherbot.png";
import portfolioLight from "../../../public/portfolio-light.png";
import portfolioDark from "../../../public/portfolio-dark.png";
import { ThemeContext } from "@/components/theme";
import { useContext } from "react";

const Projects = () => {
  const { theme: dark } = useContext(ThemeContext);
  return (
    <Layout title="Projects">
      <Section>
        <div>
          <h3 className="section-title">Works</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="mb-4 text-center">
              <Link href="/projects">
                <Image className="rounded-lg" src={sortVisual} />
                <p className="text-xl my-1">Sorting Visualization</p>
                <p className="text-sm">
                  A web application that visualize sorting visualization
                </p>
              </Link>
            </div>

            <div className="mb-4 text-center">
              <Link href="/projects">
                <Image className="rounded-lg" src={quizzcal} />
                <p className="text-xl my-1">Quizzical</p>
                <p className="text-sm">
                  Quiz WebApp accesses trivia questions from the Open Trivia
                  Database API.
                </p>
              </Link>
            </div>

            <div className="mb-4 text-center">
              <Link href="/projects">
                <Image className="rounded-lg" src={weatherBot} />
                <p className="text-xl my-1">Weather Bot</p>
                <p className="text-sm">
                  A Weather Discord Bot reports the weather around the world
                  with just few simple commands.
                </p>
              </Link>
            </div>

            <div className="mb-4 text-center">
              <Link href="/projects">
                <Image
                  className="rounded-lg"
                  src={dark ? portfolioLight : portfolioDark}
                />
                <p className="text-xl my-1">Portfolio</p>
                <p className="text-sm">
                  Responsive website built with Next.js and styled with Tailwind
                  CSS
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
