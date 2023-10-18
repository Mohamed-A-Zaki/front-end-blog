import classes from "./TagsList.module.scss";

export default function TagsList() {
  const tags = [
    { id: 1, name: "Medical" },
    { id: 2, name: "Lifestyle" },
    { id: 3, name: "Learn" },
    { id: 4, name: "Healthy" },
    { id: 5, name: "Food" },
    { id: 6, name: "Diet" },
    { id: 7, name: "Education" },
  ];
  return (
    <>
      <div className={classes.tags}>
        <h3 className="roboto">Tags</h3>

        <div className={classes.tags_list}>
          {tags.map((ele) => {
            return (
              <div className={`roboto ${classes.tag}`} key={ele.id}>
                {ele.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
