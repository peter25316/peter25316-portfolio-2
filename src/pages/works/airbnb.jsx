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
    <Layout title="Boston Airbnb Analysis">
      <Container>
        <Section>
          <Title>
            Boston Airbnb Analysis
            <Badge
              mx={2}
              color={dark ? "gray.200" : "gray.800"}
              bg={dark ? "#3F4044ff" : "gray.100"}
            >
              2024
            </Badge>
          </Title>
          <List ml={4} my={8}>
            <ListItem className="flex items-center">
              <Meta>Source</Meta>
              <a
                href="https://github.com/peter25316/boston-airbnb-analysis"
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
              <span>Python, Machine Learning,Jupyter Notebook</span>
            </ListItem>
          </List>
          <WorkImage
            src="/works/airbnb/airbnb.png"
            alt="Airbnb"
            width={636}
            height={372}
          />
        </Section>

        <Section delay={0.1}>
          <h4 className="project-section-title">Business Understanding</h4>
          <WorkParagraph>
            Airbnb is an online platform that connects travelers with local
            hosts offering homestays. Founded in 2008 by Nathan Blecharczyk, Joe
            Gebbia, and Brian Chesky, Airbnb generates revenue through a 10%
            commission from hosts and a 3% transaction fee from travelers. This
            analysis aims to identify the factors influencing Airbnb prices in
            Boston, providing insights for both hosts and travelers.
          </WorkParagraph>
        </Section>
        <Section delay={0.2}>
          <h4 className="project-section-title">Exploratory Data Analysis</h4>
          <h5 className="project-section-sub-title">
            a. How does specific areas affect Boston Airbnb Price?
          </h5>
          <WorkParagraph>
            To understand how different areas affect Airbnb prices in Boston,
            the data was grouped by neighborhoods, and their average prices were
            calculated. The following boxplot shows the price distribution
            across various neighborhoods. It indicates that some neighborhoods,
            such as Longwood Medical Area and Bay Village, have higher median
            prices, while others like Roslindale and Jamaica Plain have lower
            median prices. This suggests that location significantly influences
            Airbnb pricing.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/price-vs-neighborhood.png"
            width={709}
            height={621}
          />
          <WorkParagraph>
            Additionally, the geographical distribution of Airbnb listings was
            analyzed by plotting the exact locations of the listings and the
            estimated neighborhood locations against the prices. In the scatter
            plot below, the orange spots represent the exact locations of Airbnb
            listings, while the blue spots indicate neighborhood estimates. The
            plot demonstrates that denser distributions of listings,
            particularly in central and popular areas, tend to correlate with
            higher prices.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/price-based-on-area.png"
            width={718}
            height={511}
          />
          <WorkParagraph>
            These visualizations highlight the importance of neighborhood and
            location density in determining the price of Airbnb listings in
            Boston. Higher prices are generally found in more densely populated
            and centrally located neighborhoods.
          </WorkParagraph>
        </Section>
        <Section delay={0.3}>
          <h5 className="project-section-sub-title">
            b. How Does Different Type of House Affect Price?
          </h5>
          <WorkParagraph>
            Different types of houses have distinct impacts on Airbnb prices.
            The scatter plot below shows the distribution of various property
            types in Boston, with each type represented by a different color.
            This visualization helps in understanding how property types are
            spread across the city and their correlation with price.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/property-type-distribution.png"
            width={718}
            height={511}
          />
          <WorkParagraph>
            Apartments (orange) are the most common and generally have higher
            prices compared to other types such as camper/RV (pink) and boat
            (light blue). This suggests that local hosts often purchase
            apartments specifically for renting out on Airbnb, leveraging their
            higher rental value. Less common property types like villas (purple)
            and entire floors (green) command higher prices, while options like
            dorms (light green) and boats are more niche and less expensive.
          </WorkParagraph>
        </Section>
        <Section delay={0.4}>
          <h5 className="project-section-sub-title">
            c. How Does Room Type Affect Airbnb Price?
          </h5>
          <WorkParagraph>
            Room type is a significant factor in determining Airbnb prices. The
            following bar plot shows the total count of different room types in
            Boston. Entire homes/apartments are the most common, followed by
            private rooms and shared rooms.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/total-room-type.png"
            width={715}
            height={511}
          />
          <WorkParagraph>
            The next plot illustrates the average prices for different property
            types, categorized by room type (entire home/apartment, private
            room, and shared room). This visualization reveals that entire
            homes/apartments (blue) consistently have higher prices compared to
            private rooms (orange) and shared rooms (green) across all property
            types.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/price-room-and-property.png"
            width={709}
            height={581}
          />
          Entire homes/apartments are the most frequently listed and tend to
          command higher prices. Private rooms are less expensive, while shared
          rooms are the least common and generally have the lowest prices. The
          room type significantly impacts the overall pricing strategy for
          Airbnb listings in Boston.
        </Section>
        <Section delay={0.5}>
          <h5 className="project-section-sub-title">
            d. Influence of Accommodations on Price?
          </h5>
          <WorkParagraph>
            The number of accommodations (i.e., how many guests a property can
            accommodate) is another critical factor affecting Airbnb prices. The
            boxplot below shows the relationship between the number of guests a
            property can accommodate and its price.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/price-vs-accommodates.png"
            width={709}
            height={513}
          />
          <WorkParagraph>
            The plot demonstrates a clear positive correlation: as the number of
            accommodations increases, the price generally rises. Properties that
            accommodate more guests tend to have higher prices, reflecting their
            larger size and the added value of hosting more people.
          </WorkParagraph>
          <WorkParagraph>
            The number of guests a property can accommodate significantly
            influences its price, with larger properties that can host more
            guests commanding higher rates. This trend highlights the importance
            of considering guest capacity when setting Airbnb prices.
          </WorkParagraph>
        </Section>
        <Section delay={0.6}>
          <h5 className="project-section-sub-title">
            d. Seasonal Effect on Prices
          </h5>
          <WorkParagraph>
            Seasonal trends and weekly patterns play a crucial role in
            determining Airbnb prices. The following plots illustrate how prices
            fluctuate over different times of the year and days of the week. The
            first plot shows the average price trend over a year. It reveals
            that prices tend to peak during the holiday season, such as around
            December, and drop significantly after the holiday period. This
            pattern suggests that demand for Airbnb accommodations increases
            during holiday seasons, leading to higher prices.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/availability-throughout-year.png"
            width={398}
            height={278}
          />
          <WorkParagraph>
            The second plot further supports this trend by highlighting another
            seasonal variation. The price peaks around major holidays and summer
            months, indicating that travelers are more likely to book Airbnbs
            during these times, driving prices up.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/price-throughout-year.png"
            width={398}
            height={278}
          />
          <WorkParagraph>
            The third plot displays the price variation over different days of
            the week. Prices tend to be higher on weekends (Friday and Saturday)
            compared to weekdays, reflecting the increased demand for short-term
            stays over weekends.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/weekday-trend.png"
            width={447}
            height={333}
          />
          <WorkParagraph>
            Airbnb prices in Boston exhibit significant seasonal and weekly
            fluctuations. Prices are higher during holiday seasons and weekends
            due to increased demand, while they tend to be lower during off-peak
            times and weekdays. This information is valuable for both hosts and
            travelers to optimize booking strategies and pricing.
          </WorkParagraph>
        </Section>
        <Section delay={0.7}>
          <h4 className="project-section-title">
            Machine Learning - Data Training
          </h4>
          <WorkParagraph>
            To quantitatively assess the factors influencing Airbnb prices, a
            Linear Regression model was trained. The features included the
            number of accommodates, bedrooms, bathrooms, and room type. Missing
            values were imputed using the mean for numerical columns and the
            most frequent value for categorical columns.
          </WorkParagraph>
          <WorkParagraph className="font-bold">Results:</WorkParagraph>
          <UnorderedList ml={8}>
            <ListItem>Mean Squared Error (MSE): 28172.81</ListItem>
            <ListItem>
              Model Coefficients:
              <UnorderedList ml={8}>
                <ListItem>Accomodates: 8.09</ListItem>
                <ListItem>Bedrooms: 34.11</ListItem>
                <ListItem>Bathrooms: 32.93</ListItem>
                <ListItem>Room Type (Private room): -97.92</ListItem>
                <ListItem>Room Type (Shared room): -98.29</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <WorkParagraph>
            The chart below shows the coefficients of the trained model for each
            feature, illustrating their impact on price. Positive values
            indicate a positive influence on price, while negative values
            indicate a negative influence.
          </WorkParagraph>
          <WorkImage
            src="/works/airbnb/linear-regression.png"
            width={767}
            height={978}
          />
          <WorkParagraph>
            These results indicate that the number of bedrooms and bathrooms
            significantly increases the price, while private and shared rooms
            typically have lower prices compared to entire homes/apartments.
            Accommodations also positively influence the price, reflecting that
            larger properties can charge more.
          </WorkParagraph>
        </Section>
        <Section delay={0.8}>
          <h4 className="project-section-title">Conclusion</h4>
          <WorkParagraph>
            The analysis identifies several key factors influencing Airbnb
            prices in Boston:
          </WorkParagraph>
          <UnorderedList ml={8}>
            <ListItem>
              <span className="font-bold">Neighborhood</span>: Location
              significantly affects pricing, with certain areas commanding
              higher rates.
            </ListItem>
            <ListItem>
              <span className="font-bold">Property Type</span>: Entire homes and
              apartments are priced higher than private or shared rooms.
            </ListItem>
            <ListItem>
              <span className="font-bold">Room Type</span>: The type of room has
              a notable impact on pricing.
            </ListItem>
            <ListItem>
              <span className="font-bold">Accommodations</span>: More bedrooms
              and bathrooms lead to higher prices.
            </ListItem>
            <ListItem>
              <span className="font-bold">Seasonality</span>: Prices fluctuate
              with seasonal demand, peaking during holidays and summer.
            </ListItem>
          </UnorderedList>
          <WorkParagraph>
            These insights can help hosts optimize their listings for better
            profitability and assist travelers in finding affordable
            accommodation based on their preferences.
          </WorkParagraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Work;
