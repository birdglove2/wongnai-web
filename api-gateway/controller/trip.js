const fetching = require("../util/jsonData");

exports.getTrips = async (req, res, next) => {
  const keyword = req.query.keyword;

  try {
    const jsonData = await fetching.fetchData();

    if (!keyword) {
      return res.status(200).json({ message: "Search is not set, return all", data: jsonData });
    }

    // return set of json data filtered by keyword
    const result = jsonData.filter(data => {
      let i;
      for (i = 0; i < data.tags.length; i++) {
        if (data.tags[i].includes(keyword)) {
          return data;
        }
      }
      if (data.title.includes(keyword) || data.description.includes(keyword)) {
        return data;
      }
    });

    if (!result.length > 0) {
      return res.status(400).json({ message: "keyword is not found", data: null });
    }

    res
      .status(200)
      .json({ message: `Retrieved data from searching keyword = ${keyword}`, data: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Cannot fetch data from api" });
  }
};
