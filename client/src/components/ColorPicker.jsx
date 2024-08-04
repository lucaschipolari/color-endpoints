import PropTypes from "prop-types";

const ColorPicker = (props) => {
  // valor por defecto de disabled si no se manda por props
  const { color, setColor, disabled = false } = props;

  const handleChange = (e) => {
    if (!disabled) {
      setColor(e.target.value);
    }
  };

  return (
    <input
      value={color}
      onChange={handleChange}
      type="color"
      className="color-picker"
      disabled={disabled}
    />
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ColorPicker;
