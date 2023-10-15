import Post from "../Post";
import { SimpleGrid } from "@mantine/core";
import CustomContainer from "../CustomContainer";

export default function PostsList() {
  return (
    <>
      <CustomContainer>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={20}
          verticalSpacing={0}
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          {[...Array(9)].map((_, index) => (
            <Post key={index} />
          ))}
        </SimpleGrid>
      </CustomContainer>
    </>
  );
}
