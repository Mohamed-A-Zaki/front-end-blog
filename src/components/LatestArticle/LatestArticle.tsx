import { Image } from "@mantine/core";
import { images } from "../../constants/images";
import classes from "./LatestArticle.module.scss";

export default function LatestArticle() {
  return (
    <>
      <div className={classes.article}>
        <div>
          <Image src={images.post} />
        </div>
        <div>
          <h4 className="roboto">Help children get better education</h4>
          <span>Jun 27, 2022</span>
        </div>
      </div>
    </>
  );
}
