import Post from "../Post";
import { Button, SimpleGrid, useMantineTheme } from "@mantine/core";
import CustomContainer from "../CustomContainer";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function PostsList() {
  const theme = useMantineTheme();
  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <CustomContainer>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={20}
          verticalSpacing={0}
        >
          {[...Array(9)].map((_, index) => (
            <Post key={index} />
          ))}
        </SimpleGrid>

        <Button
          variant="outline"
          radius={"md"}
          style={{
            margin: "auto",
            display: "block",
            color: theme.colors.main_color[0],
            borderColor: theme.colors.main_color[0],
            borderWidth: "2px",
          }}
        >
          More Articles
          <IconArrowNarrowRight style={{ marginLeft: "7px" }} />
        </Button>
      </CustomContainer>
    </div>
  );
}
