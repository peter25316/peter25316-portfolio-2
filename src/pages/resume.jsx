import Layout from "./layout";
import { motion } from "framer-motion";
import Section from "@/components/section";

const Resume = () => {
  return (
    <Layout title="Resume">
      <Section>
        <a
          className="btn mt-14 md:mt-8"
          rel="noreferrer"
          target="_blank"
          href="/Resume_Long_Huynh.pdf"
        >
          Download
        </a>
      </Section>
      <motion.iframe
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 bottom-0 w-10/12 h-1/2 sm:h-3/5 md:h-4/6 m-auto md:max-w-3xl"
        src="/Resume_Long_Huynh.pdf"
      ></motion.iframe>
    </Layout>
  );
};

export default Resume;
