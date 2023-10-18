import { Image, SimpleGrid } from "@mantine/core";
import CustomContainer from "../CustomContainer";
import classes from "./Footer.module.scss";
import { images } from "../../constants/images";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <CustomContainer>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <div className={classes.grid_item_1}>
            <Image src={images.logo} alt="logo" className={classes.logo} />
            <p>Build a modern and creative website with crealand</p>
          </div>
          <SimpleGrid
            className={classes.grid_item_2}
            cols={{ base: 1, sm: 2, xl: 4 }}
          >
            <div>
              <h3>Product</h3>
              <a href="#">Landingpage</a>
              <a href="#">Features</a>
              <a href="#">Documentation</a>
              <a href="#">Referral Program</a>
              <a href="#">Pricing</a>
            </div>
            <div>
              <h3>Services</h3>
              <a href="#">Documentation</a>
              <a href="#">Design</a>
              <a href="#">Themes</a>
              <a href="#">Illustrations</a>
              <a href="#">UI Kit</a>
            </div>
            <div>
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Terms</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h3>More</h3>
              <a href="#">Documentation</a>
              <a href="#">License</a>
              <a href="#">Changelog</a>
            </div>
          </SimpleGrid>
        </SimpleGrid>

        <div className={classes.copy_right}>
          <Image src={images.Heart} alt="heart" />
          <p>Copyright © 2019. Moonfo with love.</p>
        </div>
      </CustomContainer>
    </div>
  );
}
