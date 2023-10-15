import { Container } from "@mantine/core";

export type CustomContainerProps = {
  children: React.ReactNode;
};
export default function CustomContainer({ children }: CustomContainerProps) {
  return <Container size={"lg"}>{children}</Container>;
}
