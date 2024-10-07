import React from "react";
import PropTypes from "prop-types";

// Creating a class-based component called Button
class Button extends React.Component {
  // Defining prop types for the component to ensure correct data types are passed
  static propTypes = {
    email: PropTypes.string.isRequired, // Email is required and should be a string
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired, // Name is required and should be a string
      email: PropTypes.string.isRequired, // Email is required and should be a string
      message: PropTypes.string.isRequired, // Message is required and should be a string
    }).isRequired,
  };

  // Constructor to initialize the state and bind methods
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false, // Track whether the button has been clicked
    };
    // Bind the logFormDataToConsole method to ensure it uses the correct 'this'
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  // Method to log form data to the console and update the state
  logFormDataToConsole() {
    console.log("Form Values", this.props.formValues); // Log form values to the console
    this.setState({ isClicked: true }); // Set isClicked to true after the button is clicked
  }

  render() {
    // Create a mailto link with the recipient's email, subject, and body
    const recepient = `mailto:${this.props.email}`;
    const subject = `?subject=Contact%20Form%20Fondacia%20Kosmos`; // Subject for the email
    const body = `&body=${this.props.formValues.message}`; // Include form message in the email body

    return (
      // Email link that triggers the email client with pre-filled details
      <a href={`${recepient}${subject}${body}`}>
        <button
          className="btn btn-primary" // Button with Bootstrap 'btn-primary' class for styling
          disabled={this.state.isClicked} // Disable the button after it's clicked
          onClick={this.logFormDataToConsole}
        >
          {" "}
          {/* Log form data when the button is clicked */}
          Contact us
        </button>
      </a>
    );
  }
}

export default Button;
