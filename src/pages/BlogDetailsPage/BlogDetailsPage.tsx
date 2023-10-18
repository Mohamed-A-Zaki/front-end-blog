import { Grid } from "@mantine/core";
import classes from "./BlogDetails.module.scss";
import LatestArticles from "../../components/LatestArticlesList";
import ArticleDetails from "../../components/ArticleDetails";
import CustomContainer from "../../components/CustomContainer";
import TagsList from "../../components/TagsList";

export default function BlogDetails() {
  return (
    <>
      <CustomContainer>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <ArticleDetails />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <div className={classes.sidebar}>
              <LatestArticles />
              <TagsList />
            </div>
          </Grid.Col>
        </Grid>
      </CustomContainer>
    </>
  );
}
