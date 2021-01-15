import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import PropTypes from "prop-types";
import style from "./home.module.css";
import Post from "../../components/post/post.component";
import river from "../../assets/rivver.jpg";
import beard from "../../assets/beard.jpg";
import Story from "../../components/story/story.component";
import "./style.css";
import MoreModal from "./modals/more.modal";
import LikesModal from "./modals/likes.modal";
import PrefSuggestion from "./pref-users-suggestion/pref-suggestion.component";
import joe from "../../assets/joe.jpg";

export default function Home(props) {
  const [open, setOpen] = useState(false);
  const [likesModal, setLikesModal] = useState(false);
  const [hide, setHide] = useState(false);
  const { hideFooter } = props;
  useEffect(() => {
    hideFooter(true);
    window.addEventListener("resize", (e) => {
      window.innerWidth < 975 ? setHide(true) : setHide(false);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className={style.home}>
      <div className={style.dashboard}>
        <div className={style.stories}>
          <Slider
            speed={500}
            slidesToShow={7}
            slidesToScroll={3}
            arrows
            infinite={false}
            rows={1}
          >
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
          </Slider>
        </div>
        <Post setMore={setOpen} src={river} setLikes={setLikesModal} />
        <Post src={beard} />
        <Post src={river} />
        <Post src={joe} />
      </div>
      {!hide ? (
        <div className={style.suggestionContainer}>
          <div className={style.suggestedUsers}>
            <PrefSuggestion />
          </div>
        </div>
      ) : null}
      {open ? <MoreModal setMore={setOpen} open={open} /> : null}
      {likesModal ? (
        <LikesModal setLikesModal={setLikesModal} open={likesModal} />
      ) : null}
    </div>
  );
}
Home.propTypes = {
  hideFooter: PropTypes.func.isRequired,
};
