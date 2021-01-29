import React, { useContext } from "react";
import classes from "./MainBlog.module.css";
import { DataContext } from "../../useContext/DataContext.js";

function MainBlog() {
  const { apiData, setSearch, setTag } = useContext(DataContext);

  return (
    <div>
      {apiData ? (
        apiData.map((data, index) => {
          return (
            <div key={index}>
              <div className={classes.bloggrid}>
                <div>
                  <img className={classes.imgMajor} src={data.photos[0]} />
                </div>

                <div className={classes.rightsubgrid}>
                  <h2 className={classes.title}>
                    <a href={data.url}>{data.title}</a>
                  </h2>
                  <h4>
                    {data.description.substring(0, 100)} ....{" "}
                    <a className={classes.readmore} href={data.url}>
                      อ่านต่อ
                    </a>
                  </h4>

                  <h5>
                    หมวด -{" "}
                    {data.tags.map((tag, index) => {
                      return (
                        <div key={index} style={{ display: "inline" }}>
                          <h5
                            onClick={() => {
                              setSearch(tag);
                              setTag(tag);
                            }}
                            className={classes.tag}
                          >
                            {tag}
                          </h5>{" "}
                        </div>
                      );
                    })}
                  </h5>

                  <div>
                    {data.photos.map((url, index) => {
                      if (index !== 0) {
                        return <img key={index} className={classes.imgMinor} src={url} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>ไม่พบผลลัพธ์ใดๆ จากการค้นหาของคุณ โปรดลองอีกครั้ง...</h2>
      )}
    </div>
  );
}

export default MainBlog;
