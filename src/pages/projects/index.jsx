import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "../layout";
import Section from "@/components/section";
import sortVisual from "../../../public/sorting-visualization.png";
import quizzcal from "../../../public/quizzical-landing.png";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Section>
        <div>
          <h3 className="section-title">Works</h3>
          <div className="flex flex-wrap gap-4">
            <div className="basis-64 flex-1 md:basis-0 text-center">
              <Link href="/projects">
                <Image className="rounded-lg" src={sortVisual} />
              </Link>
              <p className="text-xl my-1">Sorting Visualization</p>
              <p className="text-sm">
                A web application that visualize sorting visualization
              </p>
            </div>

            <div className="basis-64 flex-1 md:basis-0 ">
              <Link href="/projects">
                <Image className="rounded-lg" src={quizzcal} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
