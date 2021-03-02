import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Favorite, ModeComment } from "@material-ui/icons";
import styles from "./gallery-item.module.css";

const GalleryItem = (props) => {
  const { src, clicked } = props;
  return (
    <Link onClick={clicked} className={styles["gallery-item"]} tabIndex="0">
      <img src={src} className={styles["gallery-image"]} alt="gallery-item" />

      <div className={styles["gallery-item-info"]}>
        <ul className={styles.thumbnail}>
          <li className={styles["gallery-item-likes"]}>
            <span className={styles["visually-hidden"]}>Likes:</span>
            <Favorite />
            {56}
          </li>
          <li className={styles["gallery-item-comments"]}>
            <span className={styles["visually-hidden"]}>Comments:</span>
            <ModeComment />
            {7}
          </li>
        </ul>
      </div>
    </Link>
  );
};
GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};
export default GalleryItem;
