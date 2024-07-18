import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  OrderedList,
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
    <Layout title="Discord Weather Bot">
      <Container>
        <Section>
          <Title>
            Discord Weather Bot
            <Badge
              mx={2}
              color={dark ? "gray.200" : "gray.800"}
              bg={dark ? "#3F4044ff" : "gray.100"}
            >
              2020
            </Badge>
          </Title>
          <List ml={4} my={8}>
            <ListItem className="flex items-center">
              <Meta>Website</Meta>
              <a
                href="https://weatherbot.surge.sh/"
                rel="noreferrer"
                target="_blank"
                className="link"
              >
                https://weatherbot.surge.sh/{" "}
              </a>
              <FiExternalLink className="mx-1 icon" />
            </ListItem>
            <ListItem className="flex items-center">
              <Meta>Source</Meta>
              <a
                href="https://github.com/duypham228/Discord-Weather-Bot"
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
                Node.js, JavaScript, Chart.js, API, HTML, CSS, Heroku, Surge
              </span>
            </ListItem>
          </List>
          <WorkImage
            src="/works/weather-bot/weatherbot.png"
            alt="Weather Bot"
            width={1111}
            height={650}
          />
        </Section>
        <Section delay={0.1}>
          <WorkParagraph>
            We build this Weather Discord Bot to help you be able to know the
            weather around the world with just few simple commands. The bot
            reply the report to you in the group message, so you and your
            friends can dicuss where to hang out easier. There is another bot
            available for weather, but the command prefix they use is @ which is
            for mentioning. Therefore, that bot is not working properly for many
            users, so we create this bot to fix that bug and provide even more
            interesting commands.
          </WorkParagraph>
          <WorkParagraph>
            <span className="font-bold">Here&apos;s why:</span>
          </WorkParagraph>
          <UnorderedList ml={8}>
            <ListItem className="mb-2">
              Easy to Use: No setup required. It only takes one command to get
              weather report
            </ListItem>
            <ListItem className="mb-2">
              Lag Free: We ensure that there is always enough capacity for every
              server to get the highest quality possible
            </ListItem>
            <ListItem className="mb-2">
              Stable: Noob Tech Bot will always be available whenever you need
              to know the weather outside
            </ListItem>
            <ListItem className="mb-2">
              Credible: We always retrieves data from most trustworthy weather
              data collectors
            </ListItem>
          </UnorderedList>
          <WorkParagraph>
            <span className="font-bold">For users:</span>
          </WorkParagraph>
          <OrderedList ml={8}>
            <ListItem>
              <span>
                <a
                  href="https://weatherbot.surge.sh/"
                  rel="noreferrer"
                  target="_blank"
                  className="link"
                >
                  Invite
                </a>
              </span>{" "}
              the bot to your server
            </ListItem>
            <ListItem>Grant the bot permission</ListItem>
            <ListItem>Use the bot with commands</ListItem>
          </OrderedList>
          <WorkImage
            src="/works/weather-bot/weather-report.png"
            width={754}
            height={427}
          />
          <WorkImage
            src="/works/weather-bot/forecast.png"
            width={796}
            height={397}
          />
          <WorkImage
            src="/works/weather-bot/air-report.png"
            width={578}
            height={286}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default Work;
