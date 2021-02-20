import axios from "axios";

export async function fetchData(query = "", page = 1) {
  const res = await axios.get("https://api.github.com/search/users", {
    params: { q: query, page, per_page: 10 },
  });

  const { items, total_count } = res.data;
  if (items.length === 0) throw new Error("No users found matching that name.");

  const urlArr = items.map((user) => user.url);
  const userData = await Promise.allSettled(
    urlArr.map((url) => axios.get(url).then((res) => res.data))
  );
  const userList = userData.reduce((acc, cur) => {
    return cur.status === "fulfilled" ? [...acc, cur.value] : acc;
  }, []);

  if (userList.length === 0) throw new Error("Rate limit reached.");

  return { userList, total_count };
}
