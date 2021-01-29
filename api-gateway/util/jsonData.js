const axios = require("axios");

const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:9000/trips");
    const jsonData = res.data;
    return jsonData;
  } catch (err) {
    console.log("Fetch API data failed.", err);
  }
};

exports.fetchData = fetchData;
