import { Container, SimpleGrid, Image, Input, Button } from "@mantine/core";
import { images } from "../../constants/images";
import classes from "./HeroSection.module.css";
import { IconSearch } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <div>
            <h1 className={`${classes.heading} roboto`}>
              Read the most interesting articles
            </h1>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className={classes.search}>
              <div>
                <IconSearch />
                <Input placeholder="Search article" />
              </div>
              <Button>Search</Button>
            </div>
            <div className={classes.tags}>
              <span>Popular Tags :</span>
              <div className={classes.tag_list}>
                <div className={classes.tag}>Design</div>
                <div className={classes.tag}>User Experience</div>
                <div className={classes.tag}>User Interface</div>
              </div>
            </div>
          </div>
          <div>
            <Image src={images.hero} alt="hero" />
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
}
