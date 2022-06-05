import PropTypes from "prop-types";

function MoviesPage({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MoviesPage;
