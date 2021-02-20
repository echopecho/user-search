import axios from "axios";

export async function fetchData(query = "", page = 1) {
  // Make request for initial query meta data.
  const res = await axios.get("https://api.github.com/search/users", {
    params: { q: query, page, per_page: 10 },
  });

  const { items, total_count } = res.data;
  if (items.length === 0) throw new Error("No users found matching that name.");

  // Pull out each user's URL then make each request. Fullfil each regardless.
  const urlArr = items.map((user) => user.url);
  const userData = await Promise.allSettled(
    urlArr.map((url) => axios.get(url).then((res) => res.data))
  );
  // Filter out "rejected" promises and map value property to new array.
  const userList = userData.reduce((acc, cur) => {
    return cur.status === "fulfilled" ? [...acc, cur.value] : acc;
  }, []);

  if (userList.length === 0) throw new Error("Rate limit reached.");

  return { userList, total_count };
}
