import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const userId = useParams();

  useEffect(() => {
    /* console.log(userId.id); */
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId.id}`
        );
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchApi();
  }, []);
  return (
    <div>
      <h1>{user.name}</h1>

      
    </div>
  );
};

export default UserDetail;
