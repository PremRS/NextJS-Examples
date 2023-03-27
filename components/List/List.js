import ListItem from "./List-Item/ListItem";
import styles from "./List.module.css";

export default function List(props) {
  const { items } = props;

  const retrieveLocation = (item) => {
    return (
      item.location ||
      item.address.street +
        "\n" +
        item.address.city +
        "\n" +
        item.address.zipcode
    );
  };

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title || item.name}
          location={retrieveLocation(item)}
          date={item.date}
          image={item.image}
          email={item.email}
        />
      ))}
    </ul>
  );
}
