import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    static propTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log(this.props.formValues)
    }
    render() {
        const recepient = `mailto:${this.props.email}`;
        const subject = `?subject=Interested%20Client`;
        const body = `&body=${this.props.formValues.message}`;
        return (
            <a
                className="btn btn-primary"
                href={`${recepient}${subject}${body}`}
                onClick={this.logFormDataToConsole}
            >
                Contact us
            </a>
        )
    }
}

export default Button;