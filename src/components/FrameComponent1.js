import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="fill-the-form-below-to-enquire-wrapper">
        <b className="fill-the-form">Fill the form below to enquire</b>
      </div>
      <div className="form">
        <div className="frame-parent1">
          <div className="enter-your-name-parent">
            <div className="enter-your-name">*Enter your name</div>
            <div className="input">
              <input
                className="eg-aneesha-mehra"
                placeholder="Eg. Aneesha Mehra"
                type="text"
              />
            </div>
          </div>
          <div className="tokenomic">
            <div className="enter-your-whatsapp">
              *Enter your WhatsApp Number
            </div>
            <div className="team">
              <div className="input1">
                <div className="placeholder">+91</div>
                <img className="name-icon" alt="" src="/name-icon.svg" />
              </div>
              <div className="input2">
                <input
                  className="divplaceholder"
                  placeholder="Eg. 0000000000"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="select-your-profession-parent">
            <div className="select-your-profession">
              *Select your profession
            </div>
            <div className="input3">
              <div className="choose-the-most">
                Choose the most relevant option
              </div>
              <img className="svg-icon5" alt="" src="/svg-5.svg" />
            </div>
          </div>
          <div className="form-field-list">
            <div className="select-your-goal">*Select your goal</div>
            <div className="input4">
              <div className="choose-the-most1">
                Choose the most relevant option
              </div>
              <img className="svg-icon6" alt="" src="/svg-5.svg" />
            </div>
          </div>
          <div className="form-field-list1">
            <div className="select-your-city">*Select your city</div>
            <div className="input5">
              <div className="choose-the-most2">
                Choose the most relevant option
              </div>
              <img className="svg-icon7" alt="" src="/svg-5.svg" />
            </div>
          </div>
        </div>
        <button className="divframer-zlvey9">
          <div className="holders-twitter-followers-ai">
            <div className="p2">
              <b className="submit">Submit</b>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
