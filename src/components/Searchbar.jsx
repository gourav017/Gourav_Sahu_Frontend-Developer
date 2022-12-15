import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import Datagrid from "./Datagrid";
const Searchbar = () => {
  const [data, setdata] = useState([]);
  const [valuee, onChange] = useState(new Date());

  useEffect(() => {
    capsulesData();
  }, []);

  let capsulesData = async () => {
    return await axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => setdata(res.data));
  };

  const handleSearchbyStatus = async (e) => {
    let value = e.target.value;
    return axios
      .get(`https://api.spacexdata.com/v3/capsules?status=${value}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };

  const handlebyOriginal_lunch = async (valuee) => {
    return await axios
      .get(`https://api.spacexdata.com/v3/capsules?original_launch=${valuee}`)
      .then((res) => setdata(res.data));
  };
  const handlebyType = async (e) => {
    let value = e.target.value;
    return axios
      .get(`https://api.spacexdata.com/v3/capsules?type=${value}`)
      .then((res) => setdata(res.data));
  };

  return (
    <div className="searchbar">
      Searchbar
      <select onChange={handleSearchbyStatus}>
        <option value="">Filter by capsule status</option>
        <option value="active">active</option>
        <option value="retired">retired</option>
        <option value="unknown">unknown</option>
        <option value="destroyed">destroyed</option>
      </select>
      <div style={{ width: "50%" }}>
        filter by original_launch
        <Calendar onChange={onChange} value={valuee} calendarType="ISO 8601" />
      </div>
      <div>
        <select onChange={handlebyType}>
          <option value="">Filter by capsule type</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
      </div>
      <Datagrid data={data} />
    </div>
  );
};

export default Searchbar;
