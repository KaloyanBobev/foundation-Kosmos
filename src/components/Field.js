// Dependencies
import React from "react";
import PropTypes from "prop-types";

const Field = (props) => {
  return (
    <div>
      {/* Display the label for the input or textarea */}
      <label>{props.label}</label>

      {/* Conditionally render either a textarea or input based on the `textarea` prop */}
      <input
        placeholder={props.placeholder} // Placeholder text for input field
        className={props.class} // CSS class for styling
        type={props.textarea ? "textarea" : "text"} // Render textarea if textarea is true, otherwise input
        onChange={props.onChange} // Handler for input changes
        value={props.value} // Current value of the field
        required // Makes the field required
      />
    </div>
  );
};

// Prop types ensure that the expected types of data are passed to the component.
Field.propTypes = {
  label: PropTypes.string.isRequired, // The label is required and should be a string.
  onChange: PropTypes.func.isRequired, // The onChange handler is required and must be a function.
  value: PropTypes.string.isRequired, // The value is required and should be a string.
  textarea: PropTypes.bool.isRequired, // The textarea prop is required and must be a boolean.
};

// Default prop values to ensure the component works correctly if not explicitly provided.
Field.defaultProps = {
  textarea: false, // By default, the component will render an input, not a textarea.
};

export default Field;
