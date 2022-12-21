const Description = ({ list, currentId, setCurrentId }) => {
  console.log("desc", list);
  return (
    <>
      {list.map((item) => {
        if (item.id === currentId) {
          return (
            <>
              {console.log("desc item",item.description)}
              <p>{item.description}</p>
              {(e) => setCurrentId(null)}
            </>
          );
        }
      })}
    </>
  );
};
export default Description;
