import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainBlog from "../../components/MainBlog/MainBlog";
import classes from "./Homepage.module.css";
import { DataContext } from "../../useContext/DataContext.js.js";

function Homepage({ location, history }) {
  const [apiData, setApiData] = useState();
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  const fetchData = async () => {
    try {
      let keyword = await new URLSearchParams(location.search).get("keyword");
      if (keyword === null || keyword === "undefined") {
        history.push("/");
        keyword = "";
      } else {
        history.push(`/?keyword=${keyword}`);
        setSearch(keyword);
      }

      const res = await axios.get(`http://localhost:4000/trips?keyword=${keyword}`);
      setApiData(res.data.data);
    } catch (err) {
      console.log("Fetch api data failed.", err);
    }
  };

  const onSubmitSearch = async event => {
    if (event) {
      event.preventDefault();
    }
    history.push(`?keyword=${search}`);

    try {
      const res = await axios.get(`http://localhost:4000/trips?keyword=${search}`);
      setApiData(res.data.data);
    } catch (err) {
      console.log("Search api failed.", err);
      setApiData(null);
    }
  };

  const onTagChanged = async () => {
    history.push(`?keyword=${tag}`);
    try {
      const res = await axios.get(`http://localhost:4000/trips?keyword=${tag}`);
      setApiData(res.data.data);
    } catch (err) {
      console.log("Search api failed.", err);
      setApiData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    onTagChanged();
  }, [tag]);

  return (
    <div className={classes.container}>
      <DataContext.Provider value={{ apiData, search, setSearch, tag, setTag }}>
        <h1>เที่ยวไหนดี</h1>

        <form onSubmit={onSubmitSearch}>
          <SearchBar />
        </form>

        <MainBlog />
      </DataContext.Provider>
    </div>
  );
}

export default Homepage;
