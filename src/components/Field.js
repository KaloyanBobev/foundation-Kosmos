//Dependancies
import React from 'react';
import PropTypes from 'prop-types';
//Statless component
const Field = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                className={props.class}
                type={props.textarea ? 'textarea' : 'text'}
                onChange={props.onChange}
                value={props.value}
                required
            />
        </div>
    )
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired,
};

Field.defaultProps = {
    textarea: false,
}
export default Field;