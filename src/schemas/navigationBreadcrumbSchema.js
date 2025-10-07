import PropTypes from "prop-types";

const navigationBreadcrumbSchema = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};

export { navigationBreadcrumbSchema };
