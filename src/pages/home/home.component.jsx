// import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import Post from "../../components/post/post.component";
import river from "../../assets/rivver.jpg";
import beard from "../../assets/beard.jpg";

export default function Home() {
  /* const [hide, setHide] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      window.innerWidth < 900 ? setHide(true) : setHide(false);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []); */
  return (
    <div className={style.home}>
      <div className={style.dashboard}>
        <div className={style.stories}>sds</div>
        <Post src={river} />
        <Post src={beard} />
        <Post src={river} />
      </div>
      {/* {!hide ? (
        <div>
          <div className={style.suggestedUsers}>asdasd</div>
        </div>
     ) : null} */}
    </div>
  );
}
