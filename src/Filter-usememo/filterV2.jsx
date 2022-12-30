import { useEffect } from "react";
import { useMemo, useState } from "react";

const FilterV2 = () => {
  console.log("render");
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const isMatchingCharacter = (str, char) => {
    if (!str) return false;
    str = str.toLowerCase();
    char = char.toLowerCase();
    return str.match(char);
  };
  //   useEffect(() => {
  //     fetch("https://gorest.co.in/public/v2/users")
  //       .then((data) => data.json)
  //       .then((data) => setList(data));
  //   }, []);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/posts", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer e82dcbee35c9cea86b4c51f0d57bc5a1af08364d42deb5618cf389b002eb2236",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  console.log(list);

  const filterData = (search) => {
    console.log("filter", search);
    if (search.length > 0) {
      const newArr = list.filter((item) => {
        const { title, description, category } = item;
        if (isMatchingCharacter(title, search)) {
          return true;
        }
        if (isMatchingCharacter(description, search)) {
          return true;
        }
        if (isMatchingCharacter(category, search)) {
          return true;
        }
        return false;
      });
      return newArr;
    } else {
      return [];
    }
  };

  //   const Test = useMemo(() => {
  //     filterData(" ");
  //     console.log("usememo[]");
  //   }, []);

  const List = useMemo(() => {
    console.log("usememo[search]");
    return filterData(search);
  }, [search]);
  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Enter data"
        onChange={(e) => setSearch(e.target.value)}
      />
      {console.log(List)}
      {List.map((item) => {
        return (
          <>
            <p>{item.title}</p>
          </>
        );
      })}
    </>
  );
};
export default FilterV2