import PropTypes from "prop-types";

const skillSchema = {
  icon_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const skillsDataSchema = {
  skillsData: PropTypes.arrayOf(PropTypes.shape(skillSchema)).isRequired,
};

export { skillSchema, skillsDataSchema };
