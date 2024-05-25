import PropTypes from 'prop-types'

const InputField = ({ id, label, type, name, value, onChange, className }) => (
    <div className={`form-floating mb-3 ${className}`}>
        <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            placeholder={label}
            required
            onChange={onChange}
            value={value}
        />
        <label htmlFor={id}>{label}</label>
    </div>
)

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default InputField