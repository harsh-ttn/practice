import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        /* console.log(res.data); */
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <Title title={"Our Users"} />
      {users.map((user) => (
        <Link
          to={`user/${user.id}`}
          key={user.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            style={{
              textAlign: "center",
              border: "1px solid black",
              width: "50vw",
              margin: 20,
              padding: 20,
            }}
          >
            <p>Name - {user.name}</p>
            <p>Email - {user.email}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Home;
