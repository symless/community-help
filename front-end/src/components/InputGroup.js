import React from "react";
import PropTypes from "prop-types";
import "../styles/InputGroup.scss";

/**
 * `InputGroup`
 *
 * Approval: Approved
 */
export const InputGroup = ({ children }) => (
  <div className="input-group">{children}</div>
);

InputGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

/**
 * `TextAddon`
 *
 * Approval: Approved
 */
export const TextAddon = ({ text }) => <div className="text-addon">{text}</div>;

TextAddon.propTypes = {
  text: PropTypes.string.isRequired,
};
