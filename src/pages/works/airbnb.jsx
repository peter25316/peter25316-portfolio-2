import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/project";
import Paragraph from "@/components/paragraph";
import Layout from "@/components/layout";

const Work = () => {
  return (
    <Layout title="Boston Airbnb Analysis">
      <Container>
        <Title>
          Boston Airbnb Analysis <Badge className="badge">2024</Badge>
        </Title>
        <Paragraph></Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
