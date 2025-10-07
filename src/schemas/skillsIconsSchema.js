import PropTypes from "prop-types";

const skillsIconsSchema = {
  icon_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const skillsDataSchema = {
  skillsData: PropTypes.arrayOf(PropTypes.shape(skillsIconsSchema)).isRequired,
};

export { skillsIconsSchema, skillsDataSchema };
