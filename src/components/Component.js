import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <section className={`section1 ${className}`}>
      <div className="inner">
        <div className="frame-parent7">
          <div className="certification-icon-wrapper">
            <img
              className="certification-icon"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <h2 className="get-certified-from-container">
            <p className="get-certified-from">{`Get Certified From `}</p>
            <p className="indias-biggest">{`India’s Biggest `}</p>
            <p className="beauty-platform">Beauty Platform</p>
          </h2>
        </div>
      </div>
      <img className="bottom-icon" loading="lazy" alt="" src="/vector-4.svg" />
      <img
        className="image-676-icon"
        loading="lazy"
        alt=""
        src="/image-676@2x.png"
      />
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
