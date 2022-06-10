import PropTypes from "prop-types";
import s from "./Container.module.css";

function Reviews({ children }) {
  return <div className={s.container}>{children}</div>;
}

Reviews.propTypes = {
  children: PropTypes.node,
};

export default Reviews;
