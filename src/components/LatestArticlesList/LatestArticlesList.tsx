import { Grid } from "@mantine/core";
import LatestArticle from "../LatestArticle";
import classes from "./LatestArticlesList.module.scss";

export default function LatestArticles() {
  return (
    <>
      <div className={classes.latest_articles}>
        <h3 className="roboto">Latest Article</h3>
        <Grid>
          {[...Array(5)].map((_, indx) => {
            return (
              <Grid.Col key={indx} span={{ base: 12, sm: 6, lg: 12}}>
                <LatestArticle />
              </Grid.Col>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
