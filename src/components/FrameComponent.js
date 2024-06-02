import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", frame12705, prop, ratedClasses }) => {
  return (
    <div className={`frame-parent2 ${className}`}>
      <div className="frame-wrapper1">
        <img className="frame-child" alt="" src={frame12705} />
      </div>
      <div className="rated-classes">
        <p className="p3">{prop}</p>
        <p className="rated-classes1">{ratedClasses}</p>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame12705: PropTypes.string,
  prop: PropTypes.string,
  ratedClasses: PropTypes.string,
};

export default FrameComponent;
