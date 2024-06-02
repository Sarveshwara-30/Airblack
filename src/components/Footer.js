import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <div className="image2">
        <div className="footer-divider">
          <img
            className="nxkofntfy9ikxcpxptowzhq5cdupn-icon2"
            loading="lazy"
            alt=""
            src="/nxkofntfy9ikxcpxptowzhq5cdupng-2@2x.png"
          />
          <img
            className="roobvkysvltma83f4b1idfc2spng-icon2"
            loading="lazy"
            alt=""
            src="/3roobvkysvltma83f4b1idfc2spng-2@2x.png"
          />
          <div className="frame-parent8">
            <div className="xvq22ho5urja40fbslgzxjwmapng-wrapper">
              <img
                className="xvq22ho5urja40fbslgzxjwmapng-icon2"
                loading="lazy"
                alt=""
                src="/6xvq22ho5urja40fbslgzxjwmapng-2@2x.png"
              />
            </div>
            <div className="frame-wrapper5">
              <div className="zmxqwkfbejrqapbt6wdbyw9c77apn-container">
                <img
                  className="zmxqwkfbejrqapbt6wdbyw9c77apn-icon2"
                  loading="lazy"
                  alt=""
                  src="/zmxqwkfbejrqapbt6wdbyw9c77apng-2@2x.png"
                />
                <img
                  className="olytuxqtpzi5x0j9jbbgcytfopng-icon2"
                  loading="lazy"
                  alt=""
                  src="/olytuxqtpzi5x0j9jbbgcytfopng-2@2x.png"
                />
                <img
                  className="nwplmeuuorxeizilywivinmrdsmpn-icon2"
                  loading="lazy"
                  alt=""
                  src="/nwplmeuuorxeizilywivinmrdsmpng-2@2x.png"
                />
                <h2 className="join-our-growing-container">
                  <p className="join-our-growing">{`Join our growing `}</p>
                  <p className="community-of">{`community of `}</p>
                  <p className="alumni">
                    <span>35,000</span>
                    <span className="span">+</span>
                    <span className="alumni1"> alumni</span>
                  </p>
                </h2>
              </div>
            </div>
            <img
              className="nus134xofhur4fscnynn0hazwuejp-icon2"
              loading="lazy"
              alt=""
              src="/nus134xofhur4fscnynn0hazwuejpg-2@2x.png"
            />
          </div>
          <div className="apply-button-container-parent">
            <div className="apply-button-container">
              <div className="apply-button-content">
                <img
                  className="ulgo1lvjg0qqwvsnruetz3h9eimpn-icon2"
                  loading="lazy"
                  alt=""
                  src="/ulgo1lvjg0qqwvsnruetz3h9eimpng-2@2x.png"
                />
                <button className="divframer-zlvey92">
                  <div className="apply-now-button-container">
                    <div className="p5">
                      <b className="apply-now1">Apply Now</b>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <footer className="bijgdu7wrx4u7qhuhojdtr06lmpng-parent">
              <img
                className="bijgdu7wrx4u7qhuhojdtr06lmpng-icon2"
                loading="lazy"
                alt=""
                src="/bijgdu7wrx4u7qhuhojdtr06lmpng-2@2x.png"
              />
              <div className="social-links">
                <div className="social-pair">
                  <img
                    className="brdpcuqjd3f8gbyuk0xrimiepng-icon2"
                    alt=""
                    src="/brdpcuqjd3f8gbyuk0xrimiepng-2@2x.png"
                  />
                  <img className="instagram-icon" alt="" src="/instagram.svg" />
                  <img
                    className="image-487-icon"
                    alt=""
                    src="/image-487@2x.png"
                  />
                </div>
                <div className="social-pair1">
                  <img
                    className="igiz71nklzdzeqhhjjj6zzflbgpng-icon2"
                    alt=""
                    src="/igiz71nklzdzeqhhjjj6zzflbgpng-2@2x.png"
                  />
                  <img className="linkedin-icon" alt="" src="/linkedin.svg" />
                  <img
                    className="image-488-icon"
                    alt=""
                    src="/image-488@2x.png"
                  />
                </div>
              </div>
              <img
                className="fkdjytq0z10pkcimvgg2xf3q0jpg-icon2"
                loading="lazy"
                alt=""
                src="/fkdjytq0z10pkcimvgg2xf3q0jpg-2@2x.png"
              />
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
