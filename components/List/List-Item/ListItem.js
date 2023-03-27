import Button from "../../Button/Button";
import classes from "./ListItem.module.css";

function ListItem(props) {
  const { title, date, email, location, id } = props;

  const data = date
    ? new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : email;

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = date ? `/fbr/events/${id}` : `/ppr/user/${id}`;
  const exploreData = date ? "Explore Event" : "Explore User";

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{data}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>{exploreData}</span>
            <span className={classes.icon}> {">"} </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
