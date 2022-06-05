import PropTypes from "prop-types";

function MovieDetailsPage({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}
MovieDetailsPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MovieDetailsPage;
