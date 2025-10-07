import PropTypes from "prop-types";

const pathsSchema = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};

export { pathsSchema };
