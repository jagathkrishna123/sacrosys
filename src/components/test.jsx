import React from "react";
import { useQuery } from "@tanstack/react-query";

function UsersList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  // 1️⃣ Show loading text while fetching
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 2️⃣ Show error text if request fails
  if (isError) {
    return <p>Something went wrong!</p>;
  }

  // 3️⃣ Display the fetched data
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
