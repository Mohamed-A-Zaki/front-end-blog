import BreadcrumbsComp from "../BreadcrumbsComp";
import { Image } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import classes from "./ArticleDetails.module.scss";
import { images } from "../../constants/images";

export default function ArticleDetails() {
  return (
    <div className={classes.article_details}>
      <BreadcrumbsComp />
      <Image src={images.post} className={classes.image} />
      <h5 className={`${classes.category} roboto`}>EDUCATION</h5>
      <h2 className={`${classes.title} roboto`}>
        Help children get better education
      </h2>
      <p className={classes.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
        porta lorem mollis. Morbi tristique senectus et netus. Mattis
        pellentesque id nibh tortor id aliquet lectus proin.
      </p>

      <div className={classes.text_area}>
        <Textarea placeholder="Leave your comment here..." minRows={5} />
        <Button>Send</Button>
      </div>
    </div>
  );
}
