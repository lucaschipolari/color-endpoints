import PropTypes from "prop-types";
import ColorItem from "./ColorItem";

const ColorList = (props) => {
  const { color, onDelete } = props;
  return (
    <div className="d-flex flex-wrap gap-3">
      {color.map((c) => (
        <ColorItem key={c.id} color={c} onDelete={onDelete} />
      ))}
    </div>
  );
};

ColorList.propTypes = {
  color: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hexCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColorList;
