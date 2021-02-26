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
        console.log('Form Values', this.props.formValues)
        this.setState({ isClicked: true });
    }
    render() {
        const recepient = `mailto:${this.props.email}`;
        const subject = `?subject=Interested%20Client`;
        const body = `&body=${this.props.formValues.message}`;
        return (
            <button
                className="btn btn-primary"
            >
                <a
                    href={`${recepient}${subject}${body}`}
                    disabled={this.state.isClicked}
                    onClick={this.logFormDataToConsole}>Contact us</a>

            </button>
        )
    }
}

export default Button;