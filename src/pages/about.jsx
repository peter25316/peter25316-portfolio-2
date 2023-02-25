import Layout from "./layout";
import Image from "next/image";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const About = () => {
  return (
    <Layout title="Peter Huynh - Hompage">
      <Section>
        <div className="rounded-lg p-3 bg-[#F4EDE4] dark:bg-[#303033] text-center transition-all duration-200">
          Hello, I&apos;m a graduate developer based in the U.S!
        </div>
        <div className="flex flex-col items-center py-5 sm:flex-row">
          <div className="grow text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-4xl">Peter Huynh</h1>
            <p>(Developer / Swimmer / Gamer)</p>
          </div>
          <div className="flex justify-center py-4">
            <Image
              alt="Peter Huynh Profile"
              className="border-2 border-solid rounded-full"
              src="/avatar.png"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
      </Section>
      <Section delay={0.1}>
        <h3 className="section-title">Work</h3>
        <Paragraph>
          As a highly motivated Junior in Computer Science, I&apos;m passionate
          about software engineering and eager to launch my career in the
          hi-tech industry. I&apos;m seeking an internship or entry-level
          opportunity that will allow me to utilize my problem-solving skills
          and attention to detail while gaining valuable experience in the
          field. My current focus is on improving my web app development skills
          with the goal of becoming a full stack developer.
        </Paragraph>

        <div className="flex justify-center mt-6">
          <Link className="btn" href="/projects">
            My Portfolio <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </Section>

      <Section delay={0.2}>
        <h3 className="section-title">Bio</h3>
        <div className="flex mb-1">
          <span className="font-bold mr-3">1997</span> Born in Saigon, Vietnam.
        </div>
        <div className="flex mb-1">
          <span className="font-bold mr-3">2020</span> Completed the
          Associate&apos;s Program in the Science Department at Northern
          Virginia Community College
        </div>
        <div className="flex mb-1">
          <span className="font-bold mr-3">2022</span> Completed the
          Bachelor&apos;s Program in the Undergrad School of Engineering and
          Computing at George Mason University
        </div>
        <div className="flex mb-1">
          <span className="font-bold whitespace-nowrap mr-3">
            2022 - Present
          </span>
          <span>Seeking an internship or entry-level opportunity</span>
        </div>
      </Section>

      <Section delay={0.3}>
        <h3 className="section-title">My Hobbies</h3>
        <Paragraph>
          History, Music, Swimming, Gaming, Web Developing, Mechanial Keyboard
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <h3 className="section-title">My Socials</h3>
        <div className="flex flex-col items-start">
          <a
            rel="noreferrer"
            target="_blank"
            className=" social-item"
            href="https://github.com/peter25316"
          >
            <AiFillGithub />
            <span className="">@peter25316</span>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className=" social-item"
            href="https://www.linkedin.com/in/peter23516/"
          >
            <AiFillLinkedin />
            <span className="">Long Huynh</span>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className=" social-item"
            href="https://twitter.com/home"
          >
            <AiOutlineTwitter />
            <span className="">@peterhuynh25316</span>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
