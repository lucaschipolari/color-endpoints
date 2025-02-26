import PropTypes from "prop-types";
import ColorItem from "./ColorItem";

const ColorList = (props) => {
  const { color, onDelete, onEdit } = props;
  return (
    <div className="d-flex flex-wrap gap-3">
      {color.map((c) => (
        <ColorItem key={c.id} color={c} onDelete={onDelete} onEdit={onEdit} />
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
  onEdit: PropTypes.func.isRequired,
};

export default ColorList;
