import { Breadcrumbs } from "@mantine/core";
import { Link } from "@mongez/react-router";
import classes from "./BreadCrumbComp.module.scss";

const items = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "#" },
  { title: "Article Title", href: "#" },
].map((item, index) => (
  <Link href={item.href} key={index}>
    {item.title}
  </Link>
));

export default function BreadcrumbsComp() {
  return (
    <>
      <Breadcrumbs className={classes.breadcrumb}>{items}</Breadcrumbs>
    </>
  );
}
