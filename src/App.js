import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    const skip = (page - 1) * limit;
    fetch(
      `https://dummyjson.com/users?limit=10&skip=${skip}&select=firstName,lastName,age`,
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log("ddd", data.users);
        setTotalPage(Math.ceil(data.total / limit));
      });
  }, [page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
              }}
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>
          {page} of {totalPage}
        </span>
        <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
