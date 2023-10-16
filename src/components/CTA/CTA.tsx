import classes from "./CTA.module.css";

import { images } from "./../../constants/images";
import CustomContainer from "../CustomContainer";
import { Button, Group, Image, Input, SimpleGrid } from "@mantine/core";

export default function CTA() {
  return (
    <>
      <Image src={images.wave} alt="wave" />
      <div className={classes.content}>
        <CustomContainer>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={10}>
            <div className={classes.grid_item_1}>
              <h2 className={`${classes.heading} roboto`}>
                Get our stories delivered From us to your inbox weekly.
              </h2>
              <Group gap={7}>
                <Input className={classes.input} placeholder="Your Email" />
                <Button className={classes.btn}>Get Started</Button>
              </Group>
              <p className={classes.paragraph}>
                Get a response tomorrow if you submit by 9pm today. If we
                received after 9pm will get a reponse the following day.
              </p>
            </div>
            <div className={classes.grid_item_2}>
              <div className={classes.dark_square}></div>
              <div className={classes.red_square}></div>
              <center className={classes.article}>
                <Image className={classes.image} src={images.cta} alt="cta" />
                <div className={classes.artcle_content}>
                  <h3 className="roboto">The best aticles every week</h3>
                  <p>
                    Our insurance plans offers are priced the same everywhere
                    else.
                  </p>
                </div>
              </center>
            </div>
          </SimpleGrid>
        </CustomContainer>
      </div>
    </>
  );
}
