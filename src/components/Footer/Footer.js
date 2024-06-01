import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoPj.png";
import "./Footer.css";
import emailImg from "../images/email.png";
import locImg from "../images/location.png";
import mobImg from "../images/mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faYoutube,
  faWhatsapp,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-top">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} className="footer-logo" alt="Company Logo" />
            PJSoftTech  
            <div className="footer-topright">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="spacebtwicon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/pjsofttech/",
                    "_blank"
                  )
                }
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="spacebtwicon"
                onClick={() =>
                  window.open("https://www.facebook.com/profile.php?id=61555475266348", "_blank")
                }
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="spacebtwicon"
                onClick={() =>
                  window.open("https://www.youtube.com/@OOAcademyPune", "_blank")
                }
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="spacebtwicon"
                onClick={() =>
                  window.open("https://wa.me/918010457760", "_blank")
                }
              />
              <FontAwesomeIcon
                icon={faTelegram}
                className="spacebtwicon"
                onClick={() =>
                  window.open("https://t.me/YourTelegramHandle", "_blank")
                }
              />
            </div>
          </div>
        </div>

        <div className="container-bottom">
          <div className="footer-bottom">
            <div className="footer-services">
              <h4>Our Services</h4>
              <hr
                style={{
                  border: "2px solid",
                  // marginLeft: "10%",
                  marginRight: "15%",
                  color: "orange",
                  width:"100%",
                  // marginTop:"-3%"
                }}
              />
              <div className="services-grid">
                <div className="service-col">
                  <ul>
                    <li>
                      <Link to="/student-information-system" style={{ color: "black",textDecoration: "none"  }}>
                        Student Information System
                      </Link>
                    </li>
                    <li>
                      <Link to="/online-admission-system" style={{ color: "black",textDecoration: "none"  }}>
                        Online Admission System
                      </Link>
                    </li>
                    <li>
                      <Link to="/fees-management-system" style={{ color: "black",textDecoration: "none"  }}>
                        Fees Management System
                      </Link>
                    </li>
                    <li>
                      <Link to="/online-examination-system" style={{ color: "black",textDecoration: "none"  }}>
                        Online Examination System
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="service-col">
                  <ul>
                    <li>
                      <Link
                        to="/attendance-management-system"
                        style={{ color: "black",textDecoration: "none"  }}
                      >
                        Attendance Management System
                      </Link>
                    </li>
                    <li>
                      <Link to="/higher-education-system" style={{ color: "black" ,textDecoration: "none" }}>
                        Higher Education System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/university-management-software"
                        style={{ color: "black",textDecoration: "none"  }}
                      >
                        University Management Software
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/institute-management-software"
                        style={{ color: "black",textDecoration: "none"  }}
                      >
                        Institute Management Software
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="service-col">
                  <ul>
                    <li>
                      <Link to="/college-management-software" style={{ color: "black",textDecoration: "none"  }}>
                        College Management Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/school-management-software" style={{ color: "black" ,textDecoration: "none" }}>
                        School Management Software
                      </Link>
                    </li>
                    <li>
                      <Link to="/faculty-management-software" style={{ color: "black",textDecoration: "none"  }}>
                        Faculty Management System
                      </Link>
                    </li>
                    <li>
                      <Link to="/learning-management-software" style={{ color: "black" ,textDecoration: "none" }}>
                        Learning Management System
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <hr
                style={{
                  border: "2px solid",
                  marginLeft: "25%",
                  marginRight: "15%",
                  color: "orange",
                  width:"55%",
                  marginTop:"-3%"
                }}
              />
              <p>
                <img className="imgSize" src={emailImg} alt="Email Icon" />
                <a
                  href="mailto:pjsofttech@gmail.com"
                  style={{ color: "black",textDecoration: "none"  }}
                >
                  pjsofttech@gmail.com
                </a>
              </p>
              <p>
                <img className="imgSize" src={mobImg} alt="Mobile Icon" />
                <a href="tel:+918010457760" style={{ color: "black",textDecoration: "none"  }}>
                  (+91) 99235 70901
                </a>
              </p>
              <p>
                <img className="imgSize" src={locImg} alt="Location Icon" />
                <a
                  href="https://www.google.com/maps?q=PjSoftTech+pvt+ltd,+Lokmanya+Bal+Gangadhar+Tilak+Rd,+Sadashiv+Peth,+Pune,+Maharashtra+411030"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" ,textDecoration: "none"  }}
                >
                  PjSoftTech Pvt Ltd, 203,
                  <br />
                   2nd floor, Mangalmurti Complex, behind ABIL Tower,                  
                  <br />
                  hirabagh chowk, Tilak Road,
                  <br />
                  Shrukravar Peth, Pune-411002,
                  <br/>
                  India
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-copyright" style={{ color: "black" }}>
        &copy; 2024 PJSoftTech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
