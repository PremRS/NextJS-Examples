import { getUserCategory } from "../../../helpers/Util";

export default function FilteredUsers(props) {
  const filteredData = props.data;

  return (
    <>
      <h1>Users Filtered</h1>
      <p>{JSON.stringify(filteredData)}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = context.params.users;

  const response = await getUserCategory({
    userId: data[0],
    category: data[1],
  });

  return {
    props: {
      data: response,
    },
  };
}
