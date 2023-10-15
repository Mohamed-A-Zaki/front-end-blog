import { Image } from "@mantine/core";
import { images } from "../../constants/images";
import classes from "./Post.module.css";

export default function Post() {
  return (
    <div className={classes.post}>
      <Image src={images.post} alt="post-image" />

      <div className={classes.content}>
        <h2 className="roboto">Future of Work</h2>
        <p>Majority of peole will work in jobs that don’t exist today.</p>
        
        <div className={classes.profile}>
          <Image src={images.post_profile} alt="post profile" />
          <div className={classes.profile_info}>
            <h3>Johanna Murray</h3>
            <span>Verified writer</span>
          </div>
          <div className={classes.date}>02 May</div>
        </div>
      </div>
    </div>
  );
}
