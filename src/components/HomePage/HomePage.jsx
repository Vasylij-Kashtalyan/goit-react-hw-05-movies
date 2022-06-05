import PropTypes from "prop-types";
import s from "./Controls.module.css";

function HomePage({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option) => {
        return (
          <button
            key={option}
            className={s.button}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </ul>
  );
}

HomePage.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default HomePage;
