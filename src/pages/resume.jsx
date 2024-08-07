import Layout from "@/components/layout";
import Section from "@/components/section";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <Layout title="Resume">
      <Section>
        <div className="flex justify-center  mt-12 md:mt-8">
          <a
            className="btn"
            rel="noreferrer"
            target="_blank"
            href="/Resume_Long_Huynh.pdf"
          >
            Download
          </a>
        </div>
      </Section>
      <Section delay={0.1}>
        <motion.iframe
          className="absolute top-0 left-0 right-0 bottom-0 m-auto w-10/12 h-1/2 sm:h-3/5 md:h-4/6 md:max-w-3xl"
          src="/Resume_Long_Huynh.pdf"
        ></motion.iframe>
      </Section>
    </Layout>
  );
};

export default Resume;
