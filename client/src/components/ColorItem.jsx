import PropTypes from "prop-types";
import Button from "../ui/Button";

const ColorItem = (props) => {
  const { color, onDelete, onEdit } = props;

  return (
    <div className="card">
      <div className="card-body">
        <div
          className="card-img-top"
          style={{
            height: "100px",
            backgroundColor: color.hexCode,
            borderRadius: "5px",
          }}
        ></div>
        <h4 className="card-title text-bold mt-2">{color.name}</h4>
        <p>Hex Code: {color.hexCode}</p>
        <div className="d-flex justify-content-end my-2">
          <Button
            className="btn btn-danger"
            onClick={() => {
              onDelete(color.id);
            }}
          >
            Delete
          </Button>
          <Button className="btn btn-primary" onClick={() => onEdit(color)}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

ColorItem.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ColorItem;
