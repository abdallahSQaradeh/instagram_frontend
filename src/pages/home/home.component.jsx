import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/actionTypes";
import style from "./home.module.css";
import Post from "../../components/post/post.component";
import Story from "../../components/story/story.component";
import "./style.css";
import MoreModal from "./modals/more.modal";
import LikesModal from "./modals/likes.modal";
import PrefSuggestion from "./pref-users-suggestion/pref-suggestion.component";

const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Home(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [likesModal, setLikesModal] = useState(false);
  const [hide, setHide] = useState(false);
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    // hideFooter(true);

    dispatch({ type: actionTypes.HIDE_FOOTER });
    window.addEventListener("resize", (e) => {
      window.innerWidth < 975 ? setHide(true) : setHide(false);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [dispatch]);
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
            {stories.map((_) => (
              <Story key={_} />
            ))}
          </Slider>
        </div>
        {posts &&
          posts.map((post, idx) => {
            return (
              <Post
                setMore={setOpen}
                src={post.src}
                caption={post.caption}
                setLikes={setLikesModal}
                key={`${post.id}${`xc${idx}`}`}
              />
            );
          })}
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
