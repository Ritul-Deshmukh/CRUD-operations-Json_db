import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './ViewUser.css'

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h3 className="display-4 number">Patient Number: {id}</h3>
      <hr />
      <ul className="list-group w-50 rec">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Appointment Date: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Blood Group: {user.phone}</li>
        <li className="list-group-item">Any Disease: {user.website}</li>
      </ul>
      <Link className="btn button1" to="/home">
        Go To Home
      </Link>
    </div>
  );
};

export default ViewUser;