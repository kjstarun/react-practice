const List = ({ list, currentId, setCurrentId }) => {
  const title = {
    maxWidth: "50%",
  };
  return (
    <>
      {list.map((item) => {
        return (
          <p style={title} onClick={() => setCurrentId(item.id)}>
            {item.title}
          </p>
        );
      })}
      {console.log(currentId)}
    </>
  );
};
export default List;
