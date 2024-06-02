import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>
      <div className="image1">
        <div className="divframer-145h7r41">
          <img
            className="fkdjytq0z10pkcimvgg2xf3q0jpg-icon1"
            loading="lazy"
            alt=""
            src="/fkdjytq0z10pkcimvgg2xf3q0jpg-1@2x.png"
          />
          <div className="frame-parent3">
            <div className="frame-wrapper2">
              <div className="xvq22ho5urja40fbslgzxjwmapng-group">
                <img
                  className="xvq22ho5urja40fbslgzxjwmapng-icon1"
                  alt=""
                  src="/6xvq22ho5urja40fbslgzxjwmapng-1@2x.png"
                />
                <img className="vector-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
            <div className="frame-wrapper3">
              <div className="zmxqwkfbejrqapbt6wdbyw9c77apn-group">
                <img
                  className="zmxqwkfbejrqapbt6wdbyw9c77apn-icon1"
                  loading="lazy"
                  alt=""
                  src="/zmxqwkfbejrqapbt6wdbyw9c77apng-1@2x.png"
                />
                <img
                  className="olytuxqtpzi5x0j9jbbgcytfopng-icon1"
                  loading="lazy"
                  alt=""
                  src="/olytuxqtpzi5x0j9jbbgcytfopng-1@2x.png"
                />
                <h2 className="why-should-you-container">
                  <p className="why-should-you">{`Why Should You `}</p>
                  <p className="join-airblack">Join Airblack?</p>
                </h2>
              </div>
            </div>
            <div className="frame-wrapper4">
              <div className="nus134xofhur4fscnynn0hazwuejp-group">
                <img
                  className="nus134xofhur4fscnynn0hazwuejp-icon1"
                  alt=""
                  src="/nus134xofhur4fscnynn0hazwuejpg-1@2x.png"
                />
                <img
                  className="vector-icon1"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
          <div className="brdpcuqjd3f8gbyuk0xrimiepng-parent">
            <img
              className="brdpcuqjd3f8gbyuk0xrimiepng-icon1"
              loading="lazy"
              alt=""
              src="/brdpcuqjd3f8gbyuk0xrimiepng-1@2x.png"
            />
            <img
              className="nwplmeuuorxeizilywivinmrdsmpn-icon1"
              alt=""
              src="/nwplmeuuorxeizilywivinmrdsmpng-1@2x.png"
            />
            <img
              className="roobvkysvltma83f4b1idfc2spng-icon1"
              loading="lazy"
              alt=""
              src="/3roobvkysvltma83f4b1idfc2spng-1@2x.png"
            />
            <img
              className="igiz71nklzdzeqhhjjj6zzflbgpng-icon1"
              loading="lazy"
              alt=""
              src="/igiz71nklzdzeqhhjjj6zzflbgpng-1@2x.png"
            />
            <img
              className="ulgo1lvjg0qqwvsnruetz3h9eimpn-icon1"
              alt=""
              src="/ulgo1lvjg0qqwvsnruetz3h9eimpng-1@2x.png"
            />
            <div className="frame-parent4">
              <div className="nxkofntfy9ikxcpxptowzhq5cdupn-parent">
                <img
                  className="nxkofntfy9ikxcpxptowzhq5cdupn-icon1"
                  alt=""
                  src="/nxkofntfy9ikxcpxptowzhq5cdupng-1@2x.png"
                />
                <div className="frame-parent5">
                  <div className="frame-parent6">
                    <div className="empty-list-wrapper">
                      <img
                        className="empty-list-icon"
                        alt=""
                        src="/empty-list@2x.png"
                      />
                    </div>
                    <div className="do-it-together-live-on">
                      Do-it-together, live on zoom
                    </div>
                  </div>
                  <FrameComponent
                    frame12705="/frame-12705-1.svg"
                    prop="4.8 /5 "
                    ratedClasses="Rated Classes"
                  />
                  <FrameComponent
                    frame12705="/frame-12705-2.svg"
                    prop="35000+ "
                    ratedClasses="Members"
                  />
                </div>
              </div>
              <img
                className="bijgdu7wrx4u7qhuhojdtr06lmpng-icon1"
                loading="lazy"
                alt=""
                src="/bijgdu7wrx4u7qhuhojdtr06lmpng-1@2x.png"
              />
            </div>
            <button className="divframer-zlvey91">
              <div className="divframer-923v64">
                <div className="p4">
                  <b className="apply-now">Apply Now</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
